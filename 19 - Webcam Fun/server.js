const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
