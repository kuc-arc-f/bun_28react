import fs from 'node:fs/promises'
import express from "express";
import { renderToString } from 'react-dom/server';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
//
app.get("/contact", async(req, res) => {
  let htm = await fs.readFile('./dist/contact.html', 'utf-8')
  res.send(htm);
});
app.get("/about", async(req, res) => {
  let htm = await fs.readFile('./dist/about.html', 'utf-8')
  res.send(htm);
});
//
app.get("/", async(req, res) => {
  let htm = await fs.readFile('./dist/home.html', 'utf-8')
  res.send(htm);
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
  