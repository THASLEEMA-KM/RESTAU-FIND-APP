import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../Redux/restauSlice';
import { Utensils } from 'lucide-react';



function Header({insideHome}) {

  const dispatch = useDispatch()
  
  return (
    <div>
        <Navbar expand="lg" className="bg-black w-100 position-fixed top-0" style={{zIndex:'10',height:'15vh'}}>
        <Container>
          <Navbar.Brand>
           <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder text-warning'>
           <Utensils size={35} className='text-warning me-2' strokeWidth={3.5} absoluteStrokeWidth />
               RestauFind
           </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
            {
              insideHome &&
              <Nav.Link ><input onChange={
                e=>dispatch(searchRestaurant(e.target.value.toLowerCase()))} 
                style={{width:'400px'}} type='text' 
                className='p-1 rounded-2 ' placeholder='   Search Restaurant by City Name' /></Nav.Link>
            }
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header