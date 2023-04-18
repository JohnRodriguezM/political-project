import { FC, useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  eliminarRegistroPorId,
  eliminarTodosLosRegistros,
  fetchDataDb,
  signOut,
} from "../../backend/supabase/client";
import { btn } from "./styles";
import { AtomTable } from "../../Atoms/Table/Table";

const thElements = [
  "Id",
  "Nombre",
  "Edad",
  "Cedula",
  "Direccion",
  "Telefono",
  "Email",
  "Usuario de redes",
  "Como podrias ayudar",
  "Eliminar",
];

export const UserAdmin: FC = (props: any) => {
  const [data, setData] = useState([]);

  function copyToClipboard() {
    const emails = data
      .map((usuario: any) => (usuario.apoyo === "on" ? usuario.email : null))
      .join("\n");
    navigator.clipboard.writeText(emails);
  }

  useEffect(() => {
    console.log("Se ha iniciado sesión como Admin");
    console.log(data);
    fetchDataDb(setData);
  }, []);

  return (
    <div>
      <Button
        style={btn}
        onClick={() => {
          signOut();
        }}
        variant="danger"
      >
        cerrar sesion
      </Button>
      <section
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Dashboard del administrador - Observaciones
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "left",
                  margin: "25px auto",
                  filter: "none",
                  width: "80%",
                }}
              >
                <li>
                  <p>
                    <strong>Nombre</strong>: Nombre completo del usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Edad</strong>: Edad del usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cedula</strong>: Cedula del usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Direccion</strong>: Direccion del usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Telefono</strong>: Telefono del usuario, al click permite contactar por (whatsapp)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Email</strong>: Email del usuario, al click permite enviar un correo
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Usuario de redes</strong>: Usuario de redes del
                    usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Como podrias ayudar</strong>: Como podria ayudar el
                    usuario
                  </p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      {data.length === 0 ? (
        <section
          style={{
            textAlign: "center",
          }}
        >
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Dashboard del administrador - Tabla de datos usuario formulario
              </Accordion.Header>

              <Accordion.Body>
                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                  }}
                >
                  No hay datos para mostrar, espera que alguien se ponga en
                  contacto
                </h5>

                <img
                  style={{
                    margin: "2rem auto",
                    maxWidth: "300px",
                    maxHeight: "300px",
                  }}
                  src="https://i.pinimg.com/originals/c8/9b/dd/c89bddfb7d8e8488243fa150fbf84a0f.gif"
                  alt=""
                />
                <br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      ) : (
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Dashboard del administrador - Tabla de datos usuario formulario
            </Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  overflowY: "scroll",
                  margin: "5rem auto 2rem auto",
                  height: "100%",
                }}
                className="table-responsive"
              >
                <AtomTable
                  thRender={thElements}
                  dataToRender={data}
                  setData={setData}
                  deleteFunction={eliminarRegistroPorId}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      {/*-----------------------*/}

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Borrar todos los elementos</Accordion.Header>
          <Accordion.Body>
            <div>
              <h3>Borrar TODOS los elementos</h3> <br />
              <p>
                El administrador puede borrar todos los elementos de la base de
                datos,
                <b>recuerda que esta acción no tiene reversa</b>
              </p>
              <Button
                variant="danger"
                style={{
                  margin: "2rem auto",
                }}
                onClick={() => {
                  eliminarTodosLosRegistros(setData, data);
                }}
              >
                Eliminar todos los elementos
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
