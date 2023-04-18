import { lazy, Suspense } from "react";

import "./Carousel.css";

import { form, responsive, styleContainer } from "./constant";

const CarouselAtom = lazy(() =>
  import("../../Atoms/Carousel/Carousel").then((module) => ({
    default: module.CarouselAtom,
  }))
);

export const CarouselComponent = (props: any) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CarouselAtom
          form={form}
          responsive={responsive}
          styleContainer={styleContainer}
          title="Nuestros Enfoques de Trabajo"
          publicacion=""
        />
      </Suspense>
    </>
  );
};
