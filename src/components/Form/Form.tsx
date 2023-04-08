import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

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
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className = "align-items-center">
          <Col
            md={6}
          >
            <img src="" alt="" />

          </Col>
        </Row>
      </Container>

      {/*   
            <h1
        style={{
          marginBottom: "2rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
          
        }}
      >
        ¿Quieres formar parte de nuestro equipo?
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="nombreCompleto"
        />
        <label>Email</label>
        <input required onChange={handleChange} type="email" name="email" />
        <label>Mensaje</label>
        <textarea onChange={handleChange} name="mensaje" />
        <label>Contacto</label>
        <input required onChange={handleChange} type="text" name="contacto" />
       
        <Form.Check 
        style = {{
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
      </form>*/}
    </section>
  );
};


{/*<a target="_blank" href="https://icons8.com/icon/9olD3EenFFRm/grupo-de-usuario">Grupo de usuario</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}