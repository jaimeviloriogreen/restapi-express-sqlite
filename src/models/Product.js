import { v4 as uuidv4 } from 'uuid';

export default class Product{
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.uuid = uuidv4();
    }
}