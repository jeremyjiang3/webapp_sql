// for ( var i=0; i<500;i++){
// 	console.log('This is some code!');
// }

// console.log(5+5);
var faker=require('faker');

// Create fake data
// console.log(faker.internet.email());
// console.log(faker.date.past());


// function generateAddress(){
// console.log(faker.address.streetAddress());
// console.log(faker.address.city());
// console.log(faker.address.state());
	
// }

// generateAddress();

// generateAddress();
// generateAddress();


//mysql-ctl start
//mysql-ctl cli
//Create new database join_us


var mysql=require('mysql');

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//    if (error) throw error;
//    console.log('The solution is: ', results[0].solution);
//    
// });
// connection.end()
// var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].time);
//   console.log(results[0].date);
//   console.log(results[0].now);
// });
// connection.end();


//To SELECT all users from database:
// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
// connection.end();

//To count the number of users in the database:
// var q = 'select count(*) as total from users ';
// connection.query(q, function (error, results, fields) {
//    if (error) throw error;
//    console.log(results[0].total);
// });



//Insert data 
// var q = 'insert into users (email) VALUES ("runningfast@qq.com" )';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Interting data
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// //console.log(person)
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
//});
//console.log(end_result.sql);

// Interting bulk data!!========
var data=[];
for (var i=0;i<500;i++){
	data.push([
		faker.internet.email(),
		faker.date.past(),
		faker.random.word()
	]);
	};	

// console.log(data)
var q='INSERT INTO users(email,created_at,words) VALUES ?';

connection.query(q,[data],function(err,result){
console.log(err);
console.log(result);
});


connection.end();






