class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    const { make, model, year } = this;
    return `The Vhicle is a ${make}, ${model}, ${year}`;
  }
}
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}
class Motocycle extends Vehicle {
  constructor(make, model, year) {
    //accept 3 argument
    super(make, model, year); //pass 3 argument to parent
    this.numWheels = 2; //create it own properties
  }
  revEngin() {
    return "VROMM";
  }
}
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "sorry,We're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
