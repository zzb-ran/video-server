const express = require("express");
const user = require("./router/user");

const app = express();

app.use(express.json());

app.all("*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.use("/user", user);

app.listen("5000");