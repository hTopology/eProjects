const db = require('./db');

async function isAuthenticatedUser(spName, loginInformation) {
  return await db.isAuthenticatedUser(
    spName,
    loginInformation
  );
}

module.exports = {
  isAuthenticatedUser
}
