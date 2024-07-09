import express from "express";
import { client } from "./src/routes/client.js";
import { colis } from "./src/routes/colis.js";
import { destination } from "./src/routes/destination.js";
import { driver } from "./src/routes/driver.js";

const app = express();

app.use(express.json());

const PORT = 5000;

app.use("/clients", client);
app.use("/colis", colis);
app.use("/destination", destination);
app.use("/driver", driver);
// app.use("programVoyage");
// app.use("withdrow");

app.use((req, res) => {
  res.send("Hello world");
});

app.listen(PORT, (req, res) => {
  console.log(`The server running on ${PORT}`);
});
