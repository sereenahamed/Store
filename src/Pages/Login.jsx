import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './Login.css'
import { faLocationDot, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'



// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/prop-types
function LoginForm ({onLoginPClick}){
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

  return (
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
          <Button href='/home'>Log in</Button>
          <span>Dont have an acount?<a onClick={onLoginPClick} style={{
            fontWeight:'bold'
          }}>Sign Up</a></span>
        
      </Form.Group>
    </Form>
  )
}


// eslint-disable-next-line react/prop-types
function RegisterForm({onSignUPClick}){
  const [form , setForm]=useState({
    userName: '', // Default value for username field
    passward: '', // Default value for password field
    confirmPassward: '', // Default value for confirm password field
  });
  // eslint-disable-next-line no-unused-vars
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
  // Check if there are any errors
  if (Object.keys(formErrors).length === 0) {
    // If no errors, you can proceed with form submission or other actions
    console.log('Form submitted successfully');
  } else {
    console.log('Form has errors, please correct them');
  }
}

  return(
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
          <Button type="submit" onClick={handleSubmit}>Sign in</Button>
          <span>Already have an acount?<a onClick={onSignUPClick} style={{
            fontWeight:'bold'
          }}>Login</a></span>
      </Form.Group>
      </Row>
    </Form>


  )
}



function FormCard (){

const [isLogIn , setIsLogIn]= useState(false);

const onSignUPClick=()=> {
  setIsLogIn(true)
}

const onLoginPClick=()=>{
  setIsLogIn(false)
}
if (isLogIn){
  return(
    <Card style={{ width: '400px !important' , padding:'200px!important' , margin:'auto !important' , 
    marginTop:'120px !important'
    ,backgroundColor:'transparent' , boxShadow:'3px 3px 5px #888 '}}>
      <Card.Body>
        <Card.Title className='mb-4' style={{
          textAlign:"center"
        }}>Login</Card.Title>
        <LoginForm onLoginPClick={onLoginPClick}/>
      </Card.Body>
    </Card>
  )
}
else{
  return(
    <Card style={{ width: '400px !important' , padding:'200px !important' , margin:'auto !important' , 
      marginTop:'120px !important'
      ,backgroundColor:'transparent !important' , boxShadow:'3px 3px 5px #888 !important'}}>
       
          <Card.Title className='mb-4' style={{
            textAlign:"center !important"
          }}>Sign up</Card.Title>
          <RegisterForm onSignUPClick={onSignUPClick}/>
     
      </Card>
  
  )
        }

}

function Login() {

  return (
   <>
   <FormCard/>
   </>
  )
}

export default Login;
