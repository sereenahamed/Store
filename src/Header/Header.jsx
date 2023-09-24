import { Nav, Offcanvas, Toast } from "react-bootstrap";
import "./Header.css";
import Logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Nav variant="underline" >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Populer">Populer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleShow}>Contact</Nav.Link>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>CALL US NOW!</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Have a question, suggestion, or just want to say hello? We had love
            to hear from you!
            <br /> Our dedicated team is here to assist you with any inquiries
            or assistance you may need. Whether it is about our products,
            services, or any other matter, please dont hesitate to reach out.
            You can contact us via the form below, send us an email, or connect
            with us on social media. Your feedback is invaluable to us, and we
            are committed to providing you with the best possible support and
            assistance. We look forward to connecting with you and providing a
            solution to your needs.
            <button className="button"></button>
          </Offcanvas.Body>
        </Offcanvas>
      </Nav.Item>
    </Nav>
  );
}

function UserInformation() {
  const [showInformation, setShowInformation] = useState(false);
  const onUserIconClick = () => setShowInformation(!showInformation);

  return (
    <Nav className="user-nav">
      <Nav.Item>
        <Nav.Link onClick={onUserIconClick}>
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <Toast
          show={showInformation}
          onClose={onUserIconClick}
          className="user-toast"
        >
          <Toast.Header>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "3px" }} />
            <strong className="me-auto"> Welcome,</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
            <a href="/Login">Logout</a>
          </Toast.Body>
        </Toast>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faCartShopping} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faHeart} />
        </Nav.Link>
      </Nav.Item>
      <label className="ui-switch">
        <input type="checkbox" />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </Nav>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Storename</span>
      </div>
      <Navigation />
      <UserInformation />
    </div>
  );
}

export default Header;
