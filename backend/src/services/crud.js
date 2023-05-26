const db = require("./db");

async function create(spName, entityId, criteria) {
  return await db.executeSP(spName, entityId, criteria);
}

async function read(spName, entityId, criteria) {
  return await db.executeSP(spName, entityId, criteria);
}

async function update(spName, entityId, criteria) {
  return await db.executeSP(spName, entityId, criteria);
}

async function remove(spName, entityId, criteria) {
  return await db.executeSP(spName, entityId, criteria);
}

module.exports = {
  create,
  update,
  read,
  remove,
};
