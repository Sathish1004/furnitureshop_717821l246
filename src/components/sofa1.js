import React from 'react';
import './bed1.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
function Sofa1() {
  return (
    <div>
      <br></br>
      <h1>Sofa</h1>
      <br></br>
      <Container className='hotelcon'>
        <Row>
          <Col className='' lg={8}>
            <div>
               <img className='mand' src='https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=ais'>
              </img> 
              <br></br>
            </div>
          </Col>
          <Col className='' lg={4}>
          <h4 className='superior'>Superior category :</h4>
            <p className='para232'>
            A sofa is a piece of furniture designed primarily for seating multiple people comfortably. 
            It typically consists of a frame with cushions, springs, and padding for seating. Sofas 
            come in various sizes, shapes, styles, and materials to suit different preferences and interior designs.
            </p>
            <br/>
          <Container className='hotelcon1'>
              <h5>Perfect Place for furnitures!</h5>
              <FaRegHandPointRight/> Famous and Luxurious
              <Link to='/Checklist'>
                <label> 

                </label>
                <button className='bookingbtn btn btn-primary'>Add to cart or Buy Now!</button>
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sofa1;