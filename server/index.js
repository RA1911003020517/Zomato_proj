import express from "express";
import dotenv from "dotenv";


//Database connection
import ConnectDB from "./database/connection";
import Auth from "./api/auth";

dotenv.config();

const app = express();

app.use( express.json() );

app.get( '/', ( req, res ) =>
{
    res.json( {
        message: "server is running"
    } );
} );


// /auth/signup
app.use( "/auth", Auth );

const PORT = 4000;

app.listen( PORT, () =>
{
    ConnectDB()
        .then( () =>
        {
            console.log( "DB Connected" );
        } )
        .catch( ( error ) =>
        {
            console.log( "Server is connected to DB" );
            console.log( error );
        } );
    console.log( "server is running" );

} );