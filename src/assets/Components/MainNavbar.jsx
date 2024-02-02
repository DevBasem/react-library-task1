import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar expand="lg" className="main-nav sec__bg-clr sticky-top" data-bs-theme="dark">
      <Container>
        <NavLink className="fs-2 fw-bold navbar-brand" to="/">
          START FRAMEWORK
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link-wrapper">
            <NavLink role="button" className="text-white fw-bold p-3 nav-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink role="button" className="text-white fw-bold p-3 nav-link" to="/portfolio">
              PORTFOLIO
            </NavLink>
            <NavLink role="button" className="text-white fw-bold p-3 nav-link" to="/contact">
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
