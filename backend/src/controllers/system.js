
const systemService = require("../services/system");

async function isAuthenticatedUser(req, res, next) {
  try {
    var result = await systemService.isAuthenticatedUser(
      "eProjects.IS_AUTHENTICATED_USER",
      req.body
    );
   
    res.send(result);
  } catch (err) {
    console.error(`Error while getting`, err.message);
    next(err);
  }
}

module.exports = {
  isAuthenticatedUser
};
