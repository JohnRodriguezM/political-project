import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import contactImg from "../../assets/img/contact-img.svg";
import { crearRegistro, fecthData } from "../../backend/supabase/client";

const initialFormState = {
  nombreCompleto: "",
  edad: "",
  cedula: "",
  direccion: "",
  numTel: "",
  email: "",
  usuarioRedes: "",
  comoPodriasAyudar: "",
};

export const Contact = () => {
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
    crearRegistro(form);
    setForm(initialFormState);
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 1500);

    setForm(initialFormState);
  };

  return (
    <section id = "unetenos">
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
                <label>Edad</label>
                <input
                  value={form.edad}
                  required
                  onChange={handleChange}
                  type="text"
                  name="edad"
                />
                <label>Cedula</label>
                <input
                  value={form.cedula}
                  required
                  onChange={handleChange}
                  type="text"
                  name="cedula"
                />
                <label>Dirección</label>
                <input
                  value={form.direccion}
                  required
                  onChange={handleChange}
                  type="text"
                  name="direccion"
                />
                <label>Numero de telefono</label>
                <input
                  value={form.numTel}
                  required
                  onChange={handleChange}
                  type="text"
                  name="numTel"
                />

                <label>Email</label>
                <input
                  value={form.email}
                  required
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
                <label>Usuario de redes</label>
                <input
                  value={form.usuarioRedes}
                  required
                  onChange={handleChange}
                  type="text"
                  name="usuarioRedes"
                />
                <label>Como podrías apoyar</label>
                <textarea
                  value={form.comoPodriasAyudar}
                  onChange={handleChange}
                  name="comoPodriasAyudar"
                />
                <Button variant="primary" type="submit">
                  {status ? "Enviado" : "Enviar"}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
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
