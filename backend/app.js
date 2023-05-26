//===============================================
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
//===============================================
const express = require("express");
var app = express();
//===============================================
const cors = require("cors");
const crudRouter = require("./src/routes/crud");
const systemRouter = require("./src/routes/system");
//===============================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//===============================================
app.use('/eProjects', crudRouter);
app.use('/eProjects', systemRouter);
//===============================================
app.use('/eProjects', express.static(__dirname + "/src/views/"));
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/src/views/index.html"));
//===============================================
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
//===============================================


//https://meiaservicestst.awqaf.gov.qa/eProjects/
//\\SERVICESEXTST\eProjects
//https://docs.oracle.com/database/121/ADXDB/json.htm#ADXDB6246