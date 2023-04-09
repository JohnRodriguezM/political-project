import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import contactImg from "../../assets/img/contact-img.svg";
import flecha from "../../assets/flecha-hacia-atras.png";
import { Link } from "react-router-dom";

import "./SignIn.css";
import { signIn } from "../../backend/supabase/client";

const initialFormState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!form.email) return;
    console.log(form);
    setForm(initialFormState);

    signIn(form.email, form.password);
    // setStatus(true);
    /* setTimeout(() => {
      setStatus(false);
    }, 1500);*/

    setForm(initialFormState);
  };

  return (
    <>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(180deg, #1da1f2 0%, #1da1f2 100%)",
        }}
        className="contact signIn"
        id="connect"
      >
        <Link to="/">
          <img
            src={flecha}
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "0",
              left: "0",
              margin: "1rem",
            }}
            alt=""
          />
        </Link>
        <Container>
          <Row className="align-items-center">
            <Col
              style={{
                marginBottom: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              md={6}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={contactImg}
                alt="Contactanos"
              />
            </Col>
            <Col md={6}>
              <form onSubmit={handleSubmit}>
                {/* <label>Nombre Completo</label>
                <input
                  value={form.nombreCompleto}
                  required
                  onChange={handleChange}
                  type="text"
                  name="nombreCompleto"
                />*/}
                <label>Email</label>
                <input
                  value={form.email}
                  required
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
                {/* <label>Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={handleChange}
                  name="mensaje"
                />*/}
                <label>Contraseña</label>
                <input
                  value={form.password}
                  required
                  onChange={handleChange}
                  type="text"
                  name="password"
                />

                {/*<Form.Check
                  checked={form.apoyo}
                  style={{
                    marginTop: "1rem",
                  }}
                  onChange={handleChange}
                  name="apoyo"
                  type="switch"
                  id="custom-switch"
                  label="¿Quieres que te contactemos?"
                />*/}
                <Button
                  style={{
                    marginTop: "4rem",
                    padding: "1rem 2rem 2rem 2rem",
                  }}
                  variant="primary"
                  type="submit"
                >
                  Ingresar como Admin
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignIn;
