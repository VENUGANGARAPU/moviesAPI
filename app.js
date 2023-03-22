import express from 'express'
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.get('/byusingId/:Search/:id',cors(), async(req,res)=>{
    const search = req.params.id;
    const showtype =req.params.Search;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${showtype}/${search}?api_key=${process.env.API_KEY}`);
        const data =await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json("please try again after sometime");
    }
});

app.get('/search/:show/:movieName',cors(), async (req,res)=>{
    const searchMovie = req.params.movieName;
    const showtype =req.params.show;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/${showtype}?api_key=${process.env.API_KEY}&query=${searchMovie}`);
        const data =await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json("please try again after sometime");
    }  
});


app.get('/',cors(), async (req,res)=>{
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
        const data =await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json("please try again after sometime");
    }
});





app.listen(5000,console.log('Server running on port 5000...'));