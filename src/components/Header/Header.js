import React from "react";
import Logo from "../../assets/img/top-logo.svg";
import {Nav} from "react-bootstrap";
const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <a href="#inicio" className="logo">
          <img src={Logo} alt="logo 25Watts" />
        </a>
        <Nav defaultActiveKey="/home" as="ul" className="navbar">
          
          <Nav.Item as="li" className="li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="#About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="#Products">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
