"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Thermostat = require('./thermostat');
const app = (0, express_1.default)();
const port = 3000;
app.locals.temperature = new Thermostat();
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.get('/temperature', (req, res) => {
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.post('/up', (req, res) => {
    app.locals.temperature.up();
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.post('/down', (req, res) => {
    app.locals.temperature.down();
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.delete('/temperature', (req, res) => {
    app.locals.temperature.delete();
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.post('/powerSaveOn', (req, res) => {
    app.locals.temperature.setPowerSavingMode(true);
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.post('/powerSaveOff', (req, res) => {
    app.locals.temperature.setPowerSavingMode(false);
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
app.post('/reset', (req, res) => {
    app.locals.temperature.reset();
    res.send(`The current temperature is ${app.locals.temperature.getTemperature()}`);
});
console.log(`Server listening on localhost:${port}`);
app.listen(port);
