import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/*https://www.instagram.com/developer/*/
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

const Proyectos = (props: any) => {
  return (
    <div>
      <h2
        style={{
          width: "96%",
          margin: "50px auto 0 auto",

          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: " 0.8px",
          lineHeight: " 1",
          display: "block",
          fontSize: "2rem",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
        }}
      >
        Conoce nuestro Trabajo Social
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
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <iframe
          src="https://www.instagram.com/p/CX32P7srD4G/embed"
          width="400"
          height="480"
        ></iframe>

        <iframe
          src="https://www.instagram.com/p/CX15aebLsX5/embed"
          width="400"
          height="480"
        ></iframe>

        <iframe
          src="https://www.instagram.com/p/CXzxxBbrGOK/embed"
          width="400"
          height="480"
        ></iframe>

        <iframe
          src="https://www.instagram.com/p/Cqi0P7DpnGZ/embed"
          width="400"
          height="480"
        ></iframe>

        <iframe
          src="https://www.instagram.com/p/CpwO45vAYPm/embed"
          width="400"
          height="480"
        ></iframe>

        <iframe
          src="https://www.instagram.com/p/CpGFH8DpOza/embed"
          width="400"
          height="480"
        ></iframe>
      </Carousel>
    </div>
  );
};

export default Proyectos;

{
  /*<script async src="//www.instagram.com/embed.js"></script>*/
}
