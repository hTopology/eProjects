//===============================================
const cors = require("cors");
//===============================================
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
//===============================================
const express = require("express");
var app = express();
//===============================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//===============================================
app.use("/eProjects", express.static(__dirname + "/src/views/"));
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/src/views/index.html"));
//===============================================
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
//===============================================
