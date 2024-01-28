import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello from express lalala");
});

app.listen(port, () => {
return console.log(`Express server is listening on http://localhost:${port}`);
});