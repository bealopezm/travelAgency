const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from clientes');
}

const getById = (clientId) => {
  return executeQueryOne('select * from clientes where id = ?', [clientId]);
}

const create = ({ nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email }) => {
  return executeQuery(
    'insert into clientes (nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email) values (?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email]
  );
}

const update = (clientId, { nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email }) => {
  return executeQuery(
    'update clientes set  nombre = ?, apellidos = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, dni = ?, email = ? where id = ?', [nombre, apellidos, direccion, telefono, fecha_nacimiento, dni, email, clientId]
  );
}

const deleteById = (clientId) => {
  return executeQuery('delete from clientes where id = ?', [clientId]);
}

module.exports = {
  getAll, create, update, getById, deleteById
}