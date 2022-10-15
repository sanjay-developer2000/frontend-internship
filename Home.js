import React from 'react'
import Background from "./Videos/Background.image.mp4"
import "./Home.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Home() {
  return (
    <>
      <div className='home'>
        <video autoPlay loop muted>
          <source src={Background} type='video/mp4'></source>
        </video>
        <div className='card-wrapper'>
          <h2>Welcome to stopee</h2>
          <p>Today the dream of many <br />youngsters to buy and <br />ride in the jawa bike .Here<br /> is the right choice to bokk your<br /> classic and racing bikes</p>
        </div>
        <div>
        <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
         <p className='form-text'> We'll never share your email with anyone else.</p>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        </div>
      </div>
     
    </>
  )
}
export default Home
