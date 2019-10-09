const knex = require('knex');
const config = require('../knexfile').development;
const db = knex(config);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
  };
  
function find() {
  return db('schemes');
};

function findById(id) {
  return db('schemes').where({ id }).first();
};

function findSteps(id) {
  return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where('scheme_id', id)
    .orderBy('step_number')
};

function add(scheme) {
  return db('schemes').insert(scheme).then(response => {
    const [id] = response;

    return db('schemes').where({ id }).first();
  });
};

function update(scheme, id) {
  return db('schemes').update(scheme).where({ id }).then(() => {
    return db('schemes').where({ id }).first();
  });
};

function remove(id) {
  return db('schemes').where({ id }).first().then(scheme => {
    if (!scheme) {
      return null;
    };

    return db('schemes').where({ id }).del().then(() => {
      return scheme;
    });
  });
};
