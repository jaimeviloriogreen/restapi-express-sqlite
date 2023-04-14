# Create table
CREATE TABLE IF NOT EXISTS
    products(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uuid TEXT NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        qty INTEGER NOT NULL
    );


INSERT INTO products(uuid, name, price, qty)
VALUES
    ("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d", "Laptop", 999.99, 4),
    ("1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed", "Keyboard", 150.00, 16);
