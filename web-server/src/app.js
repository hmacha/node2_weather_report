const path = require("path");
const express = require('express');
const hbs = require('hbs');

let app = express();
let port = process.env.PORT || 3000;

let viewsPath = path.join(__dirname, '../templates/views')
let partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars & views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render('index', {
        title: 'index page...here',
        name: 'Andrew'
    });
})

app.get("/about", (req, res) => {
    res.render('about', {
        img: '/images/Lighthouse.jpg',
        title: 'Nature',
        name: 'About page'
    })
});

app.get("/help", (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Help'
    })
});

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: "This is weather title"
    })
})

app.get("/products", (req, res) => {
    let qs = req.query;
    if (!qs.address) {
        return res.render('error', {
            msg: "Please provide address"
        });
    }

    res.send({
        products: [],
        address: qs.address
    })
});

app.get("*", (req, res) => {
    res.render('error', {
        msg: "Page Not Found!!"
    })
});

app.listen(port, () => {
    console.log("server started.....!!");
})