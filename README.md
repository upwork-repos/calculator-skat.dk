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
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Parameter</th>
    <th class="tg-0pky">Required</th>
    <th class="tg-0pky">Danish</th>
    <th class="tg-0pky">data type</th>
    <th class="tg-0pky">available values</th>
    <th class="tg-0pky">example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">vehicleType</td>
    <td class="tg-0pky">yes</td>
    <td class="tg-0pky">Køretøjstype</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky"><br><span style="font-weight:400;font-style:normal">```js</span>{<br>    0: "Vælg køretøj",<br>    1: "Personbil", // fuelTypes1<br>    2: "Trailer (Påhængskøretøj)",<br>    3: "Campingvogn",<br>    4: "Motorcykel", // fuelTypes2<br>    5: "Bus (ikke rutebiler)", // fuelTypes2<br>    6: "Varebil", // fuelTypes1<br>    7: "Autocamper", // fuelTypes1<br>}<br><span style="font-weight:400;font-style:normal">```</span><br></td>
    <td class="tg-0pky">1</td>
  </tr>
  <tr>
    <td class="tg-0pky">fuelType</td>
    <td class="tg-0pky">no</td>
    <td class="tg-0pky">Brændstof</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky">if vehicleType is 1 ("Personbil"), 6 ("Varebil")<br>or 7 ("Autocamper")<br><br>```js<br>{<br>    0: "Vælg brændstof",<br>    1: "Benzin",<br>    2: "Diesel", // particleFilter<br>    3: "El",<br>    4: "Hybrid med benzin (uden stik)",<br>    5: "Hybrid med diesel (uden stik)", // particleFilter<br>    6: "Plugin-hybrid med benzin",<br>    7: "Plugin-hybrid med diesel", // particleFilter<br>}<br>```<br><br>if vehicleType is 4 ("Motorcykel") or 5 ("Bus (ikke <br>rutebiler)") <br><br>```js<br>{<br>    0: "Vælg brændstof",<br>    1: "Benzin eller EL",<br>    2: "Diesel",<br>}<br>```<br></td>
    <td class="tg-0pky">2</td>
  </tr>
  <tr>
    <td class="tg-0pky">registrationDate</td>
    <td class="tg-0pky">yes</td>
    <td class="tg-0pky">Første registrering</td>
    <td class="tg-0pky">date</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">"02-01-1885"</td>
  </tr>
  <tr>
    <td class="tg-0pky">vehicleCo2Field</td>
    <td class="tg-0pky">yes</td>
    <td class="tg-0pky">Indtast gram CO2 udledt pr. km</td>
    <td class="tg-0pky">boolean</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">true</td>
  </tr>
  <tr>
    <td class="tg-0pky">particleFilter</td>
    <td class="tg-0pky">no</td>
    <td class="tg-0pky">Har køretøjet et partikelfilter?</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">axles</td>
    <td class="tg-0pky">no</td>
    <td class="tg-0pky">Antal aksler</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">vanApplication</td>
    <td class="tg-0pky">no</td>
    <td class="tg-0pky">Anvendelse</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">vanDeadweight</td>
    <td class="tg-0pky">no</td>
    <td class="tg-0pky">Totalvægt på varebil</td>
    <td class="tg-0pky">integer</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
</tbody>
</table>
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