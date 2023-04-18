import "./Apoyo.css";

const text = `No somos solo una campaña, somos un movimiento de personas
comprometidas a hacer una diferencia real en nuestra Ciudad. Tu
donación nos permitirá llegar a más personas y hacer una verdadera
contribución al cambio.`;
export const Apoyo = (props: any) => {
  return (
    <div id="apoyanos">
      <h1 className="title">¡Ayúdame a hacer la diferencia!</h1>
      <section className="section-donacion">
        <div>
          <p className="paragraph">{text}</p>
        </div>
        <div className="div">
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

