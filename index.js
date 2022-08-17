const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", express.static("profile"));
app.use("/snake", express.static("snake"));

app.listen(PORT, () => console.info(`Listening on ${PORT}`));

