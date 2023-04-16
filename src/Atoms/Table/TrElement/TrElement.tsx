import { FC } from "react";
import { Button } from "react-bootstrap";

import { PropsData, Props } from "./types";

export const TrElement: FC<Props> = (props: any) => {
  const { dataToRender, deleteFunction, setData } = props;
  return (
    <>
      {dataToRender.map((item: PropsData) => {
        const {
          id,
          nombreCompleto,
          edad,
          cedula,
          direccion,
          numTel,
          email,
          usuarioRedes,
          comoPodriasAyudar,
        } = item;
        return (
          <tr key={id}>
            <td>
              <p>{id}</p>
            </td>
            <td>
              <p>{nombreCompleto}</p>
            </td>
            <td>
              <p> {edad} </p>
            </td>
            <td>
              <p> {cedula} </p>
            </td>
            <td>
              <p> {direccion} </p>
            </td>
            <td>
              <a
                href={`https://wa.me/${numTel}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.numTel}
              </a>
            </td>
            <td>
              <a href={`mailto:${email}`}>{email}</a>
            </td>
            <td>
              <p> {usuarioRedes} </p>
            </td>
            <td>
              <p>{comoPodriasAyudar}</p>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  deleteFunction(id, setData);
                }}
              >
                X
              </Button>
            </td>
          </tr>
        );
      })}
    </>
  );
};
