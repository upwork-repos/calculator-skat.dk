// import fs from "fs"
const fs = require('fs');

// Køretøjstype
var vehicleTypes = {
	0 : "Vælg køretøj",
	1 : "Personbil", // fuelTypes1
	2 : "Trailer (Påhængskøretøj)",
	3 : "Campingvogn",
	4 : "Motorcykel", // fuelTypes2
	5 : "Bus (ikke rutebiler)", // fuelTypes2
	6 : "Varebil", // fuelTypes1
	7 : "Autocamper", // fuelTypes1
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




const exceptions = {
	vehicleTypeRequired : "vehicleType is required",
	registrationDateOutOfRange : "registration Date is Out Of Range"
}


function ceil_base_10(res){
	return Math.ceil(Math.ceil(res) / 10) * 10
}
function run_based_on_registration_date(date_rules, vehicleType, fuelType = null, registrationDate, vehicleCo2Field, particleFilter = null) {
	var base_rule = null
	var parts =registrationDate.split('-');
	registrationDate = new Date(parts[2], parts[1] - 1, parts[0]); 
	for (var i = 0; i < date_rules.length; i++) {
		var date_rule = date_rules[i]
		var min = date_rule.start_registrering
		var max = date_rule.slut_registrering
		
		parts = min.split(' ')[0].split('-');
		min = new Date(parts[2], parts[1] - 1, parts[0]); 
		parts = max.split(' ')[0].split('-');
		max = new Date(parts[2], parts[1] - 1, parts[0]); 

		// return parts

		
		if (registrationDate >=  min && registrationDate <= max  ) {
			base_rule = date_rule
		}
	}
	if (!base_rule) {
		throw exceptions.registrationDateOutOfRange
	}

	var results = []

	

	var vehicleCo2_rules = base_rule.children[0].children
	var base_vehicleCo2_rule = null;


	for (var i = 0; i < vehicleCo2_rules.length; i++) {
		var vehicleCo2_rule = vehicleCo2_rules[i]
		var min = Number(vehicleCo2_rule.start_interval)
		var max = Number(vehicleCo2_rule.slut_interval) || Infinity
		if (vehicleCo2Field >=  min && vehicleCo2Field <= max  ) {
			base_vehicleCo2_rule = vehicleCo2_rule
		}
	}

	var vægtafgift_stor = base_vehicleCo2_rule.vægtafgift_stor

	var rules = base_rule.children

	for (var i = 0; i < rules.length; i++) {
		var current_rule = rules[i]
		var res = base_vehicleCo2_rule["vægtafgift"]
		var mult = current_rule.procentmultiplikator

		var timeDependent = current_rule.start_registrering || null

		

		if(vægtafgift_stor){
			// console.log(current_rule)
			var arbitrary_no = vehicleCo2Field
			var big_tax = getCalculatedBigTaxForYear(vægtafgift_stor, current_rule)
			// console.log(t)
			res = big_tax[0]  / big_tax[1] *arbitrary_no

			// if(current_rule.description != 2021)
			// 	res = Math.ceil(Math.ceil(res) / 10) * 10
			// continue;
		}else{
			res = getCalculatedTaxRoundedUp(res, current_rule)
		}

		
		var total = res;
		var weightTax = res;
		var year = current_rule.description
		var compensationFee = 0
		if ( Math.abs(registrationDate.getFullYear() - Number(current_rule.description)) >= 35 ) {
			total = total * 0.25
			// year = registrationDate.getFullYear()
			weightTax = (current_rule.description ==  2021) ? res :ceil_base_10(res)
		}
		total = (current_rule.description ==  2021) ? total :ceil_base_10(total)
		if(particleFilter){
			// console.log(current_rule.children)
			// compensationFee = vehicleCo2_rules[i].grøn_ejerafgift
			// TODO : get the grøn_ejerafgift value
			compensationFee = 970
			weightTax = total
			total = weightTax + compensationFee
		}

		results.push({
			year,
			total,
			weightTax ,
			vehicleCo2Field,
			compensationFee
		})
		// console.log(current_rule.description)
	}



	return results

}


function run(vehicleType, fuelType = null, registrationDate, vehicleCo2Field, particleFilter = null ) {
	if (!vehicleType) { throw exceptions.vehicleTypeRequired }
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
	let rules = JSON.parse(fs.readFileSync('rules/'+file_name+'.json', 'utf-8'))

	var registrationDateIsFactor = rules[0].start_registrering

	if (registrationDateIsFactor) {
		return run_based_on_registration_date(rules, vehicleType, fuelType, registrationDate, vehicleCo2Field, particleFilter)
	}

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
	if ( (base_vehicleCo2_rule == null) && (!registrationDateIsFactor) ) {
		return null
	}


	var vægtafgift_stor = base_vehicleCo2_rule.vægtafgift_stor

	for (var i = 0; i < rules.length; i++) {
		var current_rule = rules[i]
		var res = base_vehicleCo2_rule["vægtafgift"]
		var mult = current_rule.procentmultiplikator

		var timeDependent = current_rule.start_registrering || null

		

		if(vægtafgift_stor){
			// console.log(current_rule)
			var arbitrary_no = 2100
			var big_tax = getCalculatedBigTaxForYear(vægtafgift_stor, current_rule)
			// console.log(t)
			res = big_tax[0] / big_tax[1] * arbitrary_no
			if(current_rule.description != 2021)
				res = ceil_base_10(res)
			// continue;
		}else{
			res = getCalculatedTaxRoundedUp(res, current_rule)
		}

		

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



// var weightTaxBig = getCalculatedBigTaxForYear(vægtafgift_stor, getStartYear(availableYears = null)),

function getCalculatedTaxRoundedUp(e, t) {
	return void 0 == e ? void 0 : 2021 == t.description ? e : 10 * Math.ceil(e * t.procentmultiplikator / 10)
}
function getCalculatedTaxForBigWeight(e, t) {
	return void 0 == e ? void 0 : e * t.procentmultiplikator
}
function getStartYear(e = null) {
	return 2021;
	// return e.find((function(e) {
	// 	return e.description === (new Date).getFullYear().toString()
	// }))
}
function splitBigTaxString(e) {
	return void 0 == e ? void 0 : e.split("/")
}
function getCalculatedBigTaxForYear(vægtafgift_stor, t) {
	if (void 0 != vægtafgift_stor) {
		var i = splitBigTaxString(vægtafgift_stor),
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


module.exports = {
	run,
	exceptions
};
