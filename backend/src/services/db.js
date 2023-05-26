const oracledb = require("oracledb");
const dbConfig = require("../configs/db.config");

async function executeSP(spName, entityId, criteria) {  
  const connection = await await oracledb.getConnection(dbConfig);
  let rows = [];

  try {
    const result = await connection.execute(
      "BEGIN " + spName + "(:p_ENTITY_ID, :p_CRITERIA, :p_tmpCur); END;",
      {
        p_ENTITY_ID: entityId,
        p_CRITERIA: JSON.stringify(criteria),
        p_tmpCur: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT } //, outFormat: oracledb.OUT_FORMAT_OBJECT
      },   
      {
        outFormat: oracledb.OBJECT
      },
    );

    const resultSet = result.outBinds.p_tmpCur;
    rows = await resultSet.getRows();

    await resultSet.close();   // always close the ResultSet
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

  return rows;
}

async function isAuthenticatedUser(spName, loginInformation) {
  const connection = await await oracledb.getConnection(dbConfig);
  let rows = [];

  try {
    const result = await connection.execute(
      "BEGIN " + spName + "(:p_LOGIN_INFORMATION, :p_tmpCur); END;",
      {
        p_LOGIN_INFORMATION: JSON.stringify(loginInformation),
        p_tmpCur: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT } //, outFormat: oracledb.OUT_FORMAT_OBJECT
      },   
      {
        outFormat: oracledb.OBJECT
      },
    );

    const resultSet = result.outBinds.p_tmpCur;
    rows = await resultSet.getRows();
    await resultSet.close();  
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

  return rows;
}


module.exports = {
  executeSP,
  isAuthenticatedUser
};