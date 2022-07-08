var express = require("express");
var app = express();

const knex = require("knex");
const parse = require("pg-connection-string").parse;

console.log("%%%%%%%%%%%%%");
console.log(process.env.ENVIRONMENT);
console.log("%%%%%%%%%%%%%");

if (process.env.ENVIRONMENT == "production") {
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
} else if (process.env.ENVIRONMENT == "development") {
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
}

const db = knex(config);

app.use(express.static(__dirname + "/public"));

app.use(express.json()); // Necessary?

app.get("/get-users", async (req, res) => {
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

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
