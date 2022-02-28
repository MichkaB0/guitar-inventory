import express from "express";
const app = express();
const port = 8081;

app.get("/", (req,res) =>{
    res.send("test")
});


app.get( "/echo", ( req, res ) => {
    res.status(200).json({
        message: '/echo work'
    })
} );

app.listen( port, () => {
    console.log( `server started at on http://localhost:${ port }` );
} );