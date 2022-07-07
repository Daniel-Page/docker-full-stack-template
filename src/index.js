var express = require("express");
var app = express();
var knex = require("knex")({
  client: "pg",
  connection: {
    host: "db",
    port: "5432",
    user: "postgres",
    password: "postgres",
    database: "main",
  },
});

app.use(express.static(__dirname + "/public"));

app.use(express.json()); // Necessary?

app.get("/get-users", async (req, res) => {
  const result = await knex.select("*").from("users");
  res.json({
    users: result,
  });
});

app.post("/add-user", async (req, res) => {
  // console.log(req.body.value);
  res.status(200).send({ status: "OK" });
  const result = await knex("users").insert({
    name: req.body.name,
    email: req.body.email,
  });
});

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
