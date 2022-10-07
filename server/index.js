import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// Private route authorization config
import privateRouteConfig from "./config/route.config";

// Database connection
import ConnectDB from "./database/connection";

import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurants";
import User from "./api/user";

dotenv.config();

privateRouteConfig(passport);

const zomato = express();

// adding additional passport configuration

zomato.use(express.json());
zomato.use(session({ secret: "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// /auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", passport.authenticate("jwt", { session: false }), User);

const PORT = 4000;

zomato.listen( PORT, () =>
{
    console.log( "Server is running" )
    ConnectDB()
    
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });
});