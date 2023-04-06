import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";

import logo from "../../assets/img/logo.svg";

/*import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'*/

function BasicExample() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{
              width: "100px",
            }}
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
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
            <Nav className="me-auto">
              <Nav.Link id="inicio" href="#inicio">
                Inicio
              </Nav.Link>
              <Nav.Link href="#conoceme">Conócome</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
              <Nav.Link href="#apoyanos">Apóyanos</Nav.Link>
              <Nav.Link href="#newsletter">Newsletter</Nav.Link>
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
          >
            <span className="navbar-text">
              <div className="social-icons">
                <a href="">
                  <SlSocialInstagram />
                </a>
                <a href="">
                  <SlSocialTwitter />
                </a>
                <a href="">
                  <SlSocialFacebook />
                </a>
              </div>
              <button
                className="vvd"
                onClick={() => {
                  console.log("Hello World");
                }}
              >
                Vamos a conectar
              </button>
            </span>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
