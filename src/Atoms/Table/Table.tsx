import { FC } from "react";
import { Button, Table } from "react-bootstrap";

interface Props {
  dataToRender: any[];
  deleteFunction: Function;
  thRender: any[];
  setData: Function;
}

export const AtomTable: FC<Props> = ({
  dataToRender,
  deleteFunction,
  thRender,
  setData,
}: Props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {thRender.map((item: any) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataToRender.map((item: any) => (
          <tr key={item.id}>
            <td>
              <p>{item.id}</p>
            </td>
            <td>
              <p>{item.nombreCompleto}</p>
            </td>
            <td>
              <p> {item.edad} </p>
            </td>
            <td>
              <p> {item.cedula} </p>
            </td>
            <td>
              <p> {item.direccion} </p>
            </td>
            <td>
              <a
                href={`https://wa.me/${item.numTel}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.numTel}
              </a>
            </td>
            <td>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </td>
            <td>
              <p> {item.usuarioRedes} </p>
            </td>
            <td>
              <p>{item.comoPodriasAyudar}</p>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  deleteFunction(item.id, setData);
                }}
              >
                X
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
