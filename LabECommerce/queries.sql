CREATE TABLE labecommerce_users (
id PRIMARY KEY,
name VARCHAR (255),
email VARCHAR (255),
password VARCHAR (255)
);

SELECT * FROM labecommerce_users;

CREATE TABLE labecommerce_products (
id INT PRIMARY KEY,
name VARCHAR (255),
price BIGINT, 
image_url BLOB
);

SELECT * FROM labecommerce_products;

CREATE TABLE labecommerce_purchases (
id INT PRIMARY KEY,
FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
quantity INT,
total_price INT
);

SELECT * FROM labecommerce_purchases;