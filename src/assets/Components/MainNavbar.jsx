import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`main-nav sticky-top ${isScrolled ? "onNavScroll" : "sec__bg-clr"}`} data-bs-theme="dark">
      <Container>
        <NavLink className="fs-2 fw-bold navbar-brand" to="react-library-task1/">
          START FRAMEWORK
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link-wrapper">
            <NavLink role="button" className="text-white fw-bold nav-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink role="button" className="text-white fw-bold nav-link" to="/portfolio">
              PORTFOLIO
            </NavLink>
            <NavLink role="button" className="text-white fw-bold nav-link" to="/contact">
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
