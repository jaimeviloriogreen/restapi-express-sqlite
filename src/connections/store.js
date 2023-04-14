const getProducts = (db)=>{
    return new Promise((resolve, reject)=>{
        const sql = "SELECT uuid, name, price, qty FROM products";
        db.all(sql, (err, rows)=>{
            if( err ) return reject(err.message);
            resolve(rows);
        });

        db.close();
    });
}


const insertProduct = (db, product)=>{
    return new Promise((resolve, reject)=>{
        const {uuid, name, price, qty} = product;
        
        const sql = "INSERT INTO products(uuid, name, price, qty) VALUES(?,?,?,?)";
        const values = [uuid, name, price, qty];

        db.run(sql, values, function(err){
            if( err ) return reject(err.message);
            resolve(this.lastID);
        });

        db.close()
    });
}

export{getProducts, insertProduct}