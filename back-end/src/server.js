import express from 'express';
import {cartItems as cartItemsRaw, products as productsRaw} from './temp-data.js';

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();
app.use(express.json());

function populateCartItems(ids) {
    return ids.map(id => products.find(p => p.id === id));
}

app.get("/hello", (req, res) => {
    res.send("Hello!");
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/cart", (req, res) => {
    const items = populateCartItems(cartItems);
    res.json(items);
});

app.get("/products/:productId", (req, res) => {
    const product = products.find(p => p.id === req.params.productId);
    res.json(product);
});

app.post("/cart", (req, res) => {
    const productId = req.body.id;
    cartItems.push(productId);
    const items = populateCartItems(cartItems);
    res.json(items);
});

app.delete("/cart/:productId", (req, res) => {
    const productId = req.params.productId;
    cartItems = cartItems.filter(id => id !== productId);
    const items = populateCartItems(cartItems);
    res.json(items);
});


app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});