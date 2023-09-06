const express = require("express");
const path = require("path");
const app = express();
const fs=require('fs');
const mongoose = require("mongoose");
const { Script } = require("vm");
const bodyparser = require("body-parser", { UserNewUrlparser: true });
mongoose.connect("mongodb://127.0.0.1/FoodProject"); // FoodProject will be the database name // changed to ip adress from localhost because of updatee
const port = 40;

var condetails = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  subject: String,
  message: String
});

var contactdetails = mongoose.model("Contactdetails", condetails);  //contact details will be the collections name


// app.use(express.static(__dirname +'/FoodProject'));


// app.use('/FoodProject', express.static(__dirname +'FoodProject'))


// app.use('/views', express.static(__dirname +'/views'))

app.use('/views',express.static('views'))
app.use('/static',express.static('static'))


app.use(express.urlencoded({extended:true}));  // eee line esthe...database lo anni save avthayi details ledante only object id okate vasthundi..

// End Points
// const home=fs.readFileSync('home.html');
// const aboutus=fs.readFileSync('aboutus.html');
// const portfolio=fs.readFileSync('portfolio.html');
// const editorial=fs.readFileSync('editorial.html');
// const foodserve=fs.readFileSync('foodserve.html');
// const bakedfoods=fs.readFileSync('bakedfoods.html');
// const blog=fs.readFileSync('blog.html');
// const books=fs.readFileSync('books.html');
// const contact=fs.readFileSync('contact.html');



// for pug enginess..
// app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

// const homecss = fs.readFileSync('home.css')

app.get('/', (req, res)=>{
    //const params = { }
    // res.status(200).sendFile(path.join("home.html");
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','home.html'));
})

app.get('/aboutus', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(aboutus);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','aboutus.html'));
})

app.get('/portfolio', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(portfolio);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','portfolio.html'));
})
app.get('/editorial', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(editorial);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','editorial.html'));
})
app.get('/foodserve', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(foodserve);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','foodserve.html'));
})

app.get('/bakedfoods', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(bakedfoods);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','bakedfoods.html'));
})
app.get('/blog', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(blog);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','blog.html'));
})
app.get('/books', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(books);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','books.html'));
})
app.get('/contact', (req, res)=>{ 
    // const params = { }
    // res.status(200).end(contact);
    res.sendFile(path.join(__dirname ,'../FoodProject','/views','contact.html'));
})

// to  save details to database..
app.post('/contact', (req, res)=>{ 
    var myData = new contactdetails (req.body);
    myData.save().then(()=>{
        // res.send("this Item has been saved to the Database")
        res.redirect('/contact')
    }).catch(()=>{
        res.status(400).send("Item has not saved to the data base")
    });


    // res.status(200).render('contact.pug');
})









//To Start The Server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});