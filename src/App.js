import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/home';
import First from './components/first';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signout';
import NavLink from 'react-bootstrap/NavLink';
import Bed from './components/bed';
import Sofa from './components/sofa';
import Cornersofa from './components/cornersofa';
import Cupboard from './components/cupboard';
import Cot from './components/cot';
import Checklist from './components/checklist';
import Searchbar from './components/searchbar';
import AddressForm from "./components/Addressform";
import PaymentForm from "./components/paytm";
import './App.css'
import Bed1 from "./components/bed1";
import Sofa1 from "./components/sofa1";
import Cornersofa1 from "./components/cornersofa1";
import Cot1 from "./components/cot1";
import Cupboard1 from "./components/cupboard1";
export default function App() {
  const navigate = useNavigate();
  const navtohome = () => {
    navigate("/home")
  };
  const navtoabout = () => {
    navigate("/about")
  };
  const navtocontact = () => {
    navigate("/contact")
  };
  const navtologin = () => {
    navigate("/login")
  };

  const navtosignup = () => {
    navigate("/signup");
  };

  const navtochecklist = () => {
    navigate("/checklist");
  };
  const navtosearchbar = () => {
    navigate("/searchbar");
  };
  const navtoaddressForm = () => {
    navigate("/addressForm");
  };

  return (

    <div>

      <>
        {/* <ButtonGroup aria-label="Basic example"> */}
        <div className="zone">
          <NavLink onClick={navtohome}>home</NavLink>
          <NavLink onClick={navtocontact}>contact</NavLink>
          <NavLink onClick={navtoabout}>about</NavLink>
          <NavLink onClick={navtologin}>login</NavLink>
          <NavLink onClick={navtosignup}>signup</NavLink>
          <NavLink onClick={navtochecklist}>checklist</NavLink>
          <NavLink onClick={navtosearchbar}>searchbar</NavLink>
          <NavLink onClick={navtoaddressForm}>addressForm</NavLink>

        </div>
        {/* </ButtonGroup> */}
        <Routes>
          <Route path='/' element={<First></First>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/bed' element={<Bed></Bed>}></Route>
          <Route path='/sofa' element={<Sofa></Sofa>}></Route>
          <Route path='/cornersofa' element={<Cornersofa></Cornersofa>}></Route>
          <Route path='/cupboard' element={<Cupboard></Cupboard>}></Route>
          <Route path='/cot' element={<Cot></Cot>}></Route>
          <Route path='/checklist' element={<Checklist></Checklist>}></Route>
          <Route path='/searchbar' element={<Searchbar></Searchbar>}></Route>
          <Route path='/addressForm' element={<AddressForm></AddressForm>}></Route>
          <Route path='/paytm' element={<PaymentForm></PaymentForm>}></Route>
          <Route path="/bed1" element={<Bed1 />} />
          <Route path="/sofa1" element={<Sofa1 />} />
          <Route path="/Cornersofa1" element={<Cornersofa1 />} />
          <Route path="/cupboard1" element={<Cupboard1 />} />
          <Route path="/cot1" element={<Cot1 />} />




        </Routes>
      </>
    </div>
  );
}
