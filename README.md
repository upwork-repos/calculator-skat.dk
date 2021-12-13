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
| Parameter        | Required | Danish                           | data type | available values                                                                                                                                                                                                                                                                                                                                                                                                                                       | example      |
|------------------|----------|----------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| vehicleType      | yes      | Køretøjstype                     | integer   | 0: "Vælg køretøj",<br>1: "Personbil",<br>2: "Trailer (Påhængskøretøj)",<br>3: "Campingvogn",<br>4: "Motorcykel", <br>5: "Bus (ikke rutebiler)",<br>6: "Varebil",<br>7: "Autocamper",                                                                                                                                                                                                                                                                   | 1            |
| fuelType         | no       | Brændstof                        | integer   | if vehicleType is 1 ("Personbil"), 6 ("Varebil")<br>or 7 ("Autocamper")<br><br>0: "Vælg brændstof",<br>1: "Benzin",<br>2: "Diesel", <br>3: "El",<br>4: "Hybrid med benzin (uden stik)",<br>5: "Hybrid med diesel (uden stik)", <br>6: "Plugin-hybrid med benzin",<br>7: "Plugin-hybrid med diesel", <br><br>if vehicleType is 4 ("Motorcykel") or 5 ("Bus (ikke <br>rutebiler)") <br><br>0: "Vælg brændstof",<br>1: "Benzin eller EL",<br>2: "Diesel", | 2            |
| registrationDate | yes      | Første registrering              | date      | format : `"d-m-Y"`                                                                                                                                                                                                                                                                                                                                                                                                                                     | "02-01-1885" |
| vehicleCo2Field  | yes      | Indtast gram CO2 udledt pr. km   | integer   |                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 320          |
| particleFilter   | no       | Har køretøjet et partikelfilter? | boolean   | true if "Ja" false if "Nej"                                                                                                                                                                                                                                                                                                                                                                                                                            | true         |
| axles            | no       | Antal aksler                     | integer   | 2 : "2 aksler"<br>3 : "3 aksler og flere"                                                                                                                                                                                                                                                                                                                                                                                                              | 3            |
| vanApplication   | no       | Anvendelse                       | integer   | 0 : 'Vælg anvendelse',<br>1 : 'Privat',<br>2 : 'Privat/Erhverv',<br>3 : 'Erhverv',                                                                                                                                                                                                                                                                                                                                                                     | 2            |
| vanDeadweight    | no       | Totalvægt på varebil             | integer   | 0 : 'Vælg',<br>1 : '0 - 2.000 kg',<br>2 : '2.001 - 2.500 kg',<br>3 : '2.501 - 3.000 kg',<br>4 : '3.001 - 4.000 kg',                                                                                                                                                                                                                                                                                                                                    | 4            |


- run the `danishTaxCalculator` function and view the result

```js
var result = danishTaxCalculator(options)
console.log(result)
```

### Result 

#### Format

A result is an an array of result objects, with tax informations from current year to 2026.

| Parameter            | Danish                  | Description                                                                                                                                                                                                                                                  | example |
|----------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| year                 |                         |                                                                                                                                                                                                                                                              | '2021'  |
| total                | Samlet afgift pr. år    | sum of available tax values                                                                                                                                                                                                                                  | 810     |
| weightTax            | Vægtafgift              | Du betaler afgift efter dit køretøjs vægt.                                                                                                                                                                                                                   | 450     |
| compensationFee      | Udligningsafgift        | Du betaler udligningsafgift, hvis du har et <br>køretøj, der kører på diesel eller gas.                                                                                                                                                                      | 1230    |
| co2Ownership         | CO2-ejerafgift          | Du betaler afgift ud fra den mængde CO2, dit <br>køretøj udleder (gram CO2/km).                                                                                                                                                                              | 460     |
| privateUseSupplement | Privatbenyttelsestillæg | Du betaler for retten til at benytte køretøjet <br>privat, hvis du har en varebil, der vejer op til <br>4 tons, er registreret første gang efter den 2. <br>juni 1998 og er registreret til 'godstransport <br>privat' eller 'godstransport privat/erhverv'. | 3125    |


#### Example

```js
[
  {
    year: '2021',
    total: 265,
    weightTax: 1060,
    compensationFee: 0
  },
  {
    year: '2022',
    total: 280,
    weightTax: 1100,
    compensationFee: 0
  },
  {
    year: '2023',
    total: 300,
    weightTax: 1170,
    compensationFee: 0
  },
  {
    year: '2024',
    total: 310,
    weightTax: 1240,
    compensationFee: 0
  },
  {
    year: '2025',
    total: 330,
    weightTax: 1320,
    compensationFee: 0
  },
  {
    year: '2026',
    total: 370,
    weightTax: 1460,
    compensationFee: 0
  }
]

```

The result depends on the vehicle type and fuel type.