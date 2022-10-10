import express from "express";

import { RestaurantModel } from "../../database/allModules";
import { validateRestaurantCity, validateSearchString } from "../../validation/restaurant.validation";

const Router = express.Router();


/**
 * Route  = /
 * Des    = get all the restaurant details based on the city
 * Params = none
 * Access = Public
 * Method = Get
 */


Router.get( "/", async ( req, res ) =>
{
    try
    {
        //htpp://localhost:4000/restaurant/?city=chennai

        const { city } = req.params;

        await validateRestaurantCity( req.params );

        const restaurants = await RestaurantModel.find( { city } );
        if ( restaurants.length === 0 )
        {
            return res.json( { error: "No restaurant found in the city" } );
        }
        return res.json( { restaurants } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );



/**
 * Route  = /:_id
 * Des    = Get individual restaurant details based on id
 * Params = _id
 * Access = Public
 * Method = Get
 */


Router.get( "/:_id", async ( req, res ) =>
{
    try
    {
     
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById( _id );

        if ( !restaurant )
        {
            return res.status( 400 ).json( {
                error: "Restaurant not found"
            } );
        }
        return res.json( { restaurant } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );


/**
 * Route  = /search/:searchString
 * Des    = Get  restaurant details based on search String
 * Params = searchString
 * Access = Public
 * Method = Get
 */


Router.get( "/search/:searchString", async ( req, res ) =>
{

    /**
     * searchString =Raj
     * results ={
     * RajHotel
     * RajRow
     * RonRaj
     * RaJRow
     * }
     */

    try
    {
     
        const { searchString } = req.params;

        await validateSearchString( req.params );

        const restaurants = await RestaurantModel.find( {
            name: { $regex: searchString, $options: "i" },
            
        } );

        if ( !restaurants.length===0 )
        {
            return res.status( 400 ).json( {
                error: `No restaurant match with ${searchString}`
            } );
        }
        return res.json( { restaurants } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );






export default Router;