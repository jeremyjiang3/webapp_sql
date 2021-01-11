var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');
var app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
	 if (error)throw error;
	 var count=results[0].count;
 // var msg = "We have " + results[0].count + " users";
 // res.send(msg);
 res.render("home",{count: count});
 });
});


app.post("/register",function(req,res){
	var person={
		words:req.body.word,
		email:req.body.email
		
	};
	connection.query('INSERT INTO users SET ?',person, 
					 function(err,result){
						console.log(err);
 						console.log(result);	
						res.redirect("/");
	});
   //console.log("POSE REQUEST SENT TO /register email is"+req.body.email);

});


// app.get("/",function(req,res){
// 	res.send('You made it!');
// });

app.get("/joke",function(req,res){
	var joke="<strong>What do you call a dog that doe all magic tricks?</strong><em> A labracadabrador</em>"
	res.send(joke);
	});

app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});



app.listen(3000,function(){
	console.log('Server running on Port 3000!');
});


