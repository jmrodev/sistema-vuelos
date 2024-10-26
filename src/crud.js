let ultimoId = 0;

function generarId() {
  ultimoId++;
  return ultimoId;
}

let datos = {
  aviones: [
    { id: generarId(), modelo: 'Boeing 737', capacidad: 180 },
    { id: generarId(), modelo: 'Airbus A320', capacidad: 150 },
  ],
  vuelos: [
    { id: generarId(), numero: 'AA123', origen: 'Madrid', destino: 'Barcelona', fecha: '2023-06-01' },
    { id: generarId(), numero: 'BB456', origen: 'Sevilla', destino: 'Valencia', fecha: '2023-06-02' },
  ],
  personas: [
    { id: generarId(), nombre: 'Juan Pérez', edad: 30 },
    { id: generarId(), nombre: 'María García', edad: 25 },
  ]
};

export function crear(item, tipo) {
  const nuevoItem = { ...item, id: generarId() };
  datos[tipo].push(nuevoItem);
  return nuevoItem;
}

export function leer(id = null, tipo) {
  if (id === null) {
    return datos[tipo];
  }
  return datos[tipo].find(item => item.id === id);
}

export function actualizar(id, datosActualizados, tipo) {
  const indice = datos[tipo].findIndex(item => item.id === id);
  if (indice !== -1) {
    datos[tipo][indice] = { ...datos[tipo][indice], ...datosActualizados };
    return datos[tipo][indice];
  }
  return null;
}

export function eliminar(id, tipo) {
  const indice = datos[tipo].findIndex(item => item.id === id);
  if (indice !== -1) {
    return datos[tipo].splice(indice, 1)[0];
  }
  return null;
}
