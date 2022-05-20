const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from hoteles');
}

const getById = (hotelId) => {
  return executeQueryOne('select * from hoteles where id = ?', [hotelId]);
}

const create = ({ nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery(
    'insert into hoteles (nombre, direccion, ciudad, num_estrellas, descripcion, tarifa) values (?, ?, ?, ?, ?, ?)',
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa]
  );
}

const update = (travelId, { nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery(
    'update hoteles set  nombre = ?, direccion = ?, ciudad = ?, num_estrellas = ?, descripcion = ?, tarifa = ? where id = ?', [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa, travelId]
  );
}

const deleteById = (travelId) => {
  return executeQuery('delete from hoteles where id = ?', [travelId]);
}

module.exports = {
  getAll, create, update, getById, deleteById
}