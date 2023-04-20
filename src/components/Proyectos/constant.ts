
import hola from "../../assets/JuanALotOfPeople.jpg";
import hola2 from "../../assets/JUAN.jpg";
import hola3 from "../../assets/villavomasjusta.jpg";
import hola4 from "../../assets/1.jpg";

export const responsive = {
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

export const style = {
  display: "flex",
  margin: "30px auto",
  backgroundColor: "#1da1f220",
  justifyContent: "center",
  alignItems: "center",
  height: "620px",
  width: "96%",
  minWidth: "350px",
  maxWidth: "400px",
  padding: "20px",
  borderRadius: "15px",
};

export const myIframes = [
  {
    img: hola,
    publicacion:
      "https://www.instagram.com/p/CX15aebLsX5/?utm_source=ig_web_copy_link",
    title: "Somos el puente entre la gente y el gobierno",
    description:
      "Haciendo lo que más me gusta, somos el puente entre la gente que quiere ver a Villavicencio como una de las mejores ciudades del país.¡Gracias barrio la Reliquia! ¡Gracias a todos a quienes confían en nosotros!",
  },
  {
    img: hola2,
    publicacion:
      "https://www.instagram.com/reel/CoClVnejo4w/?utm_source=ig_web_copy_link",
    title:
      "Juntos podemos apostarle a un mejor futuro para nuestros niños y niñas",

    description:
      "Juntos podemos apostarle a un mejor futuro para nuestros niños y niñas.Súmate a esta donaton y ayúdanos a llevar a los niños de Villavicencio sus útiles escolares antes de iniciar la jornada escolar.",
  },
  {
    img: hola3,
    publicacion:
      "https://www.instagram.com/p/Cafs0d7Fphl/?utm_source=ig_web_copy_link",
    title: "Mi mayor compromiso es con la gente",
    description:
      "Hoy mi domingo lo comparto con ellos, de esto se trata de brindar oportunidades, de adquirir nuevos conocimientos, para avanzar y para que los llaneros alcancen sus sueños, juntos por una mejor Villavicencio",
  },
  {
    img: hola4,
    publicacion:
      "https://www.instagram.com/p/CX32P7srD4G/?utm_source=ig_web_copy_link",
    title: "Construyamos juntos una Villavicencio más justa",
    description:
      "Hoy junto a mi familia estamos nuevamente en la comuna 1. Velar por las necesidades de nuestros niños y adultos mayores.¡Gracias y mil gracias a quienes hacen esto posible nuevamente!",
  },
];
