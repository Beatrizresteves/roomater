const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const base = require("./controllers/base");
const accounts = require("./controllers/accounts");
const tasks = require("./controllers/tasks");
const quartos = require("./controllers/quartos");

const YELLOW = "\x1b[33m%s\x1b[0m";
const WHITE = "\x1b[37m";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());
app.use(cookieParser());

//CONFIG
const PORT = process.env.APIMOCK_PORT || 8000;
const ORIGIN_URL = process.env.ORIGIN_URL || "http://localhost:3000";

app.use(cors({ credentials: true, origin: ORIGIN_URL }));

// BASE
app.get("dapau", base.dapau);

// ACCOUNTS
app.post("/api/accounts/login", accounts.login);
app.post("/api/accounts/logout", accounts.logout);
app.get("/api/accounts/whoami", accounts.whoami);

// TASKS
app.get("/api/tasks/list", tasks.find);
app.post("/api/tasks/add", tasks.add);

// QUARTOS
app.get("/api/quartos/list_quartos", quartos.find_quarto);
app.post("/api/quartos/add_quarto", quartos.add_quarto);

app.listen(PORT, () => {
  console.log(
    YELLOW,
    "🆙 API MOCK using express is running on port: " + PORT,
    WHITE
  );
});
