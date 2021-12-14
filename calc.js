// import fs from "fs"
const fs = require('fs');

// Køretøjstype
var vehicleTypes = {
    0: "Vælg køretøj",
    1: "Personbil", // fuelTypes1
    2: "Trailer (Påhængskøretøj)",
    3: "Campingvogn",
    4: "Motorcykel", // fuelTypes2
    5: "Bus (ikke rutebiler)", // fuelTypes2
    6: "Varebil", // fuelTypes1
    7: "Autocamper", // fuelTypes1
}

// Brændstof
var fuelTypes1 = {
    0: "Vælg brændstof",
    1: "Benzin",
    2: "Diesel", // particleFilter
    3: "El",
    4: "Hybrid med benzin (uden stik)",
    5: "Hybrid med diesel (uden stik)", // particleFilter
    6: "Plugin-hybrid med benzin",
    7: "Plugin-hybrid med diesel", // particleFilter
}

var fuelTypes2 = {
    0: "Vælg brændstof",
    1: "Benzin eller EL",
    2: "Diesel",
}

const CURRENT_YEAR = 2021




const exceptions = {
    vehicleTypeRequired: "vehicleType is required",
    registrationDateOutOfRange: "registration Date is Out Of Range"
}


function ceil_base_10(res) {
    return Math.ceil(Math.ceil(res) / 10) * 10
}

function run_based_on_registration_date(date_rules, vehicleType, fuelType = null, registrationDate, vehicleCo2Field, particleFilter = null) {
    var base_rule = null
    var parts = registrationDate.split('-');
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


        if (registrationDate >= min && registrationDate <= max) {
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
        if (vehicleCo2Field >= min && vehicleCo2Field <= max) {
            base_vehicleCo2_rule = vehicleCo2_rule
        }
    }

    var vægtafgift_stor = base_vehicleCo2_rule.vægtafgift_stor


    var rules = base_rule.children


    for (var i = 0; i < rules.length; i++) {
        var current_rule = rules[i]
        var res = base_vehicleCo2_rule["vægtafgift"] || 0
        var res2 = base_vehicleCo2_rule["co2_ejerafgift"] || 0
        res = res + res2
        var mult = current_rule.procentmultiplikator

        var timeDependent = current_rule.start_registrering || null



        if (vægtafgift_stor) {
            // console.log(current_rule)
            var arbitrary_no = vehicleCo2Field
            var big_tax = getCalculatedBigTaxForYear(vægtafgift_stor, current_rule)
            res = big_tax[0] / big_tax[1] * arbitrary_no
                // console.log(t)

            // if(current_rule.description != 2021)
            // 	res = Math.ceil(Math.ceil(res) / 10) * 10
            // continue;
        } else {
            res = getCalculatedTaxRoundedUp(res, current_rule)
        }

        var total = res;
        var weightTax = res;
        var year = current_rule.description
        var compensationFee = 0
        if (Math.abs(registrationDate.getFullYear() - Number(current_rule.description)) >= 35) {
            total = total * 0.25
                // year = registrationDate.getFullYear()
            weightTax = (current_rule.description == CURRENT_YEAR) ? res : ceil_base_10(res)
        }
        total = (current_rule.description == CURRENT_YEAR) ? total : ceil_base_10(total)
        if (particleFilter) {
            // console.log(current_rule.children)
            // compensationFee = vehicleCo2_rules[i].grøn_ejerafgift
            // TODO : get the grøn_ejerafgift value
            compensationFee = fuelType == 2 ? 5020 : 970 
            weightTax = total
            total = weightTax + compensationFee
        }

        results.push({
                year,
                total,
                weightTax,
                vehicleCo2Field,
                compensationFee
            })
            // console.log(current_rule.description)
    }



    return results

}

function simple_run(rules) {
    var base_rule = rules[0].children[0]
    var amount = base_rule['vægtafgift']
    var compensationFee = base_rule['udligningsafgift']

    // return amount
    var result = []
    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i]
        var weightTax = amount * Number(rule.procentmultiplikator)
        var res = weightTax
        if (compensationFee) {
            res += compensationFee
        }
        result.push({
            year: rule.description,
            total: (rule.description == CURRENT_YEAR) ? res : ceil_base_10(res),
            vehicleCo2Field: 0,
            compensationFee,
            weightTax: (rule.description == CURRENT_YEAR) ? weightTax : ceil_base_10(weightTax),
        })
    }
    return result
}


function compensationFeeCalculator(baseCompensationFee, compensationFactor) {
    // base 	regular		premium	
    // 1130 	1230
    var compensationFee = baseCompensationFee
    if (compensationFactor == "regular")
        compensationFee += 100
    return compensationFee
}


function algorithm1(theRule, vehicleCo2Field) {
    var yearRules = theRule.children
    var base_rules = yearRules[0].children // CURRENT_YEAR with intervals
    var base_rule = null
    var result = []
    var isUltraHeavy = false
    for (var i = 0; i < base_rules.length; i++) {
        var base_rules_now = base_rules[i]
        var min = Number(base_rules_now.start_interval)
        var max = Number(base_rules_now.slut_interval) || Infinity
        if (vehicleCo2Field >= min && vehicleCo2Field <= max) {
            base_rule = base_rules_now
            if (max == Infinity) {
                isUltraHeavy = true
            }
        }
    }
    var base_amount = 0

    if (isUltraHeavy) {
        base_amount = vehicleCo2Field
    } else {
        base_amount = base_rule['vægtafgift']
    }


    for (var i = 0; i < yearRules.length; i++) {
        var rule = yearRules[i]
        var weightTax = 0
        if (isUltraHeavy) {
            weightTax = base_amount / 100 * 14
        } else {
            weightTax = base_amount * Number(rule.procentmultiplikator)
        }

        weightTax = (rule.description == CURRENT_YEAR) ? weightTax : ceil_base_10(weightTax)

        var compensationFee = 0

        if (isUltraHeavy) {
            var big_tax = getCalculatedBigTaxForYear(base_rule.vægtafgift_stor, rule)
            compensationFee = big_tax[0] / big_tax[1] * vehicleCo2Field
            // console.log(compensationFee , big_tax[0] , big_tax[1] , vehicleCo2Field)
            compensationFee =  (rule.description == CURRENT_YEAR) ? compensationFee : ceil_base_10(compensationFee)
            weightTax = compensationFee
            compensationFee = 0
        }

        

        // var total = ( (rule.description ==  CURRENT_YEAR) || (isUltraHeavy) ) ? res :ceil_base_10(res)
        var total = weightTax + compensationFee
        result.push({
            year: rule.description,
            total,
            weightTax,
        })
    }
    return result

}
// vehicle running on diesel or gas.
function algorithm2(theRule, vehicleCo2Field, baseCompensationFee = 0) {
    var yearRules = theRule.children
    var base_rules = yearRules[0].children // CURRENT_YEAR with intervals
    var base_rule = null
    var result = []
    var compensationFactor = "base"
    var isUltraHeavy = false
    for (var i = 0; i < base_rules.length; i++) {
        var base_rules_now = base_rules[i]
        var min = Number(base_rules_now.start_interval)
        var max = Number(base_rules_now.slut_interval) || Infinity
        if (vehicleCo2Field >= min && vehicleCo2Field <= max) {
            base_rule = base_rules_now
            if (max == Infinity) {
                isUltraHeavy = true
            }
            if (base_rules.length - 1 == i)
                compensationFactor = "premium"
            else if (i)
                compensationFactor = "regular"
        }
    }
    var base_amount = 0
    if (isUltraHeavy) {
        base_amount = vehicleCo2Field
    } else {
        base_amount = base_rule['vægtafgift']
    }

    var compensationFee = compensationFeeCalculator(baseCompensationFee, compensationFactor)

    for (var i = 0; i < yearRules.length; i++) {
        var rule = yearRules[i]
        var weightTax = 0
        if (isUltraHeavy) {
            weightTax = base_amount / 100 * 14
        } else {
            weightTax = base_amount * Number(rule.procentmultiplikator)
        }

        if (!isUltraHeavy) {
            weightTax = (rule.description == CURRENT_YEAR) ? weightTax : ceil_base_10(weightTax)
                // compensationFee =  getCalculatedBigTaxForYear(vægtafgift_stor, current_rule)
        }
        var res = weightTax
        if (compensationFee) {
            res += compensationFee
        }


        if (base_rule.vægtafgift_stor) {
            var big_tax = getCalculatedBigTaxForYear(base_rule.vægtafgift_stor, rule)
            compensationFee = big_tax[0] / big_tax[1] * vehicleCo2Field
            // console.log(compensationFee , big_tax[0] , big_tax[1] , vehicleCo2Field)
            compensationFee =  (rule.description == CURRENT_YEAR) ? compensationFee : ceil_base_10(compensationFee)
        }

        

        // var total = ( (rule.description ==  CURRENT_YEAR) || (isUltraHeavy) ) ? res :ceil_base_10(res)
        var total = weightTax + compensationFee
        result.push({
            year: rule.description,
            total,
            // vehicleCo2Field: vehicleCo2Field,
            compensationFee,
            weightTax,
        })
    }
    return result

}

function axles_run(rules, vehicleType, fuelType, registrationDate, axles, vehicleCo2Field) {
    axlesRule = axles == 2 ? rules[0] : rules[1]

    var baseCompensationFee = 1130
    var dieselBased = (fuelType == 2 ) ? true : false
    // if (!dieselBased) { baseCompensationFee = 0 }
    if (dieselBased) {
	    return algorithm2(axlesRule, vehicleCo2Field, baseCompensationFee)
    }
    return algorithm1(axlesRule, vehicleCo2Field, baseCompensationFee)
}

function getRuleByRegistrationDate(date_rules, registrationDate ){
	var base_rule = null
    var parts = registrationDate.split('-');
    registrationDate = new Date(parts[2], parts[1] - 1, parts[0]);
    for (var i = 0; i < date_rules.length; i++) {
        var date_rule = date_rules[i]

        var min = date_rule.start_registrering
        var max = date_rule.slut_registrering


        if (min) {
	        parts = min.split(' ')[0].split('-');
	        min = new Date(parts[2], parts[1] - 1, parts[0]);
        }
        if (max) {
	        parts = max.split(' ')[0].split('-');
	        max = new Date(parts[2], parts[1] - 1, parts[0]);
        }
        var isFound = true
        if (min && min > registrationDate) {
        	isFound = false
        }
        if (max && max < registrationDate) {
        	isFound = false
        }
        if (isFound) {
            base_rule = date_rule
        }
    }
    if (!base_rule) {
        throw exceptions.registrationDateOutOfRange
    }
	return base_rule
}

function getRuleByVehicleCo2Field(rules, vehicleCo2Field){
	var base_vehicleCo2_rule  = null
	for (var i = 0; i < rules.length; i++) {
        var vehicleCo2_rule = rules[i]
        var min = Number(vehicleCo2_rule.start_interval)
        var max = Number(vehicleCo2_rule.slut_interval) || Infinity
        if (vehicleCo2Field >= min && vehicleCo2Field <= max) {
            // console.log(min,vehicleCo2Field)
            base_vehicleCo2_rule = vehicleCo2_rule
        }
    }
	return base_vehicleCo2_rule
}

var vanDeadweights = {
	0 : 'Vælg',
	1 : '0 - 2.000 kg',
	2 : '2.001 - 2.500 kg',
	3 : '2.501 - 3.000 kg',
	4 : '3.001 - 4.000 kg',
}
var vanApplications = {
	0 : 'Vælg anvendelse',
	1 : 'Privat',
	2 : 'Privat/Erhverv',
	3 : 'Erhverv',
}
function run6run(rules, vehicleType, fuelType , registrationDate, vehicleCo2Field , vanApplication , vanDeadweight ){
	var privateUseSupplementTaxes = [0, 3125, 1562.5,1562.5]
	// var isPrivateUseSupplement = [1,2].indexOf(vanApplication) == -1 ? false : true
	
	var rule = getRuleByRegistrationDate(rules, registrationDate )

	var t = getRuleByVehicleCo2Field(rule.children[0].children, vehicleCo2Field)
	// return t

	var co2Ownership = 0
	var privateUseSupplement = privateUseSupplementTaxes[vanApplication]


	var answers = []

	var baseCo2OwnershipTax = t.co2_ejerafgift

	for (var i = 0; i < rule.children.length; i++) {
		var currentRule = rule.children[i]
		var procentmultiplikator = Number(currentRule['procentmultiplikator'])
		co2Ownership = baseCo2OwnershipTax * procentmultiplikator
		if (currentRule.description != CURRENT_YEAR) {
			co2Ownership = ceil_base_10(co2Ownership)
		}
		var total = co2Ownership + privateUseSupplement
		answers.push({
			year : currentRule.description,
			co2Ownership,
			privateUseSupplement,
			total
		})
	}


	return answers
}


function run(vehicleType, fuelType = null, registrationDate, vehicleCo2Field = null, particleFilter = null, axles = null) {
    if (!vehicleType) {
        throw exceptions.vehicleTypeRequired
    }
    var jsons = {
            '1-1': "4431309",
            "1-2": "4431634",
            "1-3": "4432309",
            "1-4": "4432634",
            "1-5": "4464319",
            "1-6": "4433634",
            "1-7": "4433959",
            "2": "152239",
            '3': "152252",
            "4-1": "152267",
            "4-2": "152268",
            "5-1": "152294",
            "5-2": "152295",
            "6-1": "152590",
            "6-2": "152594",
            "6-3": "4459849",
            "6-4": "4459247",
            "6-5": "4459334",
            "6-6": "4459548",
            "6-7": "4459635",
            "7-1": "4431309",
            "7-2": "4431634",
            "7-3": "4432309",
            "7-4": "4432634",
            "7-5": "4464319",
            "7-6": "4433634",
            "7-7": "4433959",
        }
        // throw '';
    var json_file = ""
    if (vehicleType) {
        json_file = json_file + vehicleType
    }
    if (fuelType) {
        json_file = json_file + "-" + fuelType
    }

    json_file = json_file + ""
    var file_name = jsons[json_file]


    // var rules = require('./jsons)

    // let jsonData = {}
    var results = []
    let rules = JSON.parse(fs.readFileSync('rules/' + file_name + '.json', 'utf-8'))

    if (vehicleType == 1 && fuelType == 2) {
    	rules = particleFilter ? rules [0] : rules[1]
    	rules = rules.children
    }

    if (vehicleType == 6) {
    	return run6run(rules, vehicleType, fuelType , registrationDate, vehicleCo2Field , particleFilter , axles )
    }

    var registrationDateIsFactor = rules[0].start_registrering
    
    // return registrationDateIsFactor

    // return registrationDateIsFactor

    if (registrationDateIsFactor) {
        return run_based_on_registration_date(rules, vehicleType, fuelType, registrationDate, vehicleCo2Field, particleFilter)
    }

    var vehicleCo2_rules = rules[0].children
    var base_vehicleCo2_rule = null;


    for (var i = 0; i < vehicleCo2_rules.length; i++) {
        var vehicleCo2_rule = vehicleCo2_rules[i]
        var min = Number(vehicleCo2_rule.start_interval)
        var max = Number(vehicleCo2_rule.slut_interval) || Infinity

        if (vehicleCo2Field >= min && vehicleCo2Field <= max) {
            // console.log(min,vehicleCo2Field)
            base_vehicleCo2_rule = vehicleCo2_rule
        }
    }


    if (vehicleType == 4) {
        return simple_run(rules)
    }
    if (vehicleType == 5) {
        // axles
        return axles_run(rules, vehicleType, fuelType, registrationDate, axles, vehicleCo2Field)
    }

    if ((base_vehicleCo2_rule == null) && (!registrationDateIsFactor)) {
        return null
    }


    var vægtafgift_stor = base_vehicleCo2_rule.vægtafgift_stor

    for (var i = 0; i < rules.length; i++) {
        var current_rule = rules[i]
        var res = base_vehicleCo2_rule["vægtafgift"]
        var mult = current_rule.procentmultiplikator

        var timeDependent = current_rule.start_registrering || null



        if (vægtafgift_stor) {
            // console.log(current_rule)
            var arbitrary_no = 2100
            var big_tax = getCalculatedBigTaxForYear(vægtafgift_stor, current_rule)
                // console.log(t)
            res = big_tax[0] / big_tax[1] * arbitrary_no
            if (current_rule.description != CURRENT_YEAR)
                res = ceil_base_10(res)
                // continue;
        } else {
            res = getCalculatedTaxRoundedUp(res, current_rule)
        }



        results.push({
                year: current_rule.description,
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
    return void 0 == e ? void 0 : CURRENT_YEAR == t.description ? e : 10 * Math.ceil(e * t.procentmultiplikator / 10)
}

function getCalculatedTaxForBigWeight(e, t) {
    return void 0 == e ? void 0 : e * t.procentmultiplikator
}

function getStartYear(e = null) {
    return CURRENT_YEAR;
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
    return CURRENT_YEAR == this.year.description ? calculateBigTaxSum(e, t, i) : 10 * Math.ceil(calculateBigTaxSum(e, t, i) / 10)
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





function danishTaxCalculator(options){
    const {vehicleType, fuelType , registrationDate, vehicleCo2Field , particleFilter , axles, vanApplication , vanDeadweight} = options
    if (vehicleType == 6) {
        return run(vehicleType, fuelType, registrationDate, vehicleCo2Field, vanApplication , vanDeadweight)
    }
    return run(vehicleType, fuelType , registrationDate, vehicleCo2Field , particleFilter , axles)
}





module.exports = {
    run,
    exceptions,
    danishTaxCalculator
};