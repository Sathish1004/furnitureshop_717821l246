import React, { useState } from 'react';
import Gpay from './gpay.js';
import { Form, Button, Row } from 'react-bootstrap';
import axios from 'axios';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = async () => {
    try {
      // Make an API call to your server to process the payment
      const response = await axios.post('/api/processPayment', {
        cardNumber,
        expiryDate,
        cvv,
      });

      // Handle the response accordingly (success or error)
      console.log(response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>Payment Process</h1>
      <Form>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="expiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handlePayment}>
          Process Payment
        </Button>
        <br></br>
        <br></br>

        <p>-------------------------------------------------------</p>
        <Gpay />
        <br></br>
        <Button variant="success" onClick={handlePayment}>
          Cash on Delivery
        </Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
