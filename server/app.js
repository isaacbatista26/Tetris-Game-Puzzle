require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const frontEndPort = process.env.FRONT_END_PORT || 3000;
const routes = require("./Routes/router");

app.use(express.json());

app.use(cors({ origin: `http://localhost:${frontEndPort}`, credentials: true }));

app.use(routes);

const db = require("./DataBase/db");





app.listen(port, () => console.log(`Listening on port ${port}`));

