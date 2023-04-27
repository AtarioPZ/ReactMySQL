const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { json } = require('express');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'reactinfo'
})

app.get('/', (re, res)=> {
    return res.json("BACKEND");
})

//GET DATA
app.get('/info', (req, res)=> {
    const sql = "SELECT * from info";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

//POST DATA
app.post('info', (req, res) => {
    const sqlins = "Insert into info ('First_Name' , 'Last_Name') VALUES(?)";
    const values = [
        
    ]
    db.query(sqlins, (err, data)=> {
        if(err) return ins,json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Server started...");
})