var express = require("express");
var app = express();
const knex = require("knex");
const parse = require("pg-connection-string").parse;
var cors = require("cors");

if (process.env.ENVIRONMENT == "development") {
  var config = {
    client: "pg",
    connection: {
      host: "db",
      port: "5432",
      user: "postgres",
      password: "postgres",
      database: "main",
    },
  };
} else {
  // Could possibly use config vars on Heroku check env variable?
  // Parse the environment variable into an object containing User, Password, Host, Port etc at separate key-value pairs
  const pgconfig = parse(process.env.DATABASE_URL);

  // Add SSL setting to default environment variable on a new key-value pair (the value itself is an object)
  pgconfig.ssl = {
    rejectUnauthorized: false,
  };
  var config = {
    client: "pg",
    connection: pgconfig,
  };
}

const db = knex(config);

app.use(cors()); // Do I need this?

app.use(express.json()); // Necessary?

// app.use(express.static(__dirname + "/public"));

app.get("/app/get-users", async (req, res) => {
  const result = await db.select("*").from("users");
  res.json({
    users: result,
  });
});

app.post("/add-user", async (req, res) => {
  res.status(200).send({
    status: "OK",
  });
  const result = await db("users").insert({
    name: req.body.name,
    email: req.body.email,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Running on PORT ${process.env.PORT}`);
});
