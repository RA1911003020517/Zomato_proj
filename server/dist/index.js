"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => {
  res.json({
    message: "server is running"
  });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log("server is running");
});