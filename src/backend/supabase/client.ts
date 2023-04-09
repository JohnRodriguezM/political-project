//import supabase
import { createClient } from '@supabase/supabase-js'
//the other neccesary

export const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY,
)

export const fecthData = async (setData: any) => {
  let { data: registros, error } = await supabase
    .from('registros')
    .select('*')

  if (error) console.log('error', error)
  else setData(registros)
  /*.order('id', { ascending: false })
  .limit(10)*/
  return registros
}

export const eliminarRegistroPorId = async (id: number | string, setData: any) => {
  const { data, error } = await supabase
    .from('registros')
    .delete()
    .eq('id', `${id}`);

  if (error) {
    console.error('Error eliminando el registro:', error.message);
    return;
  }

  console.log('Registro eliminado exitosamente!');

  const { data: registrosActualizados, error: errorConsulta } = await supabase
    .from('registros')
    .select('*');

  if (errorConsulta) {
    console.error('Error obteniendo los registros actualizados:', errorConsulta.message);
    return;
  }

  setData(registrosActualizados);
}







export const eliminarTodosLosRegistros = async (setData: any, datos: any) => {
  const ids = datos.map((dato: any) => dato.id);
console.log(ids)
  const { data, error } = await supabase
    .from('registros')
    .delete()
    .in('id', ids);
    /*.match({
      id: ids,
      nombreCompleto: datos.map((dato: any) => dato.nombreCompleto),
      email: datos.map((dato: any) => dato.email),

    });*/

  if (error) {
    console.error('Error eliminando los registros:', error.message);
    return;
  }

  console.log('Registros eliminados exitosamente!');
  console.log(data)

  const { data: registrosActualizados, error: errorConsulta } = await supabase
    .from('registros')
    .select('*');

  if (errorConsulta) {
    console.error('Error obteniendo los registros actualizados:', errorConsulta.message);
    return;
  }
  console.log(registrosActualizados)
  setData(registrosActualizados);


}


export const crearRegistro = async (elements: any) => {
  try {
    const { data, error } = await supabase
      .from('registros')
      .insert([elements]);

    console.log(data)
    if (error) throw error;
    console.log('Fila insertada correctamente:', data);
  } catch (error) {
    console.error('Error al insertar fila:', error);
  }
}

//signin

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return data;
}

//signout

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
}