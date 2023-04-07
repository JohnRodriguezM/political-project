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

import logo from "../../assets/LOGO-JUAN.png";
import { Button } from "react-bootstrap";

/*import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'*/

function BasicExample() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    let prevScrollpos: any = window.pageYOffset;
    //console.log(`1 ${prevScrollpos}`);
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      //console.log(`2 ${currentScrollPos}`);
      if (prevScrollpos > currentScrollPos) {
        setScrolled(false);
      } else {
        setScrolled(true);
        setTimeout(() => {
          setScrolled(false);
        }, 600);
      }
      prevScrollpos = currentScrollPos;
    };
  };

  useEffect(() => {
    handleScroll();
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container
        style={{
          maxWidth: "95%",
          display: scrolled ? "none" : "flex",
        }}
      >
        <Navbar.Brand
          href="#home"
          style={{
            marginRight: "65px",
          }}
        >
          <img className="image" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            border: "1px solid #000",
          }}
          aria-controls="basic-navbar-nav"
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
                  <SlSocialTwitter className="twitter-icon" />
                </a>
                <a href="">
                  <SlSocialInstagram className="instagram-icon" />
                </a>
                <a href="">
                  <SlSocialFacebook className="facebook-icon" />
                </a>
              </div>
              <Button
                style={{
                  border: "1px solid #3978bf",
                  color: "#3978bf",
                }}
                variant="outline-info"
              >
                Vamos a conectar
              </Button>{" "}
            </span>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
