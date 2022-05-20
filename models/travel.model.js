const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from viajes');
}

const getById = (travelId) => {
  return executeQueryOne('select * from viajes where id = ?', [travelId]);
}

const create = ({ fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id }) => {
  return executeQuery(
    'insert into viajes (fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id) values (?, ?, ?, ?, ?)',
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id]
  );
}

const update = (travelId, { fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id }) => {
  return executeQuery(
    'update viajes set  fecha_salida = ?, fecha_vuelta = ?, id_vuelo_ida = ?, id_vuelo_vuelta = ?, hotel_id = ? where id = ?', [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id, travelId]
  );
}

const deleteById = (travelId) => {
  return executeQuery('delete from viajes where id = ?', [travelId]);
}

const createTravelClient = (cliente_id, viaje_id) => {
  return executeQuery('insert into clientes_viajes (cliente_id, viaje_id) values (?, ?)', [cliente_id, viaje_id]);
}

module.exports = {
  getAll, create, update, getById, deleteById, createTravelClient
}