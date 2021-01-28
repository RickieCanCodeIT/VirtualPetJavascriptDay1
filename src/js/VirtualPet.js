"use strict";
let virtualPetName = "Freddy";

let virtualPetName2 = "Jimmy";

let virtualPetName3 = "Dale";

class VirtualPet {
  constructor(name) {
    this._name = name;
    this._hunger = 50;
  }

  feed() {
    this._hunger -= 10;
  }

  get name() {
    return this._name;
  }

  get hunger() {
    return this._hunger;
  }
}

let virtualPetObject = new VirtualPet("Freddy");
