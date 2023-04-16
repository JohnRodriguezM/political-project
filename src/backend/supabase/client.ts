import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY,
)

//! get all data
export const fetchDataDb = async (setData: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    const { data: registros, error } = await supabase
      .from('registros')
      .select('*');
    if (error) {
      throw new Error(`Error obteniendo los registros: ${error.message}`);
    }
    setData(registros);
    return registros;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};

//!delete by id
export const eliminarRegistroPorId = async (id: number | string, setData: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    await supabase
      .from('registros')
      .delete()
      .eq('id', `${id}`);

    console.log('Registro eliminado exitosamente!');

    const { data: registrosActualizados } = await supabase
      .from('registros')
      .select('*');

    setData(registrosActualizados);
  } catch (error: any) {
    console.error('Ha ocurrido un error:', error.message);
  }
}

//!delete all
export const eliminarTodosLosRegistros = async (setData: React.Dispatch<React.SetStateAction<any>>, datos: any[]) => {
  try {
    const ids = datos.map((dato: any) => dato.id);
    console.log(ids)

    const { data } = await supabase
      .from('registros')
      .delete()
      .in('id', ids);

    /*console.log('Registros eliminados exitosamente!');
    console.log(data)*/

    const { data: registrosActualizados } = await supabase
      .from('registros')
      .select('*');

    console.log(registrosActualizados)
    setData(registrosActualizados);
  } catch (error: any) {
    console.error('Error eliminando los registros:', error.message);
  }
}


//! create by id
export const crearRegistro = async (elements: any) => {
  try {
    const { data, error } = await supabase
      .from('registros')
      .insert([elements]);

    if (error) {
      console.error('Error al insertar fila:', error);
      return;
    }

    console.log('Fila insertada correctamente:', data);
  } catch (error) {
    console.error('Error al insertar fila:', error);
  }
}



//! sign in
export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error;

    console.log('Inicio de sesión exitoso:', data);

    return data;

  } catch (error: any) {
    console.error('Error al iniciar sesión:', error.message);
  }
}

//! sign up
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error al cerrar sesión:', error.message);
    return;
  }

  console.log('Sesión cerrada exitosamente!');
}