import { crear, leer, actualizar, eliminar } from './crud.mjs';

export function crearEntidad(tipo) {
  return (item) => crear(item, tipo);
}

export function leerEntidades(tipo) {
  return (id = null) => leer(id, tipo);
}

export function actualizarEntidad(tipo) {
  return (id, datosActualizados) => actualizar(id, datosActualizados, tipo);
}

export function eliminarEntidad(tipo) {
  return (id) => eliminar(id, tipo);
}

export const crearAvion = crearEntidad('aviones');
export const leerAviones = leerEntidades('aviones');
export const actualizarAvion = actualizarEntidad('aviones');
export const eliminarAvion = eliminarEntidad('aviones');

export const crearVuelo = crearEntidad('vuelos');
export const leerVuelos = leerEntidades('vuelos');
export const actualizarVuelo = actualizarEntidad('vuelos');
export const eliminarVuelo = eliminarEntidad('vuelos');

export const crearPersona = crearEntidad('personas');
export const leerPersonas = leerEntidades('personas');
export const actualizarPersona = actualizarEntidad('personas');
export const eliminarPersona = eliminarEntidad('personas');
