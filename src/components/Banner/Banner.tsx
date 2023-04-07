import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SlArrowRightCircle } from "react-icons/sl";

import "./Banner.css";

export const Banner = () => {
  const [flipped, setFlipped] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeliting, setisDeliting] = useState(false);

  const [text, setText] = useState("Político");
  const period = 2000;
  const toRotate = ["Político","Ambientalista","Llanero",];

  useEffect(() => {
    let ticker = setInterval(() => {
      if (loopNum === toRotate.length) {
        setLoopNum(0);
      }
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      if (isDeliting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
      if (!isDeliting && text === fullText) {
        setTimeout(() => {
          setisDeliting(true);
        }, period);
      } else if (isDeliting && text === "") {
        setisDeliting(false);
        setLoopNum(loopNum + 1);
      }
    }, 200);
    return () => clearInterval(ticker);
  }, [loopNum, isDeliting, text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipped(!flipped);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [flipped]);

  return (
    <section className="banner" id="home">
      <section
        style={{
          width: "95%",
          margin: "0 auto",
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/*<span className="tagline">Bienvenidos</span>*/}
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                //textAlign: "justify",
              }}
            >
              {`Hola, soy Juan José Cubides`} {/*<br />*/}
              <span className="wrap">{text}
              
              </span>
              {/* politico, llanero, abogado, activista, ambientalista */}
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              minima dolore veritatis ipsam tempore ducimus non blanditiis, fuga
              voluptas saepe doloremque a, commodi delectus adipisci voluptate
              obcaecati eligendi itaque facilis!
            </p>

            <button
              onClick={() => {
                console.log("Hola, vamos a conectar");
              }}
            >
              Vamos a conectar{" "}
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
