CREATE DATABASE motoflexbd;

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    in_stock INTEGER NOT NULL,
    purchase_price INTEGER NOT NULL,
    minimum_sell_price INTEGER NOT NULL,
    sold_at INTEGER
);
