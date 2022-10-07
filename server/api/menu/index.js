import express from "express";
import { MenuModel, ImageModel } from "../../database/allModules";



const Router = express.Router();
/**
 * Route  = /List
 * Des   = Get all list of menu based on restaurant id
 * params = _id
 * Access = public
 * Method = get
 */

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);

    if (!menus) {
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    }

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route  = /image
 * Des   = Get all list of menu images with restaurant id
 * params = _id
 * Access = public
 * Method = get
 */


Router.get( "/image/:_id", async ( req, res ) =>
{
    try
    {
        const { _id } = req.params;
        const menuImages = await ImageModel.findById( _id );

        if ( !menuImages )
        {
            return res.status( 404 ).json( {
                message: "No menu images found"
            } );
        }
        return res.json( { menuImages } );
    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message
        } );
    }
})

export default Router;