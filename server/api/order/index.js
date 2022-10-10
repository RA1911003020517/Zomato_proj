import express from "express";
import passport from "passport";

import {OrderModel } from "../../database/allModules";
const Router = express.Router();


/**
 * Route =  /
 * Des   = get all orders by id
 * Params = _id
 * Access = private
 * Method = Get
 */
Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const getOrders = await OrderModel.findOne({ user: user._id });

      if (!getOrders) {
        return res.status(400).json({ error: "User not found" });
      }

      return res.status(200).json({ orders: getOrders });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);


/**
 * 
 * Route =  /new
 * Des   = Add new Orders
 * params = none
 * access = Private
 * Method = Post  or Put or Patch
 */


Router.put( "/new", passport.authenticate( "jwt", { session: false } ),

  async ( req, res ) =>
  {
    try
    {

      const { user } = req;
      const { orderDetails } = req.body;

      const addNewOrder = await OrderModel.findOneAndUpdate( {
        user: user._id
      }, {
        $push: {
          orderDetails: orderDetails,
          
        },
      }, {
        new: true,
        
      }
      );

      return res.json( {
        order: addNewOrder
      } );
      
    } catch ( error )
    {
      return res.status( 500 ).json( {
        error: error.message
      } );
    }
  }
  
  
);




export default Router;