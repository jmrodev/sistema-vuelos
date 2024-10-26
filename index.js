import promptSync from 'prompt-sync';
import { crearVuelo, leerVuelos, actualizarVuelo, eliminarVuelo, crearAvion, leerAviones, actualizarAvion, eliminarAvion } from './src/entidad.mjs';

const prompt = promptSync();

function mostrarMenu() {
  console.log('\n--- Menú Principal ---');
  console.log('1. Gestionar Vuelos');
  console.log('2. Gestionar Aviones');
  console.log('3. Salir');
  return prompt('Seleccione una opción: ');
}

function mostrarSubmenu(tipo) {
  console.log(`\n--- Gestión de ${tipo} ---`);
  console.log(`1. Crear ${tipo}`);
  console.log(`2. Ver ${tipo}`);
  console.log(`3. Actualizar ${tipo}`);
  console.log(`4. Eliminar ${tipo}`);
  console.log('5. Volver al menú principal');
  return prompt('Seleccione una opción: ');
}

function gestionarVuelos() {
  while (true) {
    const opcion = mostrarSubmenu('Vuelos');
    switch (opcion) {

      case '1':
        const nuevoVuelo = crearVuelo({
          numero: prompt('Número de vuelo: '),
          origen: prompt('Origen: '),
          destino: prompt('Destino: '),
          fecha: prompt('Fecha (YYYY-MM-DD): ')
        });
        console.log('Nuevo vuelo creado:', nuevoVuelo);
        break;

      case '2':
        console.log(leerVuelos());
        break;

      case '3':
        const idVueloActualizar = parseInt(prompt('ID del vuelo a actualizar: '));
        const destinoActualizado = prompt('Nuevo destino: ');
        const vueloActualizado = actualizarVuelo(idVueloActualizar, { destino: destinoActualizado });
        console.log('Vuelo actualizado:', vueloActualizado);
        break;

      case '4':
        const idVueloEliminar = parseInt(prompt('ID del vuelo a eliminar: '));
        const vueloEliminado = eliminarVuelo(idVueloEliminar);
        console.log('Vuelo eliminado:', vueloEliminado);
        break;

      case '5':
        return;

      default:
        console.log('Opción no válida');
    }
  }
}

function gestionarAviones() {
  while (true) {
    const opcion = mostrarSubmenu('Aviones');
    switch (opcion) {

      case '1':
        const nuevoAvion = crearAvion({
          modelo: prompt('Modelo del avión: '),
          capacidad: parseInt(prompt('Capacidad: '))
        });
        console.log('Nuevo avión creado:', nuevoAvion);
        break;

      case '2':
        console.log(leerAviones());
        break;

      case '3':
        const idAvionActualizar = parseInt(prompt('ID del avión a actualizar: '));
        const capacidadActualizada = parseInt(prompt('Nueva capacidad: '));
        const avionActualizado = actualizarAvion(idAvionActualizar, { capacidad: capacidadActualizada });
        console.log('Avión actualizado:', avionActualizado);
        break;

      case '4':
        const idAvionEliminar = parseInt(prompt('ID del avión a eliminar: '));
        const avionEliminado = eliminarAvion(idAvionEliminar);
        console.log('Avión eliminado:', avionEliminado);
        break;

      case '5':
        return;

      default:
        console.log('Opción no válida');
    }
  }
}

function main() {
  while (true) {
    const opcion = mostrarMenu();
    switch (opcion) {

      case '1':
        gestionarVuelos();
        break;

      case '2':
        gestionarAviones();
        break;

      case '3':
        console.log('Gracias por usar el sistema. ¡Hasta luego!');
        return;

      default:
        console.log('Opción no válida');
    }
  }
}

main();
