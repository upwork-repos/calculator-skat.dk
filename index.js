const {
  danishTaxCalculator
} = require('./calc');



var options = {
  vehicleType : 1, 
  fuelType : 2, 
  registrationDate : "08-12-2021", 
  // registrationDate : "02-01-1885", 
  vehicleCo2Field : 499 , 
  particleFilter : true , 
  axles : null, 
  vanApplication : null , 
  vanDeadweight : null
}
var t = danishTaxCalculator(options)

console.log(t)

