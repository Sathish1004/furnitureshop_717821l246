import React from 'react';
import './bed1.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
function Cot1() {
  return (
    <div>
      <br></br>
      <h1>Cot</h1>
      <br></br>
      <Container className='hotelcon'>
        <Row>
          <Col className='' lg={8}>
            <div>
               <img className='mand' src='https://www.lookinggoodfurniture.com/wp-content/uploads/2022/11/23-2.jpg'>
              </img> 
              <br></br>
            </div>
          </Col>
          <Col className='' lg={4}>
          <h4 className='superior'>Superior category :</h4>
            <p className='para232'>
             A cot, also known as a "crib" in some regions, is a small,
             often portable bed specifically designed for infants and young children. 
             It provides a secure and comfortable sleeping space for babies before they transition to a larger bed. 
             Here are the key features and aspects of a cot:
            </p>
            <br/>
          <Container className='hotelcon1'>
              <h5>Perfect Place for furnitures!</h5>
              <FaRegHandPointRight/> Famous and Luxurious
              <Link to='/Checklist'>
                <button className='bookingbtn btn btn-primary'>Add to cart or Buy Now!</button>
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cot1