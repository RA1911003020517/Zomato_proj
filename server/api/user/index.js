import express from "express";



const Router = express.Router();

/**
 * Route =  /
 * Des = Get authourised user data
 * params = none
 * Access = public
 * Method = Get
 */

Router.get( '/', async ( req, res ) =>
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

export default Router;