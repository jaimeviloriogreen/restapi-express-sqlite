import { request, response } from "express";

const home = (req = request, res = response)=>{
    res.send("<h1>Home</h1>");
}


export{home}