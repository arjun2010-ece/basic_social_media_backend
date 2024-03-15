const express = require("express");
const format = require("date-format");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "arjun2010",
        followers: 55,
        follows: 23 ,
        date: format("dd/MM - hh:mm:ss", new Date()),
    }
  res.status(200).json({instaSocial});
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "arjun2010fb",
        followers: 65,
        follows: 33 ,
        date: format("dd/MM - hh:mm:ss", new Date()),
    }
  res.status(200).json({instaSocial});
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "arjun2010ln",
        followers: 66,
        follows: 36,
        date: format("dd/MM - hh:mm:ss", new Date()),
    }
  res.status(200).json({instaSocial});
});

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
  console.log(`Socialmedia app listening on port ${PORT}`);
});
