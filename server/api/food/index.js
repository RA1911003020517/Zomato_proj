import express from "express";

import { FoodModel } from "../../database/allModules";
import { validateCategory, validateId } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route  = /:_id
 * Des    = get food based on id
 * Params = _id
 * Access = Public
 * Method = Get
 */

Router.get( '/:_id', async ( req, res ) =>
{
    try
    {
        const { _id } = req.params;
        
        await validateId( req.params );
        const foods = await FoodModel.findById( _id );
        return res.json( { foods } );
        
    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
})
/**
 * Route  = /r/:_id
 * Des    = get all food based on particular restaurant
 * Params = _id
 * Access = Public
 * Method = Get
 */
Router.get( '/r/:_id', async ( req, res ) =>
{
    try
    {
        
        const { _id } = req.params;
        await validateId( req.params );

        const foods = await FoodModel.find( {
            restaurant: _id,
        } );
        

        return res.json( { foods } );
    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );

/**
 * Route  = /c/:category
 * Des    = get all food based on particular category
 * Params = category
 * Access = Public
 * Method = Get
 */

Router.get( '/c/:category', async ( req, res ) =>
{
    try
    {
        await validateCategory( req.params );

        const { category } = req.params;
        const foods = await FoodModel.find( {
            category: { $regex: category, $options: "i" },
            
        } );

        if ( !foods ) return res.status( 404 ).json(
            {
                error: `No food matched with ${ category }`
            } );

        return res.json( { foods } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
} );


export default Router;