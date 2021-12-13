# Danish calculator for weight tax, green property tax and CO2 property tax

Converting the danish tax calulator ( https://www.skat.dk/skat.aspx?oid=54460 ) into regular javascript

## steps

```bash
npm install
npm run test

```

## rules

Rules are gound in `/rules` folder. Rules are dynamically loaded into the calc.js based on the vehicleType and fuelType parameters. 

## tests

Tests are writtedn in calc.test.js. Currently it covers the first 3 vehicle types.

## how to use

- import calc.js into js file
```js
const {
  danishTaxCalculator
} = require('./calc');
```

- then construct the options object
```js
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

```

- run the `danishTaxCalculator` function and view the result

```js
var result = danishTaxCalculator(options)
console.log(result)
```

- here is the result
```js
[
  {
    year: '2021',
    total: 265,
    weightTax: 1060,
    vehicleCo2Field: 499,
    compensationFee: 0
  },
  {
    year: '2022',
    total: 280,
    weightTax: 1100,
    vehicleCo2Field: 499,
    compensationFee: 0
  },
  {
    year: '2023',
    total: 300,
    weightTax: 1170,
    vehicleCo2Field: 499,
    compensationFee: 0
  },
  {
    year: '2024',
    total: 310,
    weightTax: 1240,
    vehicleCo2Field: 499,
    compensationFee: 0
  },
  {
    year: '2025',
    total: 330,
    weightTax: 1320,
    vehicleCo2Field: 499,
    compensationFee: 0
  },
  {
    year: '2026',
    total: 370,
    weightTax: 1460,
    vehicleCo2Field: 499,
    compensationFee: 0
  }
]

```