const Thermostat = require('../dist/thermostat')

describe('Thermostat', () => {
  describe('.up', () => {
    it('should increase the thermostat value by 1', () => {
      const thermostat = new Thermostat()
      expect(thermostat.getTemperature()).toBe(20)
      thermostat.up()
      expect(thermostat.getTemperature()).toBe(21);
      thermostat.up()
      expect(thermostat.getTemperature()).toBe(22);
    })
  })

  describe('.down', () => {
    it('should decrease the thermostat value by 1', () => {
      const thermostat = new Thermostat()
      thermostat.down()
      expect(thermostat.getTemperature()).toBe(19)
      thermostat.down()
      expect(thermostat.getTemperature()).toBe(18)
    })
  })

  describe('.powerSavingMode', () => {
    it('should limit the temperature to 25 degrees', () => {
      const thermostat = new Thermostat()
      thermostat.setPowerSavingMode(true)
      for(let i = 0; i < 6; i++) {// 20 + 6 but capped at 25
        thermostat.up()
      }
      expect(thermostat.getTemperature()).toBe(25)
    })

    it('when turned off should limit the temperature to 32 degrees', () => {
      const thermostat = new Thermostat()
      thermostat.setPowerSavingMode(false)
      for (let i = 0; i < 16; i++) {//20 + 16 but capped at 32
        thermostat.up()
      }

      expect(thermostat.getTemperature()).toBe(32)
    })
  })
})