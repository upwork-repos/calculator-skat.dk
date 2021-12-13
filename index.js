const {
  danishTaxCalculator
} = require('./calc');



var options = {
  vehicleType : 1, 
  fuelType : 1, 
  registrationDate : "02-01-1885", 
  vehicleCo2Field : 499 , 
  particleFilter : null , 
  axles : null, 
  vanApplication : null , 
  vanDeadweight : null
}
var t = danishTaxCalculator(options)

console.log(t)

