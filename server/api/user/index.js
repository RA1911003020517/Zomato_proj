import express from "express";
import { UserModel } from "../../database/allModules";
import passport from "passport";



const Router = express.Router();

/**
 * Route =  /
 * Des = Get authourised user data
 * params = none
 * Access = private
 * Method = Get
 */

Router.get( '/',passport.authenticate("jwt", { session: false }), async ( req, res ) =>
{
    try
    {
       
        const { email, fullName, phoneNumber, address } = req.user;

        return res.json( { user: { email, fullName, phoneNumber, address } } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error:error.message
        } );
    }
} );



/**
 * Route =  /:_id
 * Des = Get User Data (for the review system)
 * params = _id
 * Access = public
 * Method = Get
 */


Router.get( "/:_id", async ( req, res ) =>
{
    try
    {
        const { _id } = req.params;
        const getUser = await UserModel.findById( _id );
       

        if ( !getUser )
        {
            return res.status( 400 ).json( { error: "User not found" } );
        }

        const { fullName } = getUser;

        return res.json( {
            user: { fullName }
        } );
        
    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );


/**
 * Route =  /:_id
 * Des   =  User Data (for the review system)
 * params = _id
 * Access = private
 * Method = PUT
 */

Router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { userData } = req.body;

      userData.password = undefined;

      const updateUserData = await UserModel.findByIdAndUpdate(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.json({ user: updateUserData });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
)

export default Router;