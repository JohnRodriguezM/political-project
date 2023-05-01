import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SlArrowRightCircle } from "react-icons/sl";

import { TextRotation } from "./TxtRotation/TxTRotation";

import "./Banner.css";
import { motion } from 'framer-motion';

export const Banner = (props: any) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipped(!flipped);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [flipped]);

  return (
    <motion.section
  
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}

      transition={{ duration: 1.2 }}
    
    id="inicio" className="banner">
      <section className="section-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="h1-style">
              {`Juan José Cubides Monje: `}
              <TextRotation />
            </h1>
            <p className="p-style">
              ¿Quieres conocer a un joven <b>comprometido</b> que está generando
              un gran impacto en nuestra ciudad?. ¡<b>Acompáñanos</b> para
              conocer más sobre su trabajo y cómo podemos seguir caminando
              juntos para construir la <b>Villavicencio</b> que tanto anhelemos!
            </p>

            <button
              className="btn-style"
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
          </Col>
        </Row>
      </section>
    </motion.section>
  );
};
