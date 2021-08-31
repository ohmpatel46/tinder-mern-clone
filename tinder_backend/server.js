import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App Config

const app = express();
const port= process.env.PORT || 8001;
const connection_url=`mongodb+srv://Admin:t2bZJLARNdBUUBy@cluster0.fc7jj.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//Middleware

app.use(express.json());
app.use(Cors());

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

app.post('/tinder/cards', (req,res)=>{
    const dbCards= req.body;
    Cards.create(dbCards,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});


//Listener
app.listen(port, ()=>{
    return (
        console.log(`Listening on localhost:${port}`)
    );
})