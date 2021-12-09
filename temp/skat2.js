import fetch from 'node-fetch';
import fs from "fs"
// const fs = require('fs')
// import "./rules.json"

// https://www.skat.dk/skat.aspx?oid=54460
// https://upwork.fforforum.com/eirik/
// https://docs.google.com/document/d/1XDyN3JnA34XTkqudRAqI5aw3sy4icOqRs-OsYpVDnGg/edit?usp=sharing
// progress 1 : https://gist.github.com/dKibru/1509e52eb6750633e63b6faba9ede774

//	grøn_ejerafgift 		green_owner fee
// valgfri_ny_eller_gammel_sats	optional_new_or_old_the_batch

/*


opkrævningsperiode 		collection period
halvår 					half-year
vægtafgift				weight tax


"optional": "0",
"after_July_2021_optional": "0",
"optional_new_or_old_type": "0",
"el_calculation": "0",
"hybrid_benzin_calculation": "0",
"hybrid_diesel_calculation": "0",
"start_registrering": "01-01-1885 00:00",
"slut_registrering": "31-12-1996 23:59",


"unit": "Vehicle curb weight in kg",

<select id="fuelType" name="fuelType" required="required" class="form-control custom-select"><option value="" disabled="disabled">Vælg brændstof</option><option value="[object Object]"> Benzin eller EL </option><option value="[object Object]"> Diesel </option></select>

*/


// Køretøjstype
var vehicleTypes = {
	0 : "Vælg køretøj",
	1 : "Personbil", // fuelTypes1
	2 : "Trailer (Påhængskøretøj)",
	3 : "Campingvogn",
	4 : "Motorcykel", // fuelTypes2
	5 : "Bus (ikke rutebiler)", // fuelTypes2
	6 : "Varebil", // fuelTypes1
	7 : "Autocamper",
}

// Brændstof
var fuelTypes1 = {
	0 : "Vælg brændstof",
	1 : "Benzin",
	2 : "Diesel", // particleFilter
	3 : "El",
	4 : "Hybrid med benzin (uden stik)",
	5 : "Hybrid med diesel (uden stik)", // particleFilter
	6 : "Plugin-hybrid med benzin",
	7 : "Plugin-hybrid med diesel",  // particleFilter
}

var fuelTypes2 = {
	0 : "Vælg brændstof",
	1 : "Benzin eller EL",
	2 : "Diesel", 
}


// 1 , 1 : 4431309
// 1, 2 : 4431634
// 1, 3 : 4432309
// 1, 4 : 4432634
// 1, 5 : 4464319
// 1, 6 : 4433634
// 1, 7 : 4433959
// 2 : 152239
// 3 : 152252
// 4, 1 : 
// 4, 2 : 
// 4, 2 : 

var vehicleType = null
var fuelType = null
var registrationDate = null
var vehicleCo2Field = null
var particleFilter = null

// try {
// 	run(vehicleType, fuelType = null, registrationDate, vehicleCo2Field, particleFilter = null )
// }
// catch (e) {
// 	console.error(e)
// }

// run(3,null, "08-12-2021", 599)


// run(3,null, "08-12-2021", 599) = [ 339, 350, 380, 400, 430, 470 ]
// run(3,null, "08-12-2021", 602) = [ 412, 430, 460, 490, 520, 570 ]
// run(3,null, "08-12-2021", 1550) = [ 1344, 1390, 1480, 1570, 1680, 1840 ]
// Vægtafgift ?Vægtafgift			1840 kr.
// Samlet afgift pr. halvår			1840 kr.
// run(3,null, "08-12-2021", 2002) = [ 806.4, 840, 890, 950, 1010, 1110 ]
// Vægtafgift ?Vægtafgift		806.4 kr.
// Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 38.4)
// Samlet afgift pr. kvartal	806.4 kr.
// 840 = Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 39.552)
// 890 = Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 42.1248)
// 950 = Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 44.8512)
// 1010 = Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 47.7696)
// 1110 = Egenvægt (rundet op) ÷ 100 kg x sats kr. (2100 kg ÷ 100 x 52.5696)


// var ss = run(3,null, "08-12-2021", 1500)
var ss = run(3,null, "08-12-2021", 2002)
console.log(ss)



function run(vehicleType, fuelType = null, registrationDate, vehicleCo2Field, particleFilter = null ) {
	var jsons  = {
		'1-1' : "4431309",
		"1-2" : "4431634",
		"1-3" : "4432309",
		"1-4" : "4432634",
		"1-5" : "4464319",
		"1-6" : "4433634",
		"1-7" : "4433959",
		"2" : "152239",
		'3' : "152252",
		// "4, 1" : "",
		// 4, 2 : ""
		// 4, 2 : 
	}
	// throw '';
	var json_file = ""
	if (vehicleType) {
		json_file = json_file + vehicleType
	}
	if (fuelType) {
		json_file = json_file +"-"+fuelType
	}

	json_file = json_file + ""
	var file_name = jsons[json_file]

	// var rules = require('./jsons)

	// let jsonData = {}
	var results = []
	let rules = JSON.parse(fs.readFileSync('jsons/'+file_name+'.json', 'utf-8'))
	var vehicleCo2_rules = rules[0].children
	var base_vehicleCo2_rule = null;
	for (var i = 0; i < vehicleCo2_rules.length; i++) {
		var vehicleCo2_rule = vehicleCo2_rules[i]
		var min = Number(vehicleCo2_rule.start_interval)
		var max = Number(vehicleCo2_rule.slut_interval) || Infinity
		if (vehicleCo2Field >=  min && vehicleCo2Field <= max  ) {
			// console.log(min,vehicleCo2Field)
			base_vehicleCo2_rule = vehicleCo2_rule
		}
	}

	var vægtafgift_stor = base_vehicleCo2_rule.vægtafgift_stor
	if(vægtafgift_stor){
		console.log(vægtafgift_stor)
	}


	for (var i = 0; i < rules.length; i++) {
		var current_rule = rules[i]
		var res = base_vehicleCo2_rule["vægtafgift"]
		var mult = current_rule.procentmultiplikator


		mult = Number(mult)

		res = getCalculatedTaxRoundedUp(res, current_rule)

		results.push({
			year : current_rule.description,
			total: res,
			vehicleCo2Field,
		})
		// console.log(current_rule.description)
	}
	// var rules = require('./jsons/'+file_name+'.json')


	// return base_vehicleCo2_rule
	return results
}
function getCalculatedTaxRoundedUp(e, t) {
	return void 0 == e ? void 0 : 2021 == t.description ? e : 10 * Math.ceil(e * t.procentmultiplikator / 10)
}
function getCalculatedTaxForBigWeight(e, t) {
	return void 0 == e ? void 0 : e * t.procentmultiplikator
}
function getStartYear(e) {
	return e.find((function(e) {
		return e.description === (new Date).getFullYear().toString()
	}))
}
function splitBigTaxString(e) {
	return void 0 == e ? void 0 : e.split("/")
}
function getCalculatedBigTaxForYear(e, t) {
	if (void 0 != e) {
		var i = splitBigTaxString(e),
			s = getCalculatedTaxForBigWeight(i[0], t);
		return [s, i[1]]
	}
}

function getBigTaxSumWeight(e, t, i) {
	return 2021 == this.year.description ? calculateBigTaxSum(e, t, i) : 10 * Math.ceil(calculateBigTaxSum(e, t, i) / 10)
}
function getBigTaxSumEmission(e, t, i) {
	return calculateBigTaxSum(e, t, i)
}
function calculateBigTaxSum(e, t, i) {
	return roundUpToHundred(e) / i * t
}
function roundUpToHundred(e) {
	return 100 * Math.ceil(e / 100)
}
function yearsDiff(e) {
	var t = new Date,
		i = b()(t, "DD/MM/YYYY HH:mm:ss").diff(b()(e, "DD/MM/YYYY HH:mm:ss")),
		s = b.a.duration(i);
	return s.years()
}

/*

We = {
	name: "Result",
	props: ["textData", "tax", "availableYears", "optionalDeadWeight", "optionalSelectedRegistrationDate"],
	data: function() {
		var e = "" != this.optionalSelectedRegistrationDate && this.yearsDiff(this.optionalSelectedRegistrationDate) >= 35;
		return {
			showTaxesPerPeriodInfo: !1,
			showThirtyFiveYearsInfo: !1,
			olderThanThirtyfiveYears: e,
			year: this.getStartYear(this.availableYears),
			weightTax: this.getCalculatedTaxRoundedUp(this.tax.vÃ¦ gtafgift, this.getStartYear(this.availableYears)),
			greenOwnershipTax: this.getCalculatedTaxRoundedUp(this.tax.grÃ¸ n_ejerafgift, this.getStartYear(this.availableYears)),
			co2OwnershipTax: this.getCalculatedTaxRoundedUp(this.tax.co2_ejerafgift, this.getStartYear(this.availableYears)),
			emissionTax: this.tax.udligningsafgift,
			particleEmissionTax: this.tax.partikeludledningsafgift,
			toll: this.tax.vejbenyttelsesafgift,
			weightTaxBig: this.getCalculatedBigTaxForYear(this.tax.vÃ¦ gtafgift_stor, this.getStartYear(this.availableYears)),
			emissionTaxBig: this.splitBigTaxString(this.tax.udligningsafgift_stor)
		}
	},
	computed: {
		taxesPerPeriodInfo: function() {
			return this.textData.find((function(e) {
				return "sats_for_Ã¥r" === e.id
			})) || {
				description: "Fejl: Information ikke fundet",
				infoTekst: ""
			}
		},
		thirtyFiveYearsInfo: function() {
			return this.textData.find((function(e) {
				return "over_35_Ã¥r" === e.id
			})) || {
				description: "Fejl: Information ikke fundet",
				infoTekst: ""
			}
		},
		privateUseTax: function() {
			return void 0 != this.tax.privatbenyttelsestillÃ¦ g && "halvÃ¥r" == this.tax.opkrÃ¦ vningsperiode ? this.tax.privatbenyttelsestillÃ¦ g / 2 : this.tax.privatbenyttelsestillÃ¦ g
		},
		finalRes: function() {
			var e = (this.emissionTax || 0) + (this.greenOwnershipTax || 0) + (this.weightTax || 0) + (this.co2OwnershipTax || 0) + (this.particleEmissionTax || 0) + (this.toll || 0) + (this.privateUseTax || 0) + (void 0 !== this.weightTaxBig ? this.getBigTaxSumWeight(this.optionalDeadWeight, this.weightTaxBig[0], this.weightTaxBig[1]) : 0) + (void 0 !== this.emissionTaxBig ? this.getBigTaxSumEmission(this.optionalDeadWeight, this.emissionTaxBig[0], this.emissionTaxBig[1]) : 0);
			return this.olderThanThirtyfiveYears ? 2021 == this.year.description ? .25 * e : 10 * Math.ceil(.25 * e / 10) : e
		}
	},
	methods: {
		getCalculatedTaxRoundedUp: function(e, t) {
			return void 0 == e ? void 0 : 2021 == t.description ? e : 10 * Math.ceil(e * t.procentmultiplikator / 10)
		},
		getCalculatedTaxForBigWeight: function(e, t) {
			return void 0 == e ? void 0 : e * t.procentmultiplikator
		},
		getStartYear: function(e) {
			return e.find((function(e) {
				return e.description === (new Date).getFullYear().toString()
			}))
		},
		splitBigTaxString: function(e) {
			return void 0 == e ? void 0 : e.split("/")
		},
		getCalculatedBigTaxForYear: function(e, t) {
			if (void 0 != e) {
				var i = this.splitBigTaxString(e),
					s = this.getCalculatedTaxForBigWeight(i[0], t);
				return [s, i[1]]
			}
		},
		roundUpDeadWeight: function(e) {
			return _.roundUpToHundred(e)
		},
		getBigTaxSumWeight: function(e, t, i) {
			return 2021 == this.year.description ? _.calculateBigTaxSum(e, t, i) : 10 * Math.ceil(_.calculateBigTaxSum(e, t, i) / 10)
		},
		getBigTaxSumEmission: function(e, t, i) {
			return _.calculateBigTaxSum(e, t, i)
		},
		yearsDiff: function(e) {
			var t = new Date,
				i = b()(t, "DD/MM/YYYY HH:mm:ss").diff(b()(e, "DD/MM/YYYY HH:mm:ss")),
				s = b.a.duration(i);
			return s.years()
		}
	},
	watch: {
		year: function(e) {
			this.weightTax = this.getCalculatedTaxRoundedUp(this.tax.vÃ¦ gtafgift, e), this.greenOwnershipTax = this.getCalculatedTaxRoundedUp(this.tax.grÃ¸ n_ejerafgift, e), this.co2OwnershipTax = this.getCalculatedTaxRoundedUp(this.tax.co2_ejerafgift, e), this.weightTaxBig = this.getCalculatedBigTaxForYear(this.tax.vÃ¦ gtafgift_stor, e)
		}
	},
	components: {
		Modal: f,
		GreenOwnershipTaxComponent: k,
		EmissionTaxComponent: O,
		WeightTaxComponent: K,
		Co2OwnershipTaxComponent: M,
		ParticleEmissionTaxComponent: G,
		TollComponent: te,
		PrivateUseTaxComponent: le,
		WeightTaxBigComponent: me,
		EmissionTaxBigComponent: _e,
		CollapseComponent: Oe
	}
}


// var step1 = "https://translate.googleapis.com/translate_a/t?anno=3&client=te_lib&format=html&v=1.0&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&logld=vTE_20210503_00&sl=da&tl=en&tc=1&sr=1&tk=85909.507382&mode=1"


// let todo = {
//     userId: 123,
//     title: "loren impsum doloris",
//     completed: false
// };

// fetch(step1, {
//     method: 'POST',
//     // body: JSON.stringify(todo),
//     headers: { 'Content-Type': 'application/json' }
// }).then(res => res.json())
//   .then(json => console.log(json));



// fetch(step1)
//     .then(res => res.json())
//     .then(text => console.log(text));

*/
