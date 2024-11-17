import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'

const app = express();

//middlwware for parsing json bady
app.use(express.json());


//middleware for handling CORS policy

//option1: Allow all origins with Default cors(*)
app.use(cors());


//option2 : Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['content-type'],
//     })
// );



app.get('/', (request, response) => {

    console.log(request);
    return response.status(234).send('Welcome to my first MERN project');

});

app.use('/books', booksRoute); 



mongoose.connect(mongoDBURL).then(()=>{

console.log("app is connected to database")
    app.listen(PORT, ()=>{
        console.log(`app is listening ${PORT}`);
    });
    

}).catch((error)=> {
console.log(error)

})