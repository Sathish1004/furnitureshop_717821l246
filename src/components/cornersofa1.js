import React from 'react';
import './bed1.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegHandPointRight } from "react-icons/fa";
function Cornersofa1() {
  return (
    <div>
      <br></br>
      <h1>Cornersofa</h1>
      <br></br>
      <Container className='hotelcon'>
        <Row>
          <Col className='' lg={8}>
            <div>
               <img className='mand' src='https://lago-cdn.thron.com/delivery/public/image/lago/623e99f7-50cd-415c-840e-d3486b1096c6/sqVrcnw/std/1920x3413/modern-corner-sofa-or-air-soft-sofa-or-lago.webp?cropx=0&cropy=21.356673960613&cropw=100&croph=78.774617067834&quality=70'>
              </img> 
              <br></br>
            </div>
          </Col>
          <Col className='' lg={4}>
          <h4 className='superior'>Superior category :</h4>
            <p className='para232'>
          A corner sofa, also known as a sectional sofa or corner couch, is a type of seating 
          furniture designed to fit into corners or snugly against walls, maximizing space in a 
          room while offering ample seating. These sofas are popular for their versatility, as
           they can adapt to various room layouts and provide a comfortable and functional seating arrangement.
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

export default Cornersofa1