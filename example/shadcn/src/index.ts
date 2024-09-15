import fs from 'node:fs/promises'
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
//
app.get("/button", async(req, res) => {
  let htm = await fs.readFile('./dist/Button.html', 'utf-8')
  res.send(htm);
});
app.get("/alert_dialog", async(req, res) => {
  let htm = await fs.readFile('./dist/AlertDialog.html', 'utf-8')
  res.send(htm);
});
app.get("/calendar", async(req, res) => {
  let htm = await fs.readFile('./dist/Calendar.html', 'utf-8')
  res.send(htm);
});
app.get("/card", async(req, res) => {
  let htm = await fs.readFile('./dist/Card.html', 'utf-8')
  res.send(htm);
});
app.get("/checkbox", async(req, res) => {
  let htm = await fs.readFile('./dist/CheckBox.html', 'utf-8')
  res.send(htm);
});
app.get("/datepicker", async(req, res) => {
  let htm = await fs.readFile('./dist/DatePicker.html', 'utf-8')
  res.send(htm);
});
app.get("/dialog", async(req, res) => {
  let htm = await fs.readFile('./dist/Dialog.html', 'utf-8')
  res.send(htm);
});
app.get("/form", async(req, res) => {
  let htm = await fs.readFile('./dist/Form.html', 'utf-8')
  res.send(htm);
});
app.get("/input", async(req, res) => {
  let htm = await fs.readFile('./dist/Input.html', 'utf-8')
  res.send(htm);
});
app.get("/select", async(req, res) => {
  let htm = await fs.readFile('./dist/Select.html', 'utf-8')
  res.send(htm);
});
app.get("/sheet", async(req, res) => {
  let htm = await fs.readFile('./dist/Sheet.html', 'utf-8')
  res.send(htm);
});
//TextArea
app.get("/textarea", async(req, res) => {
  let htm = await fs.readFile('./dist/TextArea.html', 'utf-8')
  res.send(htm);
});

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
  