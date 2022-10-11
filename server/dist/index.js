"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _route = _interopRequireDefault(require("./config/route.config"));

var _google = _interopRequireDefault(require("./config/google.config"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _auth = _interopRequireDefault(require("./api/auth"));

var _food = _interopRequireDefault(require("./api/food"));

var _restaurants = _interopRequireDefault(require("./api/restaurants"));

var _user = _interopRequireDefault(require("./api/user"));

var _menu = _interopRequireDefault(require("./api/menu"));

var _order = _interopRequireDefault(require("./api/order"));

var _review = _interopRequireDefault(require("./api/review"));

var _images = _interopRequireDefault(require("./api/images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Private route authorization config
// Database connection
_dotenv.default.config();

(0, _route.default)(_passport.default);
(0, _google.default)(_passport.default);
const zomato = (0, _express.default)(); // adding additional passport configuration

zomato.use(_express.default.json());
zomato.use((0, _expressSession.default)({
  secret: process.env.JWTSECRET
}));
zomato.use(_passport.default.initialize());
zomato.use(_passport.default.session());
zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
}); // /auth/signup

zomato.use("/auth", _auth.default);
zomato.use("/food", _food.default);
zomato.use("/restaurant", _restaurants.default);
zomato.use("/user", _user.default);
zomato.use("/menu", _menu.default);
zomato.use("/order", _order.default);
zomato.use("/review", _review.default);
zomato.use("/images", _images.default);
const PORT = 4000;
zomato.listen(PORT, () => {
  console.log("Server is running");
  (0, _connection.default)().then(() => {
    console.log("DB Connected");
  }).catch(error => {
    console.log("Server is running, but database connection failed...");
    console.log(error);
  });
});