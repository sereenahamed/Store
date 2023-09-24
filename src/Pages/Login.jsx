import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Button,Col, Form, InputGroup, Row } from "react-bootstrap";

function Login(){
  const [user , setUser]= useState('');
  const [passward , setPassword] = useState('');
  const passwordInputRef = useRef();

  useEffect( ()=>{
    const userNameValue = user.toLowerCase();
    if (userNameValue.includes('@gmail.com')){
      passwordInputRef.current.focus();
    }
  },[user]
  );
  return(
    <div className="registerDiv">
      <h2>Login</h2>
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
          value={user}
          onChange={ (e)=>{
            setUser(e.target.value)
          }
          }
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="passward"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="password"
          aria-label="password"
          aria-describedby="passward"
          value={passward}
          onChange={
            (e)=>{
            setPassword(e.target.value)
            }
            }
            ref={passwordInputRef}
        />
      </InputGroup>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck"
     >
        <Col>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>
      </Row>

      <Form.Group as={Col} className="mb-3">
          <Button href="/home">Log in</Button>
          <span>Dont have an acount?<a href="/Register">Sign Up</a></span>
        
      </Form.Group>
    </Form>

      </div>
      </div>
  )
}

export default Login;