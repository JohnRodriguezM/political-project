import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import contactImg from "../../assets/img/contact-img.svg";

export const Contact = () => {
  const initialFormState = {
    nombreCompleto: "",
    email: "",
    mensaje: "",
    contacto: "",
    apoyo: false,
  };

  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!form.nombreCompleto || !form.email) return;
    console.log(form);
    setForm(initialFormState);
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 1500);

    setForm(initialFormState);
  };

  return (
    <>
      <h2
        style={{
          width: "98%",
          margin: "90px auto 0 auto",

          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: " 0.8px",
          lineHeight: " 1",
          display: "block",
          fontSize: "2rem",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
        }}
      >
        ¿Quieres formar parte de nuestro equipo?
      </h2>
      <section className="contact" id="connect">
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
              <img src={contactImg} alt="Contactanos" />
            </Col>
            <Col md={6}>
              <form onSubmit={handleSubmit}>
                <label>Nombre Completo</label>
                <input
                  value={form.nombreCompleto}
                  required
                  onChange={handleChange}
                  type="text"
                  name="nombreCompleto"
                />
                <label>Email</label>
                <input
                  value={form.email}
                  required
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
                <label>Mensaje</label>
                <textarea
                  value={form.mensaje}
                  onChange={handleChange}
                  name="mensaje"
                />
                <label>Contacto</label>
                <input
                  value={form.contacto}
                  required
                  onChange={handleChange}
                  type="text"
                  name="contacto"
                />

                <Form.Check
                  checked={form.apoyo}
                  style={{
                    marginTop: "1rem",
                  }}
                  onChange={handleChange}
                  name="apoyo"
                  type="switch"
                  id="custom-switch"
                  label="¿Quieres que te contactemos?"
                />
                <Button variant="primary" type="submit">
                  {status ? "Enviado" : "Enviar"}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

{
  /*<a target="_blank" href="https://icons8.com/icon/9olD3EenFFRm/grupo-de-usuario">Grupo de usuario</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/
}

{
  /*<iframe id="vakiIframe"
title="Campaña Juan José Cubides"
width="350"
height="415"
src="https://vaki.co/iframe/saNJqOMrpoI8IjW89ZkS">
</iframe>*/
}
