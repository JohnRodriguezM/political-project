import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

import { form, responsive, styleContainer } from "./constant";
import { CarouselAtom } from "../../Atoms/Carousel/Carousel";

export const CarouselComponent = (props: any) => {
  return (
    <CarouselAtom
      form={form}
      responsive={responsive}
      styleContainer={styleContainer}
      title="Nuestros Enfoques de Trabajo"
      publicacion=""
    />
  );
};
