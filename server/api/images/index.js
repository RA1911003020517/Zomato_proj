import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/allModules";
import { s3Upload } from "../../utils/s3";

const Router = express.Router();

//multer configuration
const storage = multer.memoryStorage();
const upload = multer( { storage } );



/**
 * Route = /:_id
 * Des  = Get image details
 * Params = none
 * Access = Public
 * Method = Get
 */

Router.get( "/:_id", async ( req, res ) =>
{
    try
    {
        
        const image = await ImageModel.findById( req.params._id );

        return res.json( {
            image
        } );

    } catch ( error )
    {
        return res.status( 500 ).json( {
            error: error.message,
        } );
    }
} );



/**
 * Route : /
 * Des   : Upload given image to S3 bucket and save file link to mongoDB
 * params: _id
 * Access: Public
 * Method: POST
 */

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const bucketOptions = {
      Bucket: "zomato-clone-017",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    const dbUpload = await ImageModel.create({
      images: [
        {
          location: uploadImage.Location,
        },
      ],
    });

    return res.status(200).json({ dbUpload });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

