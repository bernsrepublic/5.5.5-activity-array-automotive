//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass");
// //shouldn't be vehicleBaseClass

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle(
//   "Mecury",
//   "Sedan",
//   "1965",
//   "color",
//   "mileage"
// );
// console.log(v.make);

const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  // ****************************************
  // Load Passenger Parameter
  //*****************************************/
  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model + " " + this.make + "Over The Required Passenger Capacity"
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }
  // ****************************************
  // Start Engine Parameter
  //*****************************************/
  start() {
    if (this.fuel > 0) {
      console.log("Engine Running.");
      return (this.started = true);
    } else {
      console.log("Fuel Empty");
      return (this.started = false);
    }
  }
  // ****************************************
  // Schedule Service Parameters
  //*****************************************/
  scheduleService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}

let carModel = new Car("mercury", "rad_sedan", "2002", "white", 50000);

carModel.start();
carModel.loadPassenger(5);
carModel.stop();
carModel.checkService();

console.log(carModel);
