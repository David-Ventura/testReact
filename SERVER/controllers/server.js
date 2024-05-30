//const db = require('../../database/config.js')

const db = require('../../database/config')

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    const sql = `select * from estudiantes limit 2;`
    db.query(sql, (error, resulta) =>{
        if(error){
            console.log(error)
            res.json({
                status:false,
                mensaje:error
            })
        }
        res.json({
            status:true,
            mensaje:'registrosCagados',
            data:resulta
        })
    })
})

app.post('/',(req,res)=>{
    const{
        idestudiante,
        nombre,
        apellido,
        email,
        idcarrera,
        usuario
    }= req.body
    const sql = 'insert into estudiantes set ?'
    db.query(sql,{idestudiante,nombre,apellido,email,idcarrera,usuario}, (error,resultado)=>{
        if(error){
            console.log(error)
            res.json({
                status:false,
                mensaje:error
            })
        }
        res.json({
            status:true,
            mensaje:'registrosIngresados',
            data:resultado
        })
    })
/*
    console.log('nombre->',nombre);
    console.log('apellido->',apellido);
    res.json({
        status:true,
        mensaje:'TodoRecibido',
        data:[]
    })
    */
})


module.exports=app;
