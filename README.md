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

### parameters
| Parameter        | Required | Danish                           | data type | available values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | example      |
|------------------|----------|----------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| vehicleType      | yes      | Køretøjstype                     | integer   | 0: "Vælg køretøj",<br><br>1: "Personbil", // fuelTypes1<br><br>2: "Trailer (Påhængskøretøj)",<br><br>3: "Campingvogn",<br>4: "Motorcykel", // fuelTypes2<br>5: "Bus (ikke rutebiler)", // fuelTypes2<br>6: "Varebil", // fuelTypes1<br>7: "Autocamper", // fuelTypes1                                                                                                                                                                                                                                            | 1            |
| fuelType         | no       | Brændstof                        | integer   | if vehicleType is 1 ("Personbil"), 6 ("Varebil")<br>or 7 ("Autocamper")<br><br>0: "Vælg brændstof",<br>1: "Benzin",<br>2: "Diesel", // particleFilter<br>3: "El",<br>4: "Hybrid med benzin (uden stik)",<br>5: "Hybrid med diesel (uden stik)", // particleFilter<br>6: "Plugin-hybrid med benzin",<br>7: "Plugin-hybrid med diesel", // particleFilter<br>```<br><br>if vehicleType is 4 ("Motorcykel") or 5 ("Bus (ikke <br>rutebiler)") <br><br>0: "Vælg brændstof",<br>1: "Benzin eller EL",<br>2: "Diesel", | 2            |
| registrationDate | yes      | Første registrering              | date      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | "02-01-1885" |
| vehicleCo2Field  | yes      | Indtast gram CO2 udledt pr. km   | boolean   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | true         |
| particleFilter   | no       | Har køretøjet et partikelfilter? | integer   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |              |
| axles            | no       | Antal aksler                     | integer   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |              |
| vanApplication   | no       | Anvendelse                       | integer   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |              |
| vanDeadweight    | no       | Totalvægt på varebil             | integer   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |              |


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

The result depends on the vehicle type and fuel type.