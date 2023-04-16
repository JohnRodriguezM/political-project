import { useReducer, useState } from "react";
import { signIn } from "../../backend/supabase/client";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import contactImg from "../../assets/img/contact-img.svg";
import flecha from "../../assets/flecha-hacia-atras.png";

import "./SignIn.css";

import { formReducer, initialState } from "./Reducers/Reducer";
import { FormActions } from "./Reducers/Actions";
import { btn, colStyles, img } from "./Reducers/styles";
const SignIn = (props: any) => {
  const [{ email, password }, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.HANDLE_CHANGE,
      payload: event.target,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    //? console.log(email,password);
    signIn(email, password);
  };

  return (
    <>
      <section className="contact" id="signIn">
        <Link to="/">
          <img src={flecha} id="signInImage" alt="volver flecha" />
        </Link>
        <Container>
          <Row className="align-items-center">
            <Col style={colStyles} md={6}>
              <img style={img} src={contactImg} alt="Contactanos" />
            </Col>
            <Col md={6}>
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  value={email}
                  required
                  onChange={handleChange}
                  type="email"
                  name="email"
                />
                <label>Contraseña</label>
                <input
                  value={password}
                  required
                  onChange={handleChange}
                  type="text"
                  name="password"
                />
                <Button style={btn} variant="primary" type="submit">
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
