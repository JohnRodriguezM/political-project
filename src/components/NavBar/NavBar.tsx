import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { SlSocialInstagram } from "react-icons/sl";

import logo from "../../assets/LOGO-JUAN.png";
import { Button, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import bio from "../../BIOGRAFÍA.pdf";
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      style={{
        backgroundColor: "#fff",
        transition: "all 0.5s ease-in-out",
        boxShadow: "0 0 10px rgba(0,0,0,0.8)",
        borderBottomRightRadius: "8px",
        borderBottomLeftRadius: "8px",

        /*transform: scrolled ? "translateY(-100%)" : "translateY(0)",*/
      }}
      bg="light"
      expand="lg"
      expanded={isOpen}
    >
      <Container
      /*style={{
          maxWidth: "95%",
          display: scrolled ? "none" : "flex",
        }}*/
      >
        <Navbar.Brand
          href="#home"
          style={{
            marginRight: "65px",
          }}
        >
          <img className="image" src={logo} alt="Logo" />
        </Navbar.Brand>
        <div className="social-icons">
          <a href="https://twitter.com/jjcubidesmonje" target="_blank">
            <FaTwitter className="twitter-icon" />
          </a>
          <a
            href="https://www.instagram.com/juanjosecubidesmonje/"
            target="_blank"
          >
            <SlSocialInstagram className="instagram-icon" />
          </a>
          <a href="https://www.facebook.com/JuanJoseCubidesM/" target="_blank">
            <FaFacebook className="facebook-icon" />
          </a>
        </div>
        <Navbar.Toggle
          style={{
            border: "1px solid #000",
          }}
          aria-controls="basic-navbar-nav"
          onClick={toggle}
        >
          <span id="lines" className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="letter" id="basic-navbar-nav ">
          <motion.div
            initial={{
              y: -100,

              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <Nav className="me-auto navbar-text">
              <Nav.Link onClick={toggle} href="#inicio">
                Inicio
              </Nav.Link>
              <Nav.Link
                onClick={toggle}
                href="#unetenos"
              >
                Únetenos
              </Nav.Link>
              <Nav.Link onClick={toggle} href="#apoyanos">
                Apóyanos
              </Nav.Link>

              <NavDropdown title="Conócenos" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={toggle} href="#enfoques">
                  Nuestros enfoques de trabajo
                </NavDropdown.Item>
                <NavDropdown.Item onClick={toggle} href="#proyectos">
                  Nuestros proyectos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={toggle} href={bio} target="_blank">
                  Mi biografía
                </NavDropdown.Item>
              </NavDropdown>

              <span className="text">
                <Link to="/signin-admin">
                  <Button
                    style={{
                      border: "1px solid #3978bf",
                      color: "#3978bf",
                    }}
                    variant="outline-info"
                  >
                    Ingresa como Administrador
                  </Button>{" "}
                </Link>
              </span>
            </Nav>
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
