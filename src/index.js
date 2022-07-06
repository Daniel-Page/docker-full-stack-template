var express = require("express");
var app = express();
var knex = require("knex")({
  client: "pg",
  connection: {
    host: "db",
    port: "5432",
    user: "postgres",
    password: "postgres",
    database: "users",
  },
});

app.get("/users", async (req, res) => {
  const result = await knex.select("*").from("users");
  res.json({
    users: result,
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
