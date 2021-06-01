const express = require("express");
app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");

const PORT = 3001;

app.use(express.json());

const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);
app.use("/users", usersRouter);

app.listen(PORT, function () {
  console.log(`Express is running and listening on port: ${PORT}`);
});
