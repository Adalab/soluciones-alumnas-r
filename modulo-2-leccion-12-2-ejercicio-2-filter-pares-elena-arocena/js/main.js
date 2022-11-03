"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((pins) => pins %2 === 0);
console.log(evenPins);