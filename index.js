/* global moment */
var moment = require("moment"); // require
import { sqrt } from "mathjs";

console.log("heyyyyy dude");

var datetime = moment().format("MMM Do YY"); // Sep 16th 24
console.log(datetime);

console.log(sqrt(25).toString()); // 2i


var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);