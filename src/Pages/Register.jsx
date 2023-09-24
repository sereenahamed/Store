import { faLocationDot, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import './Register.css'



function Register(){
  const [form , setForm]=useState({
    userName: '', // Default value for username field
    passward: '', // Default value for password field
    confirmPassward: '', // Default value for confirm password field
  });
  const [errors , setErrors]=useState({
    userName: '', // Initialize with an empty string for default value
    passward: '', // Initialize with an empty string for default value
    confirmPassward: '', // Initialize with an empty string for default value
  });

  const setField =(field , value)=>{
    setForm({
      ...form,
      [field]:value
    })
  }
  const validateForm = () =>{
    // eslint-disable-next-line no-unused-vars
    const {userName, passward, confirmPassward}= form
    const newErrors = {}

    if(!userName || userName==='') {
    newErrors.userName = 'please enter your username'
    }

    if (passward !== confirmPassward) {
      newErrors.confirmPassward = 'Password does not match';
    }

    setErrors(newErrors);
    return(newErrors);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // eslint-disable-next-line no-unused-vars
    const formErrors = validateForm()
  }

  return(
    <div className="registerDiv">
      <h2>Sign Up</h2>
      <div className="divBody">
        <Form>
        <Row className='mb-2'>
        <InputGroup className="mb-3">
        <InputGroup.Text id="userName"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
        <Form.Control
        type='text'
          placeholder="Username"
          aria-label="Username"
          aria-describedby="userName"
          value={form.userName}
          onChange={(e)=>{
            setField('userName', e.target.value)
          }}
          isInvalid={!!errors.userName}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.userName}
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="passward"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="password"
          aria-label="password"
          aria-describedby="passward"
          value={form.passward}
          onChange={(e)=>{
            setField('passward', e.target.value)
          }
          }
          isInvalid={!!errors.passward}
        />
      </InputGroup>
      <Form.Control.Feedback type='invalid'>
        {errors.passward}
      </Form.Control.Feedback>

      <InputGroup className="mb-3">
        <InputGroup.Text id="Confirm password"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="Confirm password"
          aria-label="Confirm password"
          aria-describedby="Confirm password"
          value={form.confirmPassward}
          onChange={(e)=>{
            setField('confirmPassward', e.target.value)
          }
          }
          isInvalid={!!errors.confirmPassward}
        />
      </InputGroup>
      <Form.Control.Feedback type='invalid'>
        {errors.confirmPassward}
      </Form.Control.Feedback>


      <InputGroup className="mb-3">
        <InputGroup.Text id="Address"><FontAwesomeIcon icon={faLocationDot} /></InputGroup.Text>
        <Form.Control
        type='text'
          placeholder="Address"
          aria-label="Address"
          aria-describedby="Address"
        />
      </InputGroup>
      </Row>

      
      <Row className='mx-1'>
      <Form.Group as={Col} className="mb-3">
          <Button type="submit" onClick={handleSubmit} >Sign in</Button>
          <span>Already have an acount?</span>
          <a href="/Login">Login!</a>
          </Form.Group>
          </Row>

        </Form>
      </div>
    </div>
  
  )

}

export default Register;