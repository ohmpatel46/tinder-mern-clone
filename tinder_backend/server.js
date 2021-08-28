import express from 'express';
import mongoose from 'mongoose';

//App Config

const app = express();
const port= process.env.PORT || 8001;
const connection_url=`mongodb+srv://Admin:t2bZJLARNdBUUBy@cluster0.fc7jj.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//Middleware

//DB Config

mongoose.connect(connection_url,{ 
    maxPoolSize: 50, 
    wtimeoutMS: 2500,
    useNewUrlParser: true
})

//API Endpoints
app.get('/', (req,res)=>{
    return(
        res.status(200).send("Hello World")
    );
});

//Listener
app.listen(port, ()=>{
    return (
        console.log(`Listening on localhost:${port}`)
    );
})