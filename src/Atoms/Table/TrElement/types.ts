export interface PropsData {
  id: number;
  nombreCompleto: string;
  edad: number | string;
  cedula: number | string;
  direccion: string;
  numTel: number | string;
  email: string;
  usuarioRedes: string;
  comoPodriasAyudar: string;
}

export interface Props {
  dataToRender: PropsData[];
  deleteFunction: Function;
  setData: any;
}