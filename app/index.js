import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => res.send("Hello from DevSecOps Intro!"));
app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

app.listen(port, () => console.log(`App listening on :${port}`));
