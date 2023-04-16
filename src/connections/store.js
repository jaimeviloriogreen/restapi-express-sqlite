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

        db.run(sql, values, (err)=>{
            if( err ) return reject(err.message);
            resolve(uuid);
        });

        db.close()
    });
}

const deleteProduct = (db, uuid)=>{
    return new Promise((resolve, reject)=>{
        const sql = "DELETE FROM products WHERE uuid = $id";
        const id = { $id : uuid }

        db.run(sql, id, function(err){
            if( err ) return reject(err.message);
            resolve(this.changes);
        });

         db.close();
    });
}

export{getProducts, insertProduct, deleteProduct}