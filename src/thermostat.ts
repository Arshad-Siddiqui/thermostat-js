class Thermostat {
  temperature: number;
  powerSavingMode: boolean;
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
  }

  getTemperature(): number {
    return this.temperature;
  }

  up(): number {
    this.temperature++;

    if (this.powerSavingMode && this.temperature > 25) {
      this.temperature = 25;
    } else if (!this.powerSavingMode && this.temperature > 32) {
      this.temperature = 32;
    }
    
    return this.temperature;
  }

  down(): number {
    this.temperature--;
    return this.temperature;
  }

  setPowerSavingMode(setting: boolean) {
    this.powerSavingMode = setting;

    if (this.powerSavingMode && this.temperature > 25) {
      this.temperature == 25;
    }
  }
}

module.exports = Thermostat;