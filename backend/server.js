const express = require('express');
const cors = require('cors');
const mysql=require('mysql');


const app=express();

app.use(express.json());
app.use(cors());
const datas= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"trainingschedule"
});
app.get("/students",(req,res) =>{
    const sql="SELECT * FROM students";
    datas.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.post('/create',(req,res)=>{
    const sql="INSERT INTO students (`Name`,`email`,`class`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.clas
    ]
    datas.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    
    })
})
app.delete('/students/:id', (req, res) => {
    const sql = "DELETE FROM students WHERE ID=?";

    const id = req.params.id;
    datas.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE students SET `Name`=?, `email`=?, `class`=? WHERE ID=?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.clas
    ];
    const id = req.params.id;
    datas.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});
app.listen(8081,()=>{
    console.log("hey there.....")
})
