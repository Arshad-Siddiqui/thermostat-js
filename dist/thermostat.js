"use strict";
class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = false;
    }
    getTemperature() {
        return this.temperature;
    }
    up() {
        this.temperature++;
        return this.temperature;
    }
    down() {
        this.temperature--;
        return this.temperature;
    }
    setPowerSavingMode(setting) {
        this.powerSavingMode = setting;
    }
}
module.exports = Thermostat;
