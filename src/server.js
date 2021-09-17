import express from "express";
import path from "path";
import mustacheExpress from "mustache-express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustacheExpress());

server.use(express.static(path.join(__dirname, "../public")));

//para usar o post na controler
server.use(express.urlencoded({ extended: true }));

server.use("/", router);

server.use((req, res) => {
  res.status(404).render("pages/notFound");
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
