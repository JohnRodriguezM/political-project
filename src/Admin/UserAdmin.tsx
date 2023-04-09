import React, { useEffect, useState } from "react";
import {
  eliminarRegistroPorId,
  eliminarTodosLosRegistros,
  fecthData,
  signOut,
} from "../backend/supabase/client";

import { Accordion, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const UserAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Hola, vamos a conectar");
    fecthData(setData);
    console.log(data);
  }, []);

  if (data.length === 0)
    return (
      <>
        <Button
          style={{
            margin: "1rem 1rem 1rem 1rem",
          }}
          onClick={() => {
            signOut();
          }}
          variant="danger"
        >
          cerrar sesion
        </Button>

        <h2
          style={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          No hay datos para mostrar, espera que alguien se ponga en contacto
        </h2>

        <img
          style={{
            marginTop: "2rem",
          }}
          src="https://i.pinimg.com/originals/c8/9b/dd/c89bddfb7d8e8488243fa150fbf84a0f.gif"
          alt=""
        />
      </>
    );

  return (
    <div>
      <Button
        style={{
          margin: "1rem 1rem 1rem 1rem",
        }}
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
                    <strong>Email</strong>: Correo electronico del usuario, al
                    click se abre el correo electronico
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Telefono</strong>: Numero de contacto del usuario,
                    al click se contacta por whatsapp
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Mensaje</strong>: Mensaje del usuario
                  </p>
                </li>
                <li>
                  <p>
                    <strong>(Apoyo)</strong>: Si el usuario desea apoyar a la
                    campaña y que lo contactemos
                  </p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <div
        style={{
          overflowY: "scroll",
          margin: "5rem auto 2rem auto",
          height: "100%",
        }}
        className="table-responsive"
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Mensaje</th>
              <th>(Apoyo)</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>
                  <p>{item.id}</p>
                </td>
                <td>
                  <p>{item.nombreCompleto}</p>
                </td>
                <td>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </td>
                <td>
                  <a
                    href={`https://wa.me/${item.contacto}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.contacto}
                  </a>
                </td>
                <td>
                  <p>{item.mensaje}</p>
                </td>
                <td>
                  <p>{item.apoyo ? "Si" : "No"}</p>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      eliminarRegistroPorId(item.id, setData);
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
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

export default UserAdmin;
