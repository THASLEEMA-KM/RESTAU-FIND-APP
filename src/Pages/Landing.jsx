import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import bgimage1 from '../assets/bg1.jpg'
import bgimage2 from '../assets/bg2.jpg'
import bgimage3 from '../assets/bg3.jpg'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
      
      <Carousel>
      <Carousel.Item>
      <img src={bgimage1} width={'100%'} height={'700px'} alt="" />
        <Carousel.Caption>
          <Link to={'/home'} style={{textDecoration:'none'}}><Button className='btn btn-secondary rounded '>Get Started!</Button></Link>
          <h2 className='py-3'>Search Your favourite Restaurant!!!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bgimage2} width={'100%'} height={'700px'} alt="" />
        <Carousel.Caption>
        <Link style={{textDecoration:'none'}} to={'/home'}><Button className='btn btn-dark rounded '>Get Started!</Button></Link>          
        <h2 className='text-dark py-3'>Have a look on the dishes!!!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={bgimage3} width={'100%'} height={'700px'}  alt="" />
        <Carousel.Caption>
        <Link style={{textDecoration:'none'}} to={'/home'}><Button className='btn btn-secondary rounded '>Get Started!</Button></Link>          
        <h2 className='py-3'>
            Enjoy Your Meal!!!
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Landing
