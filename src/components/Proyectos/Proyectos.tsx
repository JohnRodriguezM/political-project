import React, { Suspense, lazy } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import hola from "../../assets/JuanALotOfPeople.jpg";
import hola2 from "../../assets/JuanWithChildren.jpg";
import hola3 from "../../assets/villavomasjusta.jpg";
import hola4 from "../../assets/1.jpg";

const IgCard = lazy(() =>
  import("./IgCard").then((module) => ({ default: module.InstagramCard }))
);

/*https://www.instagram.com/developer/*/
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1251 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 755 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 754, min: 0 },
    items: 1,
  },
};

const style = {
  width: "90%",
  margin: "0 auto 0 2px",
  maxWidth: "250px",
  //height: "100%",
  //maxHeight: "650px",
  textAlign: "center",
};

const myIframes = [
  {
    src: hola,
    style,
    TextPublicacion:
      "Haciendo lo que más me gusta, somos el puente entre la gente que quiere ver a Villavicencio como una de las mejores ciudades del país.¡Gracias barrio la Reliquia! ¡Gracias a todos a quienes confían en nosotros y creen en nuestro proyecto! 🎄🎁 #unanuevamaneradeservir",
  },
  {
    src: hola2,
    style,
    TextPublicacion:
      "Juntos podemos apostarle a un mejor futuro para nuestros niños y niñas.Súmate a esta donaton y ayúdanos a llevar a los niños de Villavicencio sus útiles escolares antes de iniciar la jornada escolar.#RecuperemosVillavicencio #unanuevamaneradeservir",
  },
  {
    src: hola3,
    style,
    TextPublicacion:
      "Hoy mi domingo lo comparto con ellos, de esto se trata de brindar oportunidades, de adquirir nuevos conocimientos, para avanzar y para que los llaneros alcancen sus sueños, juntos por una mejor Villavicencio ! #unanuevamaneradeservir",
  },
  {
    src: hola4,
    style,
    TextPublicacion:
      "Hoy junto a mi familia estamos nuevamente en la comuna 1. Velar por las necesidades de nuestros niños y adultos mayores.¡Gracias y mil gracias a quienes hacen esto posible nuevamente!., Sígamos construyendo ciudad juntos. Feliz navidad 🎄 #unanuevamaneradeservir",
  },
  /*  {
    src: "https://www.instagram.com/p/CpwO45vAYPm/embed",
    style,
  },
  {
    src: "https://www.instagram.com/p/CpGFH8DpOza/embed",
    style,
  },*/
];

const Proyectos = (props: any) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2
        style={{
          width: "96%",
          margin: "50px auto 45px auto",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: " 0.8px",
          lineHeight: " 1",
          display: "block",
          fontSize: "2rem",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
        }}
      >
        Conoce parte de nuestro Trabajo Social
      </h2>
      <Carousel
        className="carousel"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={6500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {myIframes.map((iframe, index) => (
          <section
            key={index}
            style={{
              width: "100%",
              height: "100%",
              margin: "45px auto",
              textAlign: "center",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <IgCard
                source={iframe.src}
                textPublicacion={iframe.TextPublicacion}
              />
            </Suspense>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default Proyectos;
