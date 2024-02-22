import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    district: '',
    state: '',
    pinCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      district: '',
      state: '',
      pinCodeCode: ''
    });
  };

  const getCurrentAddress = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
          );
          const data = await response.json();

          setFormData({
            fullName:'Arun',
            addressLine1: data.address.road || '',
            addressLine2: data.address.house_number || '',
            city: data.address.city || '',
            district: data.address.county || '',
            state: data.address.state || '',
            zipCode: data.address.postcode || ''
          });
        } catch (error) {
          console.error('Error fetching current address:', error.message);
        }
      },
      (error) => {
        console.error('Error getting current location:', error.message);
      }
    );
  };

  return (
    <div>
      <h1>Address Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="addressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="addressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter additional address information"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select your city</option>
            <option value="City1">City 1</option>
            <option value="City2">City 2</option>
            {/* Add more cities as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="pinCode">
          <Form.Label>pin Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your pin code"
            name="pinCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </Form.Group>

     

        <Button variant="success" onClick={getCurrentAddress} style={{ marginLeft: '10px' }}>
          Use Current Address
        </Button>
        <Link to='/paytm'>
        <Button variant="success" type="submit">
          Next
        </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddressForm;