import { request, response } from "express";

const validateProduct = ((req = request, res = response, next)=>{
    const { name, price, qty} = req.body;
    
    const regExpNumbers = new RegExp("[0-9]+", "g");
    const regExpText = new RegExp("[a-zA-Z]+", "g");
    
    if( name == undefined || price == undefined || qty == undefined ){
        return res.status(406).json({"error":"Properties missed!"});
    }
    if(!regExpText.test(name)){
        return res.status(406).json({"error":"name is not a valid text!"});
    }
    if(!regExpNumbers.test(price)){
        return res.status(406).json({"error":"price is not a valid number!"});
    }
    if(!regExpNumbers.test(qty) && !Number.isInteger(qty)){
        return res.status(406).json({"error":"qty is not a valid number!"});
    }
    next(); 
});





export{validateProduct}