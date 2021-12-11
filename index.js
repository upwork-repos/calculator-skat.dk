const {
  run,
  exceptions
} = require('./calc');


// var r = run(1,1, "03-01-1997", 499)
// r = run(1,3, "03-01-1997", 499, true).map(t=>[t.compensationFee, t.weightTax, t.total])
// console.log(r)

// var t = run(5,1, "03-01-1997", 9100, true, 2)
var t = run(5,1, "08-12-2021", 19100, true, 2)
console.log(t)

// .toEqual([ [1060,1060], [1100,1100], [1170,1170], [1240,1240], [1320,1320], [1460,1460] ]

