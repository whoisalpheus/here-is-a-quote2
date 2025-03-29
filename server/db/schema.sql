CREATE DATABASE quotes_dhxi;

CREATE TABLE quotes_tbl(
    quote_id SERIAL PRIMARY KEY,
    quote_text VARCHAR(500),
    author VARCHAR(255),
    category VARCHAR(255)
);