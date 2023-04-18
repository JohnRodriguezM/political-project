import { lazy, Suspense } from "react";

import { style, myIframes, responsive } from "./constant";

const CarouselAtom = lazy(() =>
  import("../../Atoms/Carousel/Carousel").then((module) => ({
    default: module.CarouselAtom,
  }))
);

export const Proyectos = (props: any) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CarouselAtom
          form={myIframes}
          responsive={responsive}
          styleContainer={style}
          title="Conoce nuestro trabajo social"
        />
      </Suspense>
    </>
  );
};

