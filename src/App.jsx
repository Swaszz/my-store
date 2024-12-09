
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AppList from './AppList';
import Carousel from 'react-bootstrap/Carousel';
import car3 from './images/car3.jpeg';
import car2 from './images/car 2.jpeg';
import car1 from './images/car1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './product.css'


function App() {

  const[products,setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>

<Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
        <Navbar.Brand href="#">THRIFT STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contact us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               About us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    <Carousel>
      <Carousel.Item>
      <img src={car3} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={car2} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={car1} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
    </Carousel>
    
       
    <Container>
      <Row>
      
          {products.map((product, index) => ( 
            <Col xs={12} sm={6} md={4} lg={3} key={index}> 
              <AppList productData={product} /> 
            </Col> 
          ))} 
          
      </Row>
    </Container>

    </>
  )
}

export default App
