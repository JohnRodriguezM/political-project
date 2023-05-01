import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

export const CarouselAtom = (props: any) => {
  const {form, responsive, styleContainer, title, id} = props;

  return (
    <section id={id}>
      <h1
        style={{
          width: "98%",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: " 0.8px",
          lineHeight: " 1",
          margin: "35px auto",
          display: "block",
          fontSize: "2rem",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
        }}
      >
        {title}
      </h1>
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
        {form.map((item: any, index: any) => (
          <a href={item.publicacion}>
          <div key={index} style={styleContainer}>
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
                  lineHeight: " 1",
                  margin: "5px auto",
                  display: "block",
                  fontSize: "1.5rem",
                  filter: "drop-shadow(0px 0px 1.8px #1da1f2)",
                }}
              >
                {item.title}
              </h4>
              <img
                style={{
                  borderRadius: "10px",
                  margin: "25px auto",
                  boxShadow: "1px 2px 4px #1da1f2",
                }}
                src={item.img}
                alt=""
              />
              <p
                style={{
                  width: "90%",
                  letterSpacing: " 0.8px",
                  lineHeight: " 1.1",
                  margin: "5px auto",
                  fontSize: "1rem",
                  filter: "drop-shadow(0px 0px 1px #1da1f2)",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
          </a>
        ))}
      </Carousel>
    </section>
  );
};
