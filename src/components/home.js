import React, {useState} from "react"; 
import NavigationBar from './nav.js'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
const data = [
  
  {
    image:require('./home1.jpg'), 
    caption:"Where Comfort Meets Style",
    description:"At our furniture shop, we blend comfort and style seamlessly. Explore our collection to find pieces that make your space both inviting and chic."
   },
   {
    image:require('./home2.jpg'), 
    caption:"Crafting Homes, Building Dreams",
    description:"Discover furniture that transforms houses into homes. Our pieces are crafted to inspire and build the dreams you have for your living space."
   }, 
   {
    image:require('./home3.jpg'), 
    caption:"Elevate Your Space, Elevate Your Life",
    description:"Elevate your living experience with our curated selection of furniture. From classic elegance to modern functionality, find pieces that elevate not just your space, but your everyday life."
   },
   {
    image:require('./home4.jpg'), 
    caption:"Inspired Living, Exceptional Furniture",
    description:"Step into a world of inspired living with our exceptional furniture collection. Each piece is curated to bring beauty, functionality, and inspiration into your home."
   }
]

function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
        <NavigationBar/>
      <div className="hp">
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
      </div>
      </>
    );
  }
export default Home;
