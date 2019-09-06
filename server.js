
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.get('/', (request, response) => {
//    response.send("Hello Express");
// });

// //SESSIONS
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/session', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });


//  app.get('/', (req, res) => {
//     console.log("Value of name in session: ", req.session.name);
//     res.render('index', {title: "my root route"});
// });
// app.post('/users', (req, res) => {
//     req.session.name = req.body.name;
//     res.redirect('/');
// });

//  //END SESSIONS

app.listen(8000, () => console.log("listening on port 8000"));

app.get("/users", (req, res) => {
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.get("/cars", (req, res) => {
    res.render('cars');
})

app.get("/cats", (req, res) => {
      res.render('cats');
})

app.get("/cat1", (req, res) => {
    var cat1_array = [
        {name: "Cat1", age: "1", spots:[ "under the bed" , " in a sunbeam"]}, 
             
    ];
    res.render('details', {cats: cat1_array});
})

app.get("/cat2", (req, res) => {
    var cat2_array = [
        {name: "Cat2", age: "2", spots:[ "under the bed" , " in a sunbeam"]}, 
             
    ];
    res.render('details', {cats: cat2_array});
})

app.get("/cat3", (req, res) => {
    var cat3_array = [
        {name: "Cat3", age: "3", spots:[ "under the bed" , " in a sunbeam"]}, 
             
    ];
    res.render('details', {cats: cat3_array});
})

app.get("/form", (req, res) => {
    res.render('form');
})

//POST DATA ROUTES

app.use(express.urlencoded({extended: true}));


app.post("/results", function(req, res){
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("results");
})

app.get("/results", function(req, res){
    res.render("results", {results:req.session.results});
})

//Route Parameters

app.get('/new/:id', (req, res) => {
        console.log(req.params.id);
        // ...
    });


