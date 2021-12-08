import fetch from 'node-fetch';


// https://www.skat.dk/skat.aspx?oid=54460




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



*/



var vehicleTypes = {

}


function function_name(vehicleType, fuelType, registrationDate, vehicleCo2Field ) {
	// body...
}





var step1 = "https://translate.googleapis.com/translate_a/t?anno=3&client=te_lib&format=html&v=1.0&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&logld=vTE_20210503_00&sl=da&tl=en&tc=1&sr=1&tk=85909.507382&mode=1"


let todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};

fetch(step1, {
    method: 'POST',
    // body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));



// fetch(step1)
//     .then(res => res.json())
//     .then(text => console.log(text));