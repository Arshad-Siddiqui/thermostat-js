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
        if (this.powerSavingMode && this.temperature > 25) {
            this.temperature = 25;
        }
        else if (!this.powerSavingMode && this.temperature > 32) {
            this.temperature = 32;
        }
        return this.temperature;
    }
    down() {
        this.temperature--;
        return this.temperature;
    }
    setPowerSavingMode(setting) {
        this.powerSavingMode = setting;
        if (this.powerSavingMode && this.temperature > 25) {
            this.temperature == 25;
        }
    }
}
module.exports = Thermostat;
