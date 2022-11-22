// import express from "express";
const express = require("express");
const ws = require("ws");
const http = require("http");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "public"));
app.get("/", (req, res) => res.render("home"));
app.get("*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3001`);
// app.listen(3001, handleListen);

const server = http.createServer(app);
const wss = new ws.Server({ server });

server.listen(3001, handleListen);
