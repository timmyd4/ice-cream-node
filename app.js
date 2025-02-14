import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

const PORT = 3000;

const orders = [];


app.get('/', (req, res) => {
    res.render('home');
})

app.post('/order-summary', (req, res) => {

    const order = 
    {
        fname: req.body.fname,
        email: req.body.email,
        toppings: req.body.toppings,
        cone: req.body.cone
    }
    orders.push(order);
    console.log(order);
    res.render('order-summary.ejs', {order});
})


app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
})