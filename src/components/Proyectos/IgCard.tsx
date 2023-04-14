import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Carousel/Carousel.css";

import AdultoMayor from "../../assets/adultomayor.jpg";
import empoderemoslasjuventudes from "../../assets/empoderemoslajuventud.jpg";
import sociedadcivil from "../../assets/sociedadcivil.jpg";
import villavomasjusta from "../../assets/villavomasjusta.jpg";
import ninez from "../../assets/niñez.jpg";
import { Suspense } from "react";

const form = [
  {
    title: "Hagamos de los adultos mayores una prioridad",
    description:
      "Nuestro compromiso es proteger su bienestar, salud y seguridad financiera, brindándoles atención y cuidado de calidad, y fomentando su participación activa en la sociedad",
    img: AdultoMayor,
  },
  {
    title: "Empoderemos a la juventud para transformar Villavicencio",
    description:
      " Creamos oportunidades para el desarrollo y el empoderamiento de los jóvenes, fomentamos su participación en la toma de decisiones y la construcción de proyectos, y promovemos su rol activo en la sociedad",

    img: empoderemoslasjuventudes,
  },
  {
    title: "Construyamos juntos una Villavicencio más justa",
    description:
      "Trabajamos de la mano con las comunidades para identificar y atender sus necesidades, desarrollar proyectos sostenibles y fomentar la participación ciudadana en la toma de decisiones",

    img: villavomasjusta,
  },
  {
    title: "Cuidemos de la niñez",
    description:
      "Nos comprometemos a proteger su bienestar, salud y educación, brindándoles atención y cuidado de calidad, y fomentando su desarrollo integral en un entorno seguro y sostenible",
    img: ninez,
  },
  {
    title: "Articulemos la sociedad civil para el desarrollo de la ciudad",
    description:
      " Promovemos la creación de alianzas y acuerdos entre diferentes actores sociales y políticos para construir proyectos y políticas públicas más efectivas y sostenibles, y mejorar la calidad de vida de los habitantes de Villavicencio",
    img: sociedadcivil,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1151 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1150, min: 755 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 754, min: 0 },
    items: 1,
  },
};

const styleContainer = {
  display: "flex",
  margin: "30px auto",
  backgroundColor: "#1da1f220",
  justifyContent: "center",
  alignItems: "center",
  height: "600px",
  width: "96%",
  minWidth: "350px",
  maxWidth: "400px",
  padding: "20px",
  borderRadius: "15px",
};

export function InstagramCard({
  textPublicacion,
  source,
  title,
  publicacion,
}: any) {
  return (
    <>
      <a href={publicacion} target="_blank" rel="noreferrer">
        <div style={styleContainer}>
          <div
            className="carousel__item"
            style={{
              textAlign: "center",
            }}
          >
            <h4
              style={{
                width: "90%",
                textAlign: "center",
                fontWeight: "bold",
                letterSpacing: " 0.8px",
                color: "#000",
                lineHeight: " 1",
                margin: "5px auto",
                display: "block",
                fontSize: "1.5rem",
                filter: "drop-shadow(0px 0px 1.8px #1da1f2)",
              }}
            >
              {title}
            </h4>
            <img className="img2" id="img2" src={source} alt="#" />
            <p
              style={{
                width: "90%",
                //textAlign: "center",
                //fontWeight: "bold",
                letterSpacing: " 0.8px",
                color: "#000",
                lineHeight: " 1.1",
                margin: "5px auto",
                //display: "block",
                fontSize: "1rem",
                filter: "drop-shadow(0px 0px 1px #1da1f2)",
              }}
            >
              {textPublicacion}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
