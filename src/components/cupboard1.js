import React from 'react';
import './bed1.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
function Cupboard1() {
  return (
    <div>
      <br></br>
      <h1>Cupboard</h1>
      <br></br>
      <Container className='hotelcon'>
        <Row>
          <Col className='' lg={8}>
            <div>
               <img className='mand' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_4RCb3u5tAL3M3IXy6q7cNe1oNZlgQKkR8A0Wm9PngGj3c0xei5jy0TtBQMGFJjqbi4&usqp=CAU'>
              </img> 
              <br></br>
            </div>
          </Col>
          <Col className='' lg={4}>
          <h4 className='superior'>Superior category :</h4>
            <p className='para232'>
            A cupboard is a type of furniture used primarily for storage purposes. 
            It typically features shelves, drawers, or compartments enclosed by doors, 
            and it comes in various sizes, designs, and materials to suit different needs and interior styles.
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

export default Cupboard1