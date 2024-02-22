import React from 'react';
import './bed1.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
function Bed1() {
  return (
    <div>
      <br></br>
      <h1>Bed</h1>
      <br></br>
      <Container className='hotelcon'>
        <Row>
          <Col className='' lg={8}>
            <div>
               <img className='mand' src='https://5.imimg.com/data5/SELLER/Default/2022/10/UW/DJ/SB/142707471/peps-cirrus-coir-mattress-500x500.jpg'>
              </img> 
              <br></br>
            </div>
          </Col>
          <Col className='' lg={4}>
          <h4 className='superior'>Superior category :</h4>
            <p className='para232'>
            a piece of furniture upon which or within which a person sleeps, 
            rests, or stays when not well. the mattress and bedclothes together 
            with the bedstead of a bed.
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

export default Bed1