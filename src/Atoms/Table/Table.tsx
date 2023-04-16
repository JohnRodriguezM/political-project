import { FC } from "react";
import { Button, Table } from "react-bootstrap";

import { Props } from "./types";
import { TrElement } from "./TrElement/TrElement";

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
        <TrElement
          dataToRender={dataToRender}
          deleteFunction={deleteFunction}
          setData={setData}
        />
      </tbody>
    </Table>
  );
};
