'use strict';

/*
Script NodeJs Adaptado por Juscilan Moreto
Responsavel por se comunicar com um dispositivo embarcado
Arduino / Raspberry por exemplo
2016 © - juscilan.com‎
*/

const express = require('express'),
    bodyParser = require('body-parser'),
    five = require("johnny-five"),
    app = express(),
    board = new five.Board();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res, next) => {
    try {
        if (req.body.ledon || req.body.ledoff) {
            let led = new five.Led(13);
            if (req.body.ledon) led.on();
            if (req.body.ledoff) led.off();
        }
    } catch (error) {
        res.status(500).json(error);
    }
    res.status(200).json({
        exec: true
    });
    console.log(JSON.stringify(req.body));
});


app.listen(3012, () => {
    console.log('Rodando na porta local: ' + '3012');
});
