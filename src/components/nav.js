import './nav.css'
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const NavigationBar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
          <Link to="/" className="title">
           
           <i>COMFORT AREA</i>

           </Link>
  
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          </div>
          <ul className={menuOpen ? "open" : ""}>
          <li>
            <searchbar/>
            </li>
    
            <li>
            <Button variant="success" href="/bed" >Bed</Button>
            </li>
            <li>
            <Button variant="success" href="/sofa" >Sofa</Button>
            </li>
            <li>
            <Button variant="success" href="/cupboard" >Cupboard</Button>
              
            </li>
            <li>
            <Button variant="success" href="/cornersofa" >Cornersofa</Button>
              
            </li>
            <li>
            <Button variant="success" href="/cot" >Cot</Button>             
            </li>
            <li>
            <Button variant="success" href="/addressForm" >AddressForm</Button>             
            </li>
          </ul>
          
        
        </nav>
        
      );
}
export default NavigationBar