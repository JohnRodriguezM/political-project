import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SlArrowRightCircle } from "react-icons/sl";

import { TextRotation } from "./TxtRotation/TxTRotation";

import "./Banner.css";

export const Banner = (props: any) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipped(!flipped);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [flipped]);

  return (
    <section id="inicio" className="banner">
      <section className="section-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
              }}
            >
              {`Juan José Cubides Monje: `}
              <TextRotation />
            </h1>
            <p
              style={{
                fontSize: "1.08rem",
                textAlign: "justify",
              }}
            >
              ¿Quieres conocer a un joven <b>comprometido</b> que está generando
              un gran impacto en nuestra ciudad?. ¡<b>Acompáñanos</b> para
              conocer más sobre su trabajo y cómo podemos seguir caminando
              juntos para construir la <b>Villavicencio</b> que tanto anhelemos!
            </p>

            <button
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
              }}
              onClick={() => {
                console.log("Hola, vamos a conectar");
              }}
            >
              <b>Nuestro trabajo social </b>
              <span>
                <SlArrowRightCircle />
              </span>
            </button>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "35px auto",
            }}
            xs={12}
            md={6}
            xl={5}
          >
            <div className={`flip-container ${flipped ? "flipping" : ""}`}>
              <div className="flipper">
                <div className="front"></div>
                <div className="back"></div>
              </div>
            </div>

            {/*<img
              style={{
                borderRadius: "50%",
              }}
              src={logo}
              alt="Logo"
            />*/}
          </Col>
        </Row>
      </section>
    </section>
  );
};
