const crudService = require("../services/crud");

async function create(req, res, next) {
  try {
    var result = await crudService.create("eProjects.CRUD_CREATE", req.params.entityId, req.body);
    res.send(result);
  } catch (err) {
    console.error(`Error while creating`, err.message);
    next(err);
  }
}

async function read(req, res, next) {
  try {
    var result = await crudService.read("eProjects.CRUD_READ", req.params.entityId, req.body);
    res.send(result);
  } catch (err) {
    console.error(`Error while reading`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    var result = await crudService.update("eProjects.CRUD_UPDATE", req.params.entityId, req.body);

    res.send(result);
  } catch (err) {
    console.error(`Error while updating`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    var result = await crudService.remove("eProjects.CRUD_DELETE", req.params.entityId, req.body);

    res.send(result);
  } catch (err) {
    console.error(`Error while deleting`, err.message);
    next(err);
  }
}

module.exports = {
  create,
  update,
  read,
  remove,
};