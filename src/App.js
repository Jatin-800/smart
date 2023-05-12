import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";
import Home from "./view/screen/Home";
import Product from './view/screen/Product';
import About from './view/screen/About';
import Register from "./view/screen/Register";
import Details from "./view/screen/Details";
import Login from "./view/screen/Login";
import {menubar,shop} from "./view/data/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from "react";
import './view/style/style.css'
import Cart from "./view/screen/Cart";
function App() {
  const[user,setUser]=useState();(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  // function logout(){
  //   alert('logout')
  //   localStorage.clear()
  // }
  return (
      
    <BrowserRouter>
     <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',gap:'40px', fontSize:'25px' }}>
            <Navbar.Brand href="#home" className="logo" style={{fontSize:'25px',fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',color:'orange',position:'relative',top:'5px'}} >SMART WATCH</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            {
              menubar.map(function(d){
                return(
                  <Nav.Link href={`/${d}`}>{d}</Nav.Link>
                )
              })
            }
             <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
         </Nav>
          {/* {
            shop.map(function(d){
              return(
                <img src={d} className="cart"  onClick={()=>('/Cart')}/>
              )
            })
          } */}
       {/* <Button onClick={logout}>Log Out</Button>
         */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Details" element={<Details/>}/>
          
            {
              user? null:<>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            </>
            }
           </Routes> 

           <footer className="bg-dark text-white pt-5 pb-4">
              <div className="row text-center text-md-left">
                <div className="col-md-4 col-lg-3 col-xl- mx-auto mt-3">
                <h4 className=" oppo1 mb-4 ">Get In Touch</h4>
                <p className="oppo">Jaipur-302012, Rajasthan, India</p>
                <p className="oppo">E-Mail: Watches@Gmail.com</p>
                <p className="oppo">Phone: +917877474848</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h4 className="oppo1 mb-4">LUXURY WATCH</h4>
                  <p className="redmi mb-4">Introducing Smart Watches Redesigned and re-engineered to help you stay more healthy, active and connected.</p>
                </div>
                
                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h4 className="oppo1 mb-4">OUR SERVICES</h4>
                  <p className="oppo">Watch Repair</p>
                  <p className="oppo">Watch Exchange</p>
                  <p className="oppo">Battery Replacement</p>
                  <p className="oppo">Sizing Adjustments</p>
                  <p className="oppo">Ultrasonic Cleaning</p>
                  <p className="oppo">Straps & Bracelets</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h4 className=" oppo1 mb-4">Navigation</h4>
                <Link to='/Home' className="text-decoration-none">
                <p className="vivo">Home</p></Link>
                <Link to='/Product' className="text-decoration-none">
                <p className="vivo">Product</p></Link>
                <Link to='/About' className="text-decoration-none">
                <p className="vivo">About</p></Link>
                <Link to='/Register' className="text-decoration-none">
                <p className="vivo">Register</p></Link>

                </div>
                
                <hr className="mb-4" style={{marginTop:60}}/>
                <div className="w-100 row align-items-center justify-content-center">
                  <div className="col-md-8 col-lg-8">
                    <p>Copyright © 2023 | Luxury Watch Company, All rights reserved.</p>
                    
                  </div>
                </div>
              </div>
            
           </footer>
    </BrowserRouter>

    
  );
}

export default App;
