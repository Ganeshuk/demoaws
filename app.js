const express=require("express")
const cor=require("cors")
const app=express()
const mysql = require("mysql");
const {v4}=require("uuid")
app.use(express.json())
app.use(cor())
const co = mysql.createConnection({
  host: "database-3.cz0pmeh4eqhd.eu-north-1.rds.amazonaws.com",
  user: "admin",
  port: "3306",
  password: "ganesh123",
  database: "my_db"
});

app.listen(3001,()=>{
  console.log("ok")
 
  })




  app.post("/img/:id", (request, response) => {
    // If you intended to use the ":id" parameter
 
   const { num, img } = request.body;
 
   // Use parameterized query to prevent SQL injection
   const query = "INSERT INTO demo1 (num, img) VALUES (?, ?)";
   co.query(query, [num,img], (err, results) => {
     if (err) {
       console.error(err);
       response.status(500).send("Internal Server Error");
     } else {
       response.status(200).send("Successfully inserted data");
     }
   });
 });

 app.get("/",(req,resp)=>{
    co.query(`select * from demo1;`,(err,row)=>{
      resp.send(row)
    })
 })