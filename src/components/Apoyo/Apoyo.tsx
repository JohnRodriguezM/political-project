import React from "react";

const Apoyo = () => {
  return (
    <div>
      <h1
        style={{
          width: "98%",
          //marginTop: "30px",

          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: " 0.8px",
          lineHeight: " 1",
          margin: "75px auto 35px auto",
          display: "block",
          fontSize: "2rem",
          filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
        }}
      >
        ¡Ayúdame a hacer la diferencia!
      </h1>
      <section className="section-donacion">
        <div>
          <p
            style={{
              width: "90%",

              textAlign: "center",
              maxWidth: "600px",
              letterSpacing: " 0.7px",
              lineHeight: " 1",
              margin: "35px auto",
              display: "block",
              fontSize: "1rem",
              filter: "drop-shadow(0px 0px 1.2px #1da1f2)",
            }}
          >
            No somos solo una campaña, somos un movimiento de personas
            comprometidas a hacer una diferencia real en nuestra Ciudad. Tu
            donación nos permitirá llegar a más personas y hacer una verdadera
            contribución al cambio.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <iframe
            id="vakiIframe"
            title="Campaña Juan José Cubides"
            style={{
              maxWidth: "600px",
            }}
            width="100%"
            height="800"
            src="https://vaki.co/iframe/saNJqOMrpoI8IjW89ZkS"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Apoyo;
