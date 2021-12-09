(function(e) {
	function t(t) {
		for (var s, n, l = t[0], o = t[1], c = t[2], u = 0, h = []; u < l.length; u++) n = l[u], Object.prototype.hasOwnProperty.call(a, n) && a[n] && h.push(a[n][0]), a[n] = 0;
		for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
		d && d(t);
		while (h.length) h.shift()();
		return r.push.apply(r, c || []), i()
	}

	function i() {
		for (var e, t = 0; t < r.length; t++) {
			for (var i = r[t], s = !0, l = 1; l < i.length; l++) {
				var o = i[l];
				0 !== a[o] && (s = !1)
			}
			s && (r.splice(t--, 1), e = n(n.s = i[0]))
		}
		return e
	}
	var s = {},
		a = {
			app: 0
		},
		r = [];

	function n(t) {
		if (s[t]) return s[t].exports;
		var i = s[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = e, n.c = s, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var s in e) n.d(i, s, function(t) {
				return e[t]
			}.bind(null, s));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/";
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		o = l.push.bind(l);
	l.push = t, l = l.slice();
	for (var c = 0; c < l.length; c++) t(l[c]);
	var d = o;
	r.push([0, "chunk-vendors"]), i()
})({
	0: function(e, t, i) {
		e.exports = i("56d7")
	},
	"055b": function(e, t, i) {},
	"3f42": function(e, t, i) {
		"use strict";
		i("fd57")
	},
	4678: function(e, t, i) {
		var s = {
			"./af": "2bfb",
			"./af.js": "2bfb",
			"./ar": "8e73",
			"./ar-dz": "a356",
			"./ar-dz.js": "a356",
			"./ar-kw": "423e",
			"./ar-kw.js": "423e",
			"./ar-ly": "1cfd",
			"./ar-ly.js": "1cfd",
			"./ar-ma": "0a84",
			"./ar-ma.js": "0a84",
			"./ar-sa": "8230",
			"./ar-sa.js": "8230",
			"./ar-tn": "6d83",
			"./ar-tn.js": "6d83",
			"./ar.js": "8e73",
			"./az": "485c",
			"./az.js": "485c",
			"./be": "1fc1",
			"./be.js": "1fc1",
			"./bg": "84aa",
			"./bg.js": "84aa",
			"./bm": "a7fa",
			"./bm.js": "a7fa",
			"./bn": "9043",
			"./bn-bd": "9686",
			"./bn-bd.js": "9686",
			"./bn.js": "9043",
			"./bo": "d26a",
			"./bo.js": "d26a",
			"./br": "6887",
			"./br.js": "6887",
			"./bs": "2554",
			"./bs.js": "2554",
			"./ca": "d716",
			"./ca.js": "d716",
			"./cs": "3c0d",
			"./cs.js": "3c0d",
			"./cv": "03ec",
			"./cv.js": "03ec",
			"./cy": "9797",
			"./cy.js": "9797",
			"./da": "0f14",
			"./da.js": "0f14",
			"./de": "b469",
			"./de-at": "b3eb",
			"./de-at.js": "b3eb",
			"./de-ch": "bb71",
			"./de-ch.js": "bb71",
			"./de.js": "b469",
			"./dv": "598a",
			"./dv.js": "598a",
			"./el": "8d47",
			"./el.js": "8d47",
			"./en-au": "0e6b",
			"./en-au.js": "0e6b",
			"./en-ca": "3886",
			"./en-ca.js": "3886",
			"./en-gb": "39a6",
			"./en-gb.js": "39a6",
			"./en-ie": "e1d3",
			"./en-ie.js": "e1d3",
			"./en-il": "7333",
			"./en-il.js": "7333",
			"./en-in": "ec2e",
			"./en-in.js": "ec2e",
			"./en-nz": "6f50",
			"./en-nz.js": "6f50",
			"./en-sg": "b7e9",
			"./en-sg.js": "b7e9",
			"./eo": "65db",
			"./eo.js": "65db",
			"./es": "898b",
			"./es-do": "0a3c",
			"./es-do.js": "0a3c",
			"./es-mx": "b5b7",
			"./es-mx.js": "b5b7",
			"./es-us": "55c9",
			"./es-us.js": "55c9",
			"./es.js": "898b",
			"./et": "ec18",
			"./et.js": "ec18",
			"./eu": "0ff2",
			"./eu.js": "0ff2",
			"./fa": "8df4",
			"./fa.js": "8df4",
			"./fi": "81e9",
			"./fi.js": "81e9",
			"./fil": "d69a",
			"./fil.js": "d69a",
			"./fo": "0721",
			"./fo.js": "0721",
			"./fr": "9f26",
			"./fr-ca": "d9f8",
			"./fr-ca.js": "d9f8",
			"./fr-ch": "0e49",
			"./fr-ch.js": "0e49",
			"./fr.js": "9f26",
			"./fy": "7118",
			"./fy.js": "7118",
			"./ga": "5120",
			"./ga.js": "5120",
			"./gd": "f6b4",
			"./gd.js": "f6b4",
			"./gl": "8840",
			"./gl.js": "8840",
			"./gom-deva": "aaf2",
			"./gom-deva.js": "aaf2",
			"./gom-latn": "0caa",
			"./gom-latn.js": "0caa",
			"./gu": "e0c5",
			"./gu.js": "e0c5",
			"./he": "c7aa",
			"./he.js": "c7aa",
			"./hi": "dc4d",
			"./hi.js": "dc4d",
			"./hr": "4ba9",
			"./hr.js": "4ba9",
			"./hu": "5b14",
			"./hu.js": "5b14",
			"./hy-am": "d6b6",
			"./hy-am.js": "d6b6",
			"./id": "5038",
			"./id.js": "5038",
			"./is": "0558",
			"./is.js": "0558",
			"./it": "6e98",
			"./it-ch": "6f12",
			"./it-ch.js": "6f12",
			"./it.js": "6e98",
			"./ja": "079e",
			"./ja.js": "079e",
			"./jv": "b540",
			"./jv.js": "b540",
			"./ka": "201b",
			"./ka.js": "201b",
			"./kk": "6d79",
			"./kk.js": "6d79",
			"./km": "e81d",
			"./km.js": "e81d",
			"./kn": "3e92",
			"./kn.js": "3e92",
			"./ko": "22f8",
			"./ko.js": "22f8",
			"./ku": "2421",
			"./ku.js": "2421",
			"./ky": "9609",
			"./ky.js": "9609",
			"./lb": "440c",
			"./lb.js": "440c",
			"./lo": "b29d",
			"./lo.js": "b29d",
			"./lt": "26f9",
			"./lt.js": "26f9",
			"./lv": "b97c",
			"./lv.js": "b97c",
			"./me": "293c",
			"./me.js": "293c",
			"./mi": "688b",
			"./mi.js": "688b",
			"./mk": "6909",
			"./mk.js": "6909",
			"./ml": "02fb",
			"./ml.js": "02fb",
			"./mn": "958b",
			"./mn.js": "958b",
			"./mr": "39bd",
			"./mr.js": "39bd",
			"./ms": "ebe4",
			"./ms-my": "6403",
			"./ms-my.js": "6403",
			"./ms.js": "ebe4",
			"./mt": "1b45",
			"./mt.js": "1b45",
			"./my": "8689",
			"./my.js": "8689",
			"./nb": "6ce3",
			"./nb.js": "6ce3",
			"./ne": "3a39",
			"./ne.js": "3a39",
			"./nl": "facd",
			"./nl-be": "db29",
			"./nl-be.js": "db29",
			"./nl.js": "facd",
			"./nn": "b84c",
			"./nn.js": "b84c",
			"./oc-lnc": "167b",
			"./oc-lnc.js": "167b",
			"./pa-in": "f3ff",
			"./pa-in.js": "f3ff",
			"./pl": "8d57",
			"./pl.js": "8d57",
			"./pt": "f260",
			"./pt-br": "d2d4",
			"./pt-br.js": "d2d4",
			"./pt.js": "f260",
			"./ro": "972c",
			"./ro.js": "972c",
			"./ru": "957c",
			"./ru.js": "957c",
			"./sd": "6784",
			"./sd.js": "6784",
			"./se": "ffff",
			"./se.js": "ffff",
			"./si": "eda5",
			"./si.js": "eda5",
			"./sk": "7be6",
			"./sk.js": "7be6",
			"./sl": "8155",
			"./sl.js": "8155",
			"./sq": "c8f3",
			"./sq.js": "c8f3",
			"./sr": "cf1e",
			"./sr-cyrl": "13e9",
			"./sr-cyrl.js": "13e9",
			"./sr.js": "cf1e",
			"./ss": "52bd",
			"./ss.js": "52bd",
			"./sv": "5fbd",
			"./sv.js": "5fbd",
			"./sw": "74dc",
			"./sw.js": "74dc",
			"./ta": "3de5",
			"./ta.js": "3de5",
			"./te": "5cbb",
			"./te.js": "5cbb",
			"./tet": "576c",
			"./tet.js": "576c",
			"./tg": "3b1b",
			"./tg.js": "3b1b",
			"./th": "10e8",
			"./th.js": "10e8",
			"./tk": "5aff",
			"./tk.js": "5aff",
			"./tl-ph": "0f38",
			"./tl-ph.js": "0f38",
			"./tlh": "cf75",
			"./tlh.js": "cf75",
			"./tr": "0e81",
			"./tr.js": "0e81",
			"./tzl": "cf51",
			"./tzl.js": "cf51",
			"./tzm": "c109",
			"./tzm-latn": "b53d",
			"./tzm-latn.js": "b53d",
			"./tzm.js": "c109",
			"./ug-cn": "6117",
			"./ug-cn.js": "6117",
			"./uk": "ada2",
			"./uk.js": "ada2",
			"./ur": "5294",
			"./ur.js": "5294",
			"./uz": "2e8c",
			"./uz-latn": "010e",
			"./uz-latn.js": "010e",
			"./uz.js": "2e8c",
			"./vi": "2921",
			"./vi.js": "2921",
			"./x-pseudo": "fd7e",
			"./x-pseudo.js": "fd7e",
			"./yo": "7f33",
			"./yo.js": "7f33",
			"./zh-cn": "5c3a",
			"./zh-cn.js": "5c3a",
			"./zh-hk": "49ab",
			"./zh-hk.js": "49ab",
			"./zh-mo": "3a6c",
			"./zh-mo.js": "3a6c",
			"./zh-tw": "90ea",
			"./zh-tw.js": "90ea"
		};

		function a(e) {
			var t = r(e);
			return i(t)
		}

		function r(e) {
			if (!i.o(s, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw t.code = "MODULE_NOT_FOUND", t
			}
			return s[e]
		}
		a.keys = function() {
			return Object.keys(s)
		}, a.resolve = r, e.exports = a, a.id = "4678"
	},
	"56d7": function(e, t, i) {
		"use strict";
		i.r(t);
		i("e260"), i("e6cf"), i("cca6"), i("a79d");
		var s = i("2b0e"),
			a = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("TaxCalculator")
			},
			r = [],
			n = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row border-top border-large"
				}, [e._m(0), i("div", {
					staticClass: "col-1"
				}), i("div", {
					staticClass: "col-10 mt-4"
				}, [e.hasError ? i("div", [e._m(1)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(2)]) : i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vehicleType"
					}
				}, [e._v(" KÃ¸retÃ¸jstype ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vehicleType,
						expression: "vehicleType"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "vehicleType",
						name: "vehicleType",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.vehicleType = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg kÃ¸retÃ¸j")]), e._l(e.jsonData, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				})), i("option", {
					key: "autocamper",
					domProps: {
						value: e.autocamperOption
					}
				}, [e._v(" " + e._s(e.autocamperOption.description) + " ")])], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])])]), "" == e.vehicleType || "Personbil" != e.vehicleType.description && "Autocamper" != e.vehicleType.description ? e._e() : i("VehicleComponent", {
					key: e.renderKey,
					attrs: {
						textData: e.textData,
						fuelOptions: e.vehicleType
					},
					on: {
						taxResultE: e.updateTaxResult,
						availableYearsE: e.updateAvailableYears,
						optionalDeadWeightE: e.updateOptionalDeadWeight,
						selectedRegistrationDateE: e.updateOptionalSelectedRegistrationDate,
						submittedE: e.updatesubmitted
					}
				}), "" == e.vehicleType || "Trailer (PÃ¥hÃ¦ngskÃ¸retÃ¸j)" != e.vehicleType.description && "Campingvogn" != e.vehicleType.description ? e._e() : i("TrailerComponent", {
					key: e.renderKey,
					attrs: {
						textData: e.textData,
						vehicleData: e.vehicleType
					},
					on: {
						taxResultE: e.updateTaxResult,
						availableYearsE: e.updateAvailableYears,
						optionalDeadWeightE: e.updateOptionalDeadWeight,
						selectedRegistrationDateE: e.updateOptionalSelectedRegistrationDate,
						submittedE: e.updatesubmitted
					}
				}), "" != e.vehicleType && "Motorcykel" == e.vehicleType.description ? i("MotorcycleComponent", {
					key: e.renderKey,
					attrs: {
						textData: e.textData,
						fuelOptions: e.vehicleType
					},
					on: {
						taxResultE: e.updateTaxResult,
						availableYearsE: e.updateAvailableYears,
						optionalDeadWeightE: e.updateOptionalDeadWeight,
						selectedRegistrationDateE: e.updateOptionalSelectedRegistrationDate,
						submittedE: e.updatesubmitted
					}
				}) : e._e(), "" != e.vehicleType && "Bus (ikke rutebiler)" == e.vehicleType.description ? i("BusComponent", {
					key: e.renderKey,
					attrs: {
						textData: e.textData,
						fuelOptions: e.vehicleType
					},
					on: {
						taxResultE: e.updateTaxResult,
						availableYearsE: e.updateAvailableYears,
						optionalDeadWeightE: e.updateOptionalDeadWeight,
						selectedRegistrationDateE: e.updateOptionalSelectedRegistrationDate,
						submittedE: e.updatesubmitted
					}
				}) : e._e(), "" != e.vehicleType && "Varebil" == e.vehicleType.description ? i("VanComponent", {
					key: e.renderKey,
					attrs: {
						textData: e.textData,
						fuelOptions: e.vehicleType
					},
					on: {
						taxResultE: e.updateTaxResult,
						availableYearsE: e.updateAvailableYears,
						optionalDeadWeightE: e.updateOptionalDeadWeight,
						selectedRegistrationDateE: e.updateOptionalSelectedRegistrationDate,
						submittedE: e.updatesubmitted
					}
				}) : e._e()], 1), i("div", {
					staticClass: "col-1"
				})]), e.submitted ? i("Result", {
					attrs: {
						id: "resultElement",
						textData: e.textData,
						tax: e.taxResult,
						availableYears: e.availableYears,
						optionalDeadWeight: e.optionalDeadWeight,
						optionalSelectedRegistrationDate: e.optionalSelectedRegistrationDate
					}
				}) : e._e()], 1)
			},
			l = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "col-12"
				}, [i("h2", {
					staticClass: "text-left"
				}, [e._v("Beregn din afgift og sammenlign kÃ¸retÃ¸jer")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter data om kÃ¸retÃ¸jer",
						"aria-label": "Henter data om kÃ¸retÃ¸jer"
					}
				})])
			}],
			o = (i("caad"), i("2532"), i("d3b7"), i("7db0"), i("a4d3"), i("e01a"), function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row border-top border-large"
				}, [i("div", {
					staticClass: "col-12"
				}, [i("div", {
					staticClass: "row mb-3"
				}, [i("div", {
					staticClass: "col-12 text-left"
				}, [i("h2", {
					staticClass: "d-inline-block"
				}, [e._v(" Afgift pr. " + e._s(e.tax.opkrÃ¦ vningsperiode) + " ")])])]), i("div", {
					staticClass: "row"
				}, [i("div", {
					staticClass: "col-1"
				}), i("div", {
					staticClass: "col-10"
				}, [i("div", {
					staticClass: "text-left mb-5"
				}, [i("p", {
					staticClass: "d-inline-block"
				}, [e._v("Sats for Ã¥ret")]), i("div", {
					staticClass: "d-inline-block ml-2"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.year,
						expression: "year"
					}],
					staticClass: "custom-select",
					attrs: {
						id: "year",
						name: "year",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.year = t.target.multiple ? i : i[0]
						}
					}
				}, e._l(e.availableYears, (function(t) {
					return i("option", {
						key: t.description,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				})), 0)]), i("button", {
					staticClass: "help-icon d-inline-block ml-2",
					attrs: {
						type: "button",
						title: e.taxesPerPeriodInfo.description
					},
					on: {
						click: function() {
							return e.showTaxesPerPeriodInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.taxesPerPeriodInfo.description))])])]), i("div", {
					staticClass: "row mb-4 font-weight-bold"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", [e._v(" Samlet afgift pr. " + e._s(e.tax.opkrÃ¦ vningsperiode) + " "), e.olderThanThirtyfiveYears ? i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.thirtyFiveYearsInfo.description
					},
					on: {
						click: function() {
							return e.showThirtyFiveYearsInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(" " + e._s(e.thirtyFiveYearsInfo.description) + " ")])]) : e._e()])]), i("div", {
					staticClass: "col text-right"
				}, [i("span", {
					staticClass: "input-group-sum"
				}, [e._v(" " + e._s(e.finalRes) + " kr. ")])])]), i("CollapseComponent", {
					attrs: {
						heading: "test"
					}
				}, [i("div", {
					staticClass: "border-top border-dark mb-3"
				}), e.tax.hasOwnProperty("grÃ¸n_ejerafgift") ? i("GreenOwnershipTaxComponent", {
					attrs: {
						textData: e.textData,
						greenOwnershipTax: e.greenOwnershipTax
					}
				}) : e._e(), e.tax.hasOwnProperty("udligningsafgift") ? i("EmissionTaxComponent", {
					attrs: {
						textData: e.textData,
						emissionTax: e.emissionTax
					}
				}) : e._e(), e.tax.hasOwnProperty("vÃ¦gtafgift") ? i("WeightTaxComponent", {
					attrs: {
						textData: e.textData,
						weightTax: e.weightTax
					}
				}) : e._e(), e.tax.hasOwnProperty("co2_ejerafgift") ? i("Co2OwnershipTaxComponent", {
					attrs: {
						textData: e.textData,
						co2OwnershipTax: e.co2OwnershipTax
					}
				}) : e._e(), e.tax.hasOwnProperty("partikeludledningsafgift") ? i("ParticleEmissionTaxComponent", {
					attrs: {
						textData: e.textData,
						particleEmissionTax: e.particleEmissionTax
					}
				}) : e._e(), e.tax.hasOwnProperty("vejbenyttelsesafgift") ? i("TollComponent", {
					attrs: {
						textData: e.textData,
						toll: e.toll
					}
				}) : e._e(), e.tax.hasOwnProperty("privatbenyttelsestillÃ¦g") ? i("PrivateUseTaxComponent", {
					attrs: {
						textData: e.textData,
						privateUseTax: e.privateUseTax
					}
				}) : e._e(), e.tax.hasOwnProperty("vÃ¦gtafgift_stor") ? i("WeightTaxBigComponent", {
					attrs: {
						textData: e.textData,
						weightTaxKr: e.weightTaxBig[0],
						weightTaxKg: e.weightTaxBig[1],
						deadWeight: e.roundUpDeadWeight(e.optionalDeadWeight),
						weightTaxSum: e.getBigTaxSumWeight(e.optionalDeadWeight, e.weightTaxBig[0], e.weightTaxBig[1]),
						year: e.year.description
					}
				}) : e._e(), e.tax.hasOwnProperty("udligningsafgift_stor") ? i("EmissionTaxBigComponent", {
					attrs: {
						textData: e.textData,
						emissionTaxKr: e.emissionTaxBig[0],
						emissionTaxKg: e.emissionTaxBig[1],
						deadWeight: e.roundUpDeadWeight(e.optionalDeadWeight),
						emissionTaxSum: e.getBigTaxSumEmission(e.optionalDeadWeight, e.emissionTaxBig[0], e.emissionTaxBig[1])
					}
				}) : e._e(), i("div", {
					staticClass: "border-top border-dark mb-3"
				}), i("div", {
					staticClass: "row"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					class: {
						"mb-0": e.olderThanThirtyfiveYears
					}
				}, [e._v(" Samlet afgift pr. " + e._s(e.tax.opkrÃ¦ vningsperiode) + " "), e.olderThanThirtyfiveYears ? i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.thirtyFiveYearsInfo.description
					},
					on: {
						click: function() {
							return e.showThirtyFiveYearsInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(" " + e._s(e.thirtyFiveYearsInfo.description) + " ")])]) : e._e()])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					class: {
						"mb-0": e.olderThanThirtyfiveYears
					}
				}, [e._v(" " + e._s(e.finalRes) + " kr. ")])])]), e.olderThanThirtyfiveYears ? i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col"
				}, [i("small", {
					staticClass: "text-muted"
				}, [e._v(" Kun 25% af afgiften opkrÃ¦ves nÃ¥r kÃ¸retÃ¸jet er fyldt 35 Ã¥r. "), i("br"), 2021 != e.year.description ? i("div", [e._v("Resultatet er rundet op til hele tal, som kan deles med 10.")]) : e._e()])])]) : e._e()], 1)], 1), i("div", {
					staticClass: "col-1"
				})])])]), e.showTaxesPerPeriodInfo ? i("Modal", {
					attrs: {
						title: e.taxesPerPeriodInfo.description
					},
					on: {
						close: function() {
							return e.showTaxesPerPeriodInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.taxesPerPeriodInfo.infotekst)
					}
				})])]) : e._e(), e.showThirtyFiveYearsInfo ? i("Modal", {
					attrs: {
						title: e.thirtyFiveYearsInfo.description
					},
					on: {
						close: function() {
							return e.showThirtyFiveYearsInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.thirtyFiveYearsInfo.infotekst)
					}
				})])]) : e._e()], 1)
			}),
			c = [],
			d = (i("25f0"), i("ac1f"), i("1276"), function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "modal fade",
					class: e.addShow ? "show" : "",
					staticStyle: {
						display: "block",
						"background-color": "rgba(25, 25, 25, 0.5)"
					},
					attrs: {
						tabindex: "-1",
						role: "dialog"
					},
					on: {
						click: function(t) {
							return e.$emit("close")
						}
					}
				}, [i("div", {
					staticClass: "modal-dialog",
					attrs: {
						role: "document"
					},
					on: {
						click: function(e) {
							return e.stopPropagation()
						}
					}
				}, [i("div", {
					staticClass: "modal-content"
				}, [i("div", {
					staticClass: "modal-header"
				}, [i("h5", {
					staticClass: "modal-title"
				}, [e._v(e._s(e.title))])]), i("div", {
					staticClass: "modal-body"
				}, [i("div", {
					staticClass: "row mt-3"
				}, [e._t("default")], 2)]), i("div", {
					staticClass: "modal-footer"
				}, [i("button", {
					staticClass: "alt-btn alt-btn-luk",
					attrs: {
						type: "button"
					},
					on: {
						click: function(t) {
							return e.$emit("close")
						}
					}
				}, [e._v(" Luk ")])])])])])
			}),
			u = [],
			h = {
				name: "Modal",
				props: ["title"],
				data: function() {
					return {
						addShow: !1,
						scrollTop: null
					}
				},
				created: function() {
					var e = document.documentElement.scrollTop;
					this.$nextTick((function() {
						this.addShow = !0, window.requestAnimationFrame((function() {
							window.scrollTo(0, e)
						}))
					}))
				}
			},
			m = h,
			p = i("2877"),
			v = Object(p["a"])(m, d, u, !1, null, null, null),
			f = v.exports,
			g = (i("a9e3"), i("466d"), i("5319"), i("c1df")),
			b = i.n(g),
			_ = {
				getBaseYear: function(e) {
					if ("" == e) return {
						children: []
					};
					var t = "2021",
						i = e.children.find((function(e) {
							return e.description === t
						}));
					return i
				},
				match: function(e, t) {
					return Number(t) >= Number(e.start_interval) && Number(t) <= (Number(e.slut_interval) || Number.MAX_VALUE)
				},
				matchNumberToInterval: function(e, t) {
					var i = this;
					return t.find((function(t) {
						return i.match(t, e)
					}))
				},
				matchDate: function(e, t) {
					var i = b()(e.start_registrering, "DD-MM-YYYY HH:mm").toDate(),
						s = b()(e.slut_registrering, "DD-MM-YYYY HH:mm").toDate();
					return t >= (isNaN(i.getTime()) ? new Date(-864e13) : i) && t <= (isNaN(s.getTime()) ? new Date(864e13) : s)
				},
				matchSelectedDateToRegistationPeriod: function(e, t) {
					var i = this;
					return t.find((function(t) {
						return i.matchDate(t, e)
					}))
				},
				roundUpToHundred: function(e) {
					return 100 * Math.ceil(e / 100)
				},
				calculateBigTaxSum: function(e, t, i) {
					return this.roundUpToHundred(e) / i * t
				},
				hasDeadWeight: function(e) {
					return Object.prototype.hasOwnProperty.call(e, "vÃ¦gtafgift_stor") || Object.prototype.hasOwnProperty.call(e, "udligningsafgift_stor")
				},
				validateWholeNumber: function(e) {
					return e > 0 && /^[0-9]*$/.test(e)
				},
				validateWholeNumberCo2: function(e) {
					return e >= 0 && /^[0-9]*$/.test(e)
				},
				validateOneDecimalNumber: function(e) {
					var t = e.replace(/,/g, ".");
					return !isNaN(t) && (t > 0 && /^[0-9]*(\.|,)?[0-9]{1}$/.test(t))
				}
			},
			x = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "greenOwnershiptaxRes"
					}
				}, [e._v(" GrÃ¸n ejerafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.greenOwnershipTaxInfo.description
					},
					on: {
						click: function() {
							return e.showGreenOwnershipTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.greenOwnershipTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "greenOwnershiptaxRes"
					}
				}, [e._v(e._s(e.greenOwnershipTax) + " kr.")])])]), e.showGreenOwnershipTaxInfo ? i("Modal", {
					attrs: {
						title: e.greenOwnershipTaxInfo.description
					},
					on: {
						close: function() {
							return e.showGreenOwnershipTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.greenOwnershipTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			C = [],
			y = {
				name: "OwnershipTaxComponent",
				props: ["textData", "greenOwnershipTax"],
				data: function() {
					return {
						showGreenOwnershipTaxInfo: !1
					}
				},
				computed: {
					greenOwnershipTaxInfo: function() {
						return this.textData.find((function(e) {
							return "grÃ¸n_ejerafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			D = y,
			T = Object(p["a"])(D, x, C, !1, null, null, null),
			k = T.exports,
			w = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "emissiontaxRes"
					}
				}, [e._v(" Udligningsafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.emissionTaxInfo.description
					},
					on: {
						click: function() {
							return e.showEmissionTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.emissionTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "emissiontaxRes"
					}
				}, [e._v(e._s(e.emissionTax) + " kr.")])])]), e.showEmissionTaxInfo ? i("Modal", {
					attrs: {
						title: e.emissionTaxInfo.description
					},
					on: {
						close: function() {
							return e.showEmissionTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.emissionTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			N = [],
			I = {
				name: "EmissionTaxComponent",
				props: ["textData", "emissionTax"],
				data: function() {
					return {
						showEmissionTaxInfo: !1
					}
				},
				computed: {
					emissionTaxInfo: function() {
						return this.textData.find((function(e) {
							return "udligningsafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			j = I,
			R = Object(p["a"])(j, w, N, !1, null, null, null),
			O = R.exports,
			W = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "weighttaxRes"
					}
				}, [e._v(" VÃ¦gtafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.weightTaxInfo.description
					},
					on: {
						click: function() {
							return e.showWeightTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.weightTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "weighttaxRes"
					}
				}, [e._v(" " + e._s(e.weightTax) + " kr. ")])])]), e.showWeightTaxInfo ? i("Modal", {
					attrs: {
						title: e.weightTaxInfo.description
					},
					on: {
						close: function() {
							return e.showWeightTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.weightTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			E = [],
			F = {
				name: "WeightTaxComponent",
				props: ["textData", "weightTax"],
				data: function() {
					return {
						showWeightTaxInfo: !1
					}
				},
				computed: {
					weightTaxInfo: function() {
						return this.textData.find((function(e) {
							return "vÃ¦gtafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			B = F,
			S = Object(p["a"])(B, W, E, !1, null, null, null),
			K = S.exports,
			P = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "co2OwnershiptaxRes"
					}
				}, [e._v(" CO2-ejerafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.co2OwnershipTaxInfo.description
					},
					on: {
						click: function() {
							return e.showCo2OwnershipTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.co2OwnershipTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "co2OwnershiptaxRes"
					}
				}, [e._v(e._s(e.co2OwnershipTax) + " kr.")])])]), e.showCo2OwnershipTaxInfo ? i("Modal", {
					attrs: {
						title: e.co2OwnershipTaxInfo.description
					},
					on: {
						close: function() {
							return e.showCo2OwnershipTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.co2OwnershipTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			$ = [],
			z = {
				name: "Co2OwnershipTaxComponent",
				props: ["textData", "co2OwnershipTax"],
				data: function() {
					return {
						showCo2OwnershipTaxInfo: !1
					}
				},
				computed: {
					co2OwnershipTaxInfo: function() {
						return this.textData.find((function(e) {
							return "co2_ejerafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			Y = z,
			H = Object(p["a"])(Y, P, $, !1, null, null, null),
			M = H.exports,
			U = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "particleEmissiontaxRes"
					}
				}, [e._v(" PartikeludledningstillÃ¦g "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.particleEmissionTaxInfo.description
					},
					on: {
						click: function() {
							return e.showParticleEmissionTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.particleEmissionTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "particleEmissiontaxRes"
					}
				}, [e._v(e._s(e.particleEmissionTax) + " kr.")])])]), e.showParticleEmissionTaxInfo ? i("Modal", {
					attrs: {
						title: e.particleEmissionTaxInfo.description
					},
					on: {
						close: function() {
							return e.showParticleEmissionTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.particleEmissionTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			V = [],
			A = {
				name: "ParticleEmissionTaxComponent",
				props: ["textData", "particleEmissionTax"],
				data: function() {
					return {
						showParticleEmissionTaxInfo: !1
					}
				},
				computed: {
					particleEmissionTaxInfo: function() {
						return this.textData.find((function(e) {
							return "partikeludledningsafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			L = A,
			q = Object(p["a"])(L, U, V, !1, null, null, null),
			G = q.exports,
			J = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "tollRes"
					}
				}, [e._v(" Vejbenyttelsesafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.tollInfo.description
					},
					on: {
						click: function() {
							return e.showTollInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.tollInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "tollRes"
					}
				}, [e._v(e._s(e.toll) + " kr.")])])]), e.showTollInfo ? i("Modal", {
					attrs: {
						title: e.tollInfo.description
					},
					on: {
						close: function() {
							return e.showTollInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.tollInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			X = [],
			Q = {
				name: "TollComponent",
				props: ["textData", "toll"],
				data: function() {
					return {
						showTollInfo: !1
					}
				},
				computed: {
					tollInfo: function() {
						return this.textData.find((function(e) {
							return "vejbenyttelsesafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			Z = Q,
			ee = Object(p["a"])(Z, J, X, !1, null, null, null),
			te = ee.exports,
			ie = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					attrs: {
						for: "tollRes"
					}
				}, [e._v(" PrivatbenyttelsestillÃ¦g "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.privateUseTaxInfo.description
					},
					on: {
						click: function() {
							return e.showPrivateUseTaxInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.privateUseTaxInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					attrs: {
						id: "tollRes"
					}
				}, [e._v(e._s(e.privateUseTax) + " kr.")])])]), e.showPrivateUseTaxInfo ? i("Modal", {
					attrs: {
						title: e.privateUseTaxInfo.description
					},
					on: {
						close: function() {
							return e.showPrivateUseTaxInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.privateUseTaxInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			se = [],
			ae = {
				name: "PrivateUseTaxComponent",
				props: ["textData", "privateUseTax"],
				data: function() {
					return {
						showPrivateUseTaxInfo: !1
					}
				},
				computed: {
					privateUseTaxInfo: function() {
						return this.textData.find((function(e) {
							return "privatbenyttelsestillÃ¦g" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			re = ae,
			ne = Object(p["a"])(re, ie, se, !1, null, null, null),
			le = ne.exports,
			oe = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					staticClass: "mb-0",
					attrs: {
						for: "weightTaxBigRes"
					}
				}, [e._v(" VÃ¦gtafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.weightTaxBigInfo.description
					},
					on: {
						click: function() {
							return e.showWeightTaxBigInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.weightTaxBigInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					staticClass: "mb-0",
					attrs: {
						id: "weightTaxBigRes"
					}
				}, [e._v(e._s(e.weightTaxSum) + " kr.")])])]), i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col"
				}, [i("small", {
					staticClass: "text-muted"
				}, [e._v("EgenvÃ¦gt (rundet op) Ã· 100 kg x sats kr. (" + e._s(e.deadWeight) + " kg Ã· " + e._s(e.weightTaxKg) + " x " + e._s(e.weightTaxKr) + ") "), i("br"), 2021 != e.year ? i("div", [e._v("Resultatet er rundet op til hele tal, som kan deles med 10.")]) : e._e()])])]), e.showWeightTaxBigInfo ? i("Modal", {
					attrs: {
						title: e.weightTaxBigInfo.description
					},
					on: {
						close: function() {
							return e.showWeightTaxBigInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.weightTaxBigInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			ce = [],
			de = {
				name: "WeightTaxBigComponent",
				props: ["textData", "weightTaxKr", "weightTaxKg", "deadWeight", "weightTaxSum", "year"],
				data: function() {
					return {
						showWeightTaxBigInfo: !1
					}
				},
				computed: {
					weightTaxBigInfo: function() {
						return this.textData.find((function(e) {
							return "vÃ¦gtafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			ue = de,
			he = Object(p["a"])(ue, oe, ce, !1, null, null, null),
			me = he.exports,
			pe = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("div", {
					staticClass: "row"
				}, [i("div", {
					staticClass: "col text-left"
				}, [i("label", {
					staticClass: "mb-0",
					attrs: {
						for: "emissionTaxBigRes"
					}
				}, [e._v(" Udligningsafgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.emissionTaxBigInfo.description
					},
					on: {
						click: function() {
							return e.showEmissionTaxBigInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.emissionTaxBigInfo.description))])])])]), i("div", {
					staticClass: "col text-right"
				}, [i("p", {
					staticClass: "mb-0",
					attrs: {
						id: "emissionTaxBigRes"
					}
				}, [e._v(e._s(e.emissionTaxSum) + " kr.")])])]), i("div", {
					staticClass: "row mb-2"
				}, [i("div", {
					staticClass: "col"
				}, [i("small", {
					staticClass: "text-muted"
				}, [e._v("EgenvÃ¦gt (rundet op) Ã· 100 kg x sats kr. (" + e._s(e.deadWeight) + " kg Ã· " + e._s(e.emissionTaxKg) + " x " + e._s(e.emissionTaxKr) + ")")])])]), e.showEmissionTaxBigInfo ? i("Modal", {
					attrs: {
						title: e.emissionTaxBigInfo.description
					},
					on: {
						close: function() {
							return e.showEmissionTaxBigInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.emissionTaxBigInfo.infotekst)
					}
				})])]) : e._e()], 1)
			},
			ve = [],
			fe = {
				name: "EmissionTaxBigComponent",
				props: ["textData", "emissionTaxKr", "emissionTaxKg", "deadWeight", "emissionTaxSum"],
				data: function() {
					return {
						showEmissionTaxBigInfo: !1
					}
				},
				computed: {
					emissionTaxBigInfo: function() {
						return this.textData.find((function(e) {
							return "udligningsafgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				components: {
					Modal: f
				}
			},
			ge = fe,
			be = Object(p["a"])(ge, pe, ve, !1, null, null, null),
			_e = be.exports,
			xe = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "collapser"
				}, [i("button", {
					staticClass: "collapser__header h4 mb-0",
					attrs: {
						type: "button",
						"aria-expanded": e.isExpanded ? "true" : "false"
					},
					on: {
						click: e.toggle
					}
				}, [e._v(" Se beregning for afgift ")]), i("HeightRevealTransition", [e.isExpanded ? i("div", {
					staticClass: "collapse show"
				}, [i("div", {
					staticClass: "collapser__body pt-0 pb-0"
				}, [e._t("default")], 2)]) : e._e()])], 1)
			},
			Ce = [],
			ye = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("transition", {
					on: {
						enter: e.enter,
						leave: e.leave,
						"after-enter": e.afterEnter
					}
				}, [e._t("default")], 2)
			},
			De = [],
			Te = {
				name: "HeightRevealTransition",
				methods: {
					enter: function(e) {
						var t = getComputedStyle(e).width;
						e.style.width = t, e.style.position = "absolute", e.style.visibility = "hidden", e.style.height = "auto";
						var i = getComputedStyle(e).height;
						e.style.width = "", e.style.position = "", e.style.visibility = "", e.style.height = 0, getComputedStyle(e).height, setTimeout((function() {
							e.style.height = i
						}))
					},
					leave: function(e) {
						var t = getComputedStyle(e).height;
						e.style.height = t, getComputedStyle(e).height, setTimeout((function() {
							e.style.height = 0
						}))
					},
					afterEnter: function(e) {
						e.style.height = "auto"
					}
				}
			},
			ke = Te,
			we = (i("6036"), Object(p["a"])(ke, ye, De, !1, null, null, null)),
			Ne = we.exports,
			Ie = {
				components: {
					HeightRevealTransition: Ne
				},
				name: "CollapseComponent",
				data: function() {
					return {
						isExpanded: !1
					}
				},
				props: {
					expanded: {
						type: Boolean,
						default: !1
					}
				},
				watch: {
					expanded: function(e) {
						this.isExpanded = e
					}
				},
				methods: {
					toggle: function() {
						this.isExpanded = !this.isExpanded
					}
				},
				mounted: function() {
					this.isExpanded = this.expanded
				}
			},
			je = Ie,
			Re = (i("6e3e"), Object(p["a"])(je, xe, Ce, !1, null, null, null)),
			Oe = Re.exports,
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
			},
			Ee = We,
			Fe = Object(p["a"])(Ee, o, c, !1, null, null, null),
			Be = Fe.exports,
			Se = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("form", {
					class: {
						"was-validated": e.submitTried
					},
					attrs: {
						novalidate: ""
					},
					on: {
						submit: function(t) {
							return t.preventDefault(), e.submit.apply(null, arguments)
						}
					}
				}, [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "fuelType"
					}
				}, [e._v(" BrÃ¦ndstof ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedFuel,
						expression: "selectedFuel"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "fuelType",
						name: "fuelType",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedFuel = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg brÃ¦ndstof")]), e._l(e.fuelOptions.children, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]), "" != e.selectedFuel ? i("div", [e.hasError ? i("div", [e._m(0)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(1)]) : i("div", ["" != e.selectedFuel && 1 == e.selectedFuel.partikelfilter_mulighed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "particleFilter"
					}
				}, [e._v(" Har kÃ¸retÃ¸jet et partikelfilter? ")]), i("div", {
					staticClass: "col-sm-7"
				}, [e._l(e.particleFilterOptions, (function(t) {
					return i("div", {
						key: t.id
					}, [i("div", {
						staticClass: "custom-control custom-radio"
					}, [i("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.selectedParticleFilter,
							expression: "selectedParticleFilter"
						}],
						staticClass: "custom-control-input",
						attrs: {
							type: "radio",
							id: "pf" + t.description,
							name: "specialRadio"
						},
						domProps: {
							value: t,
							checked: e._q(e.selectedParticleFilter, t)
						},
						on: {
							change: function(i) {
								e.selectedParticleFilter = t
							}
						}
					}), i("label", {
						staticClass: "custom-control-label",
						attrs: {
							for: "pf" + t.description
						}
					}, [e._v(e._s(t.description))])])])
				})), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])], 2)]) : e._e(), "" != e.selectedFuel && 0 == e.selectedFuel.partikelfilter_mulighed || "" != e.selectedFuel && 1 == e.selectedFuel.partikelfilter_mulighed && "" != e.selectedParticleFilter ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "registrationTime"
					}
				}, [e._v(" FÃ¸rste registrering "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.globalRegistrationInfo.description
					},
					on: {
						click: function() {
							return e.showGlobalRegistrationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.globalRegistrationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("DatePickerSkat", {
					key: e.regiDateRenderKey,
					attrs: {
						id: "registrationDate",
						ariaLabel: "VÃ¦lg fÃ¸rste registreringsdato",
						validInput: e.validDateInput
					},
					on: {
						selectedRegiDate: e.updateSelectedRegiDate
					}
				}), e.validDateInput ? e._e() : i("div", {
					staticClass: "text-danger"
				}, [e._v("VÃ¦lg fÃ¸rste registreringsdato")])], 1)]) : e._e(), e.showGlobalRegistrationInfo ? i("Modal", {
					attrs: {
						title: e.globalRegistrationInfo.description
					},
					on: {
						close: function() {
							return e.showGlobalRegistrationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.globalRegistrationInfo.infotekst)
					}
				})])]) : e._e()], 1)])]) : e._e(), "" != e.selectedRegistration && null != e.selectedRegistration && 1 == e.selectedRegistration.valgfri ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "specialRadio"
					}
				}, [e._v(" VÃ¦lg afgift "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.specialChoiceInfo.description
					},
					on: {
						click: function() {
							return e.showSpecialChoiceInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.specialChoiceInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [e._l(e.specialChoiceOptions, (function(t) {
					return i("div", {
						key: t.id
					}, [i("div", {
						staticClass: "custom-control custom-radio"
					}, [i("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.selectedSpecialChoice,
							expression: "selectedSpecialChoice"
						}],
						staticClass: "custom-control-input",
						attrs: {
							type: "radio",
							id: ("sc" + t.description).replace(/\s+/g, ""),
							name: "specialRadio"
						},
						domProps: {
							value: t,
							checked: e._q(e.selectedSpecialChoice, t)
						},
						on: {
							change: function(i) {
								e.selectedSpecialChoice = t
							}
						}
					}), i("label", {
						staticClass: "custom-control-label",
						attrs: {
							for: ("sc" + t.description).replace(/\s+/g, "")
						}
					}, [e._v(e._s(t.description))])])])
				})), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])], 2)]) : e._e(), e.showSpecialChoiceInfo ? i("Modal", {
					attrs: {
						title: e.specialChoiceInfo.description
					},
					on: {
						close: function() {
							return e.showSpecialChoiceInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.specialChoiceInfo.infotekst)
					}
				})])]) : e._e(), "" != e.selectedRegistration && null != e.selectedRegistration && 1 == e.selectedRegistration.valgfri && "" != e.selectedSpecialChoice && null != e.selectedSpecialChoice && 1 == e.selectedSpecialChoice.valgfri_ny_eller_gammel_sats || "" != e.selectedRegistration && null != e.selectedRegistration && 1 == e.selectedRegistration.valgfri_ny_eller_gammel_sats ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "newOrOldRadio"
					}
				}, [e._v(" Er kÃ¸retÃ¸jet registreret i DK fÃ¸rste gang efter 2. oktober 2017? "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.newOrOldChoiceInfo.description
					},
					on: {
						click: function() {
							return e.showNewOrOldChoiceInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.newOrOldChoiceInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [e._l(e.newOrOldTaxChoiceOptions, (function(t) {
					return i("div", {
						key: t.id
					}, [i("div", {
						staticClass: "custom-control custom-radio"
					}, [i("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.selectedNewOrOldTaxChoice,
							expression: "selectedNewOrOldTaxChoice"
						}],
						staticClass: "custom-control-input",
						attrs: {
							type: "radio",
							id: ("noo" + t.description).replace(/\s+/g, ""),
							name: "newOrOldRadio"
						},
						domProps: {
							value: t,
							checked: e._q(e.selectedNewOrOldTaxChoice, t)
						},
						on: {
							change: function(i) {
								e.selectedNewOrOldTaxChoice = t
							}
						}
					}), i("label", {
						staticClass: "custom-control-label",
						attrs: {
							for: ("noo" + t.description).replace(/\s+/g, "")
						}
					}, [e._v(e._s(t.description))])])])
				})), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])], 2)]) : e._e(), e.showNewOrOldChoiceInfo ? i("Modal", {
					attrs: {
						title: e.newOrOldChoiceInfo.description
					},
					on: {
						close: function() {
							return e.showNewOrOldChoiceInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.newOrOldChoiceInfo.infotekst)
					}
				})])]) : e._e(), "" != e.selectedRegistration && null != e.selectedRegistration && 0 == e.selectedRegistration.valgfri && 0 == e.selectedRegistration.valgfri_ny_eller_gammel_sats || "" != e.selectedRegistration && null != e.selectedRegistration && 1 == e.selectedRegistration.valgfri && "" != e.selectedSpecialChoice && 0 == e.selectedSpecialChoice.valgfri_ny_eller_gammel_sats || "" != e.selectedRegistration && null != e.selectedRegistration && 0 == e.selectedRegistration.valgfri && 1 == e.selectedRegistration.valgfri_ny_eller_gammel_sats && "" != e.selectedNewOrOldTaxChoice || "" != e.selectedRegistration && null != e.selectedRegistration && 1 == e.selectedRegistration.valgfri && "" != e.selectedSpecialChoice && 1 == e.selectedSpecialChoice.valgfri_ny_eller_gammel_sats && "" != e.selectedNewOrOldTaxChoice ? i("div", [0 == e.selectedRegistration.el_beregning && 0 == e.selectedRegistration.hybrid_benzin_beregning && 0 == e.selectedRegistration.hybrid_diesel_beregning && ("" == e.selectedSpecialChoice || 0 == e.selectedSpecialChoice.el_beregning && 0 == e.selectedSpecialChoice.hybrid_benzin_beregning && 0 == e.selectedSpecialChoice.hybrid_diesel_beregning) ? i("div", ["Km pr. liter" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vehicleKmField"
					}
				}, [e._v(" Indtast km pr. liter ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vehicleKmNumber,
						expression: "vehicleKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVehicleKmNumber
					},
					attrs: {
						type: "text",
						id: "vehicleKmField",
						name: "vehicleKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.vehicleKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vehicleKmNumber = t.target.value)
						}
					}
				}), e._m(2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])]) : e._e(), "Gram CO2 udledt pr. km" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vehicleCo2Field"
					}
				}, [e._v(" Indtast gram CO2 udledt pr. km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vehicleCo2Number,
						expression: "vehicleCo2Number"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVehicleCo2Number
					},
					attrs: {
						type: "text",
						id: "vehicleCo2Field",
						name: "vehicleCo2Field",
						placeholder: "Indtast CO2 udledt pr. km",
						required: ""
					},
					domProps: {
						value: e.vehicleCo2Number
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vehicleCo2Number = t.target.value)
						}
					}
				}), e._m(3), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast gram CO2/km som et heltal ")])])])]) : e._e(), "KÃ¸retÃ¸jets egenvÃ¦gt i kg" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vehicleWeightField"
					}
				}, [e._v(" Indtast kÃ¸retÃ¸jets egenvÃ¦gt i kg ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vehicleWeightNumber,
						expression: "vehicleWeightNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVehicleWeightNumber
					},
					attrs: {
						type: "text",
						id: "vehicleWeightField",
						name: "vehicleWeightField",
						placeholder: "Indtast vÃ¦gt",
						required: ""
					},
					domProps: {
						value: e.vehicleWeightNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vehicleWeightNumber = t.target.value)
						}
					}
				}), e._m(4), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast kÃ¸retÃ¸jets egenvÃ¦gt i kg som et heltal ")])])])]) : e._e()]) : e._e(), 1 == e.selectedRegistration.el_beregning || 1 == e.selectedSpecialChoice.el_beregning ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "electricWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.electricWhNumber,
						expression: "electricWhNumber"
					}],
					staticClass: "form-control text-right",
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validElecWhNumber
					},
					attrs: {
						type: "text",
						id: "electricWhField",
						name: "electricWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.electricWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.electricWhNumber = t.target.value)
						}
					}
				}), e._m(5), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]) : e._e(), 1 == e.selectedRegistration.hybrid_benzin_beregning || 1 == e.selectedSpecialChoice.hybrid_benzin_beregning ? i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridBenzinWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridBenzinWhNumber,
						expression: "hybridBenzinWhNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyBenzWhNumber
					},
					attrs: {
						type: "text",
						id: "hybridBenzinWhField",
						name: "hybridBenzinWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.hybridBenzinWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridBenzinWhNumber = t.target.value)
						}
					}
				}), e._m(6), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]), i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridBenzinKmField"
					}
				}, [e._v(" Indtast km/l ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridBenzinKmNumber,
						expression: "hybridBenzinKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyBenzKmNumber
					},
					attrs: {
						type: "text",
						id: "hybridBenzinKmField",
						name: "hybridBenzinKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.hybridBenzinKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridBenzinKmNumber = t.target.value)
						}
					}
				}), e._m(7), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])])]) : e._e(), 1 == e.selectedRegistration.hybrid_diesel_beregning || 1 == e.selectedSpecialChoice.hybrid_diesel_beregning ? i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridDieselWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridDieselWhNumber,
						expression: "hybridDieselWhNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyDiesWhNumber
					},
					attrs: {
						type: "text",
						id: "hybridDieselWhField",
						name: "hybridDieselWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.hybridDieselWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridDieselWhNumber = t.target.value)
						}
					}
				}), e._m(8), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]), i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridDieselKmField"
					}
				}, [e._v(" Indtast km/l ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridDieselKmNumber,
						expression: "hybridDieselKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyDiesKmNumber
					},
					attrs: {
						type: "text",
						id: "hybridDieselKmField",
						name: "hybridDieselKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.hybridDieselKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridDieselKmNumber = t.target.value)
						}
					}
				}), e._m(9), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])])]) : e._e()]) : e._e(), e.showSubmit ? i("div", {
					staticClass: "row mb-3"
				}, [e._m(10)]) : e._e()], 1)])
			},
			Ke = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("gram")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("kg")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "col-sm-12 text-right"
				}, [i("input", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "submit",
						id: "submit",
						value: "Beregn afgift"
					}
				})])
			}],
			Pe = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("Datepicker", {
					attrs: {
						"input-class": {
							"form-control": !0,
							"bg-white": !0,
							"is-invalid": !e.isValidInput
						},
						value: e.selectedDate,
						id: e.id,
						format: "dd-MM-yyyy",
						"maximum-view": "year",
						"bootstrap-styling": !0,
						language: e.da,
						"monday-first": !0,
						"disabled-dates": e.minimumDate,
						"calendar-button": !0,
						"calendar-button-icon": "ikon ikon-kalender ikon--large text-white"
					},
					on: {
						selected: function(t) {
							return e.$emit("selectedRegiDate", t)
						}
					}
				}, [i("div", {
					staticClass: "calender-header",
					attrs: {
						slot: "beforeDateInput"
					},
					slot: "beforeDateInput"
				}, [i("div", {
					staticClass: "input-group-prepend"
				}, [i("button", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "button",
						"aria-label": e.ariaLabel
					}
				}, [i("span", {
					staticClass: "ikon ikon-kalender ikon--large"
				})])])])])
			},
			$e = [],
			ze = i("fa33"),
			Ye = i("2430"),
			He = {
				name: "DatePickerSkat",
				props: ["id", "date", "ariaLabel", "minDate", "validInput"],
				emits: ["selectedRegiDate"],
				data: function() {
					return {
						da: Ye["da"]
					}
				},
				computed: {
					selectedDate: function() {
						return this.date ? new Date(this.date) : null
					},
					minimumDate: function() {
						return this.minDate ? {
							to: new Date(this.minDate - 864e4)
						} : {
							to: null
						}
					},
					isValidInput: function() {
						return void 0 === this.validInput || this.validInput
					}
				},
				watch: {},
				methods: {},
				components: {
					Datepicker: ze["a"]
				}
			},
			Me = He,
			Ue = (i("3f42"), Object(p["a"])(Me, Pe, $e, !1, null, null, null)),
			Ve = Ue.exports,
			Ae = i("bc3a"),
			Le = {
				name: "VehicleComponent",
				props: ["textData", "fuelOptions"],
				emits: ["taxResultE", "availableYearsE", "optionalDeadWeightE", "selectedRegistrationDateE", "submittedE"],
				data: function() {
					return {
						showGlobalRegistrationInfo: !1,
						showSpecialChoiceInfo: !1,
						showNewOrOldChoiceInfo: !1,
						isLoading: !1,
						hasError: !1,
						selectedFuel: "",
						selectedParticleFilter: "",
						particleFilterOptions: [],
						regiDateRenderKey: 0,
						selectedRegiDate: "",
						validDateInput: !0,
						selectedRegistration: "",
						registrationOptions: [],
						selectedSpecialChoice: "",
						specialChoiceOptions: [],
						selectedNewOrOldTaxChoice: "",
						newOrOldTaxChoiceOptions: [],
						intervalOptions: [],
						vehicleKmNumber: "",
						validVehicleKmNumber: !0,
						vehicleCo2Number: "",
						validVehicleCo2Number: !0,
						vehicleWeightNumber: "",
						validVehicleWeightNumber: !0,
						electricWhNumber: "",
						validElecWhNumber: !0,
						hybridBenzinWhNumber: "",
						validHyBenzWhNumber: !0,
						hybridBenzinKmNumber: "",
						validHyBenzKmNumber: !0,
						hybridBenzinNumbers: [],
						hybridDieselWhNumber: "",
						validHyDiesWhNumber: !0,
						hybridDieselKmNumber: "",
						validHyDiesKmNumber: !0,
						hybridDieselNumbers: [],
						selectedInterval: "",
						showSubmit: !1,
						submitTried: !1,
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: ""
					}
				},
				computed: {
					globalRegistrationInfo: function() {
						return this.textData.find((function(e) {
							return "global_registrering" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					},
					specialChoiceInfo: function() {
						return this.textData.find((function(e) {
							return "vÃ¦lg_afgift" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					},
					newOrOldChoiceInfo: function() {
						return this.textData.find((function(e) {
							return "vÃ¦lg_ny_eller_gammel_sats" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				methods: {
					submit: function(e) {
						this.taxResult = this.selectedInterval, this.availableYears = this.selectedNewOrOldTaxChoice.children || this.selectedSpecialChoice.children || this.selectedRegistration.children, this.hasDeadWeight(this.taxResult) ? this.optionalDeadWeight = this.vehicleWeightNumber : this.optionalDeadWeight = "";
						var t = this.validateInputFields();
						this.submitTried = !!t, e.currentTarget.checkValidity() && t && (this.$emit("taxResultE", this.taxResult), this.$emit("availableYearsE", this.availableYears), this.$emit("optionalDeadWeightE", this.optionalDeadWeight), this.$emit("selectedRegistrationDateE", this.selectedRegiDate), this.$emit("submittedE", !0))
					},
					validateInputFields: function() {
						var e = "" != this.selectedRegiDate;
						this.validDateInput = e;
						var t = "" == this.vehicleKmNumber || this.validateOneDecimalNumber(this.vehicleKmNumber);
						this.validVehicleKmNumber = t;
						var i = "" == this.vehicleCo2Number || this.validateWholeNumberCo2(this.vehicleCo2Number);
						this.validVehicleCo2Number = i;
						var s = "" == this.vehicleWeightNumber || this.validateWholeNumber(this.vehicleWeightNumber);
						this.validVehicleWeightNumber = s;
						var a = 1 != this.selectedRegistration.el_beregning && 1 != this.selectedSpecialChoice.el_beregning || this.validateOneDecimalNumber(this.electricWhNumber);
						this.validElecWhNumber = a;
						var r = 1 != this.selectedRegistration.hybrid_benzin_beregning && 1 != this.selectedSpecialChoice.hybrid_benzin_beregning || this.validateOneDecimalNumber(this.hybridBenzinWhNumber);
						this.validHyBenzWhNumber = r;
						var n = 1 != this.selectedRegistration.hybrid_benzin_beregning && 1 != this.selectedSpecialChoice.hybrid_benzin_beregning || this.validateOneDecimalNumber(this.hybridBenzinKmNumber);
						this.validHyBenzKmNumber = n;
						var l = 1 != this.selectedRegistration.hybrid_diesel_beregning && 1 != this.selectedSpecialChoice.hybrid_diesel_beregning || this.validateOneDecimalNumber(this.hybridDieselWhNumber);
						this.validHyDiesWhNumber = l;
						var o = 1 != this.selectedRegistration.hybrid_diesel_beregning && 1 != this.selectedSpecialChoice.hybrid_diesel_beregning || this.validateOneDecimalNumber(this.hybridDieselKmNumber);
						return this.validHyDiesKmNumber = o, e && t && i && s && a && r && n && l && o
					},
					hasDeadWeight: function(e) {
						return _.hasDeadWeight(e)
					},
					validateWholeNumber: function(e) {
						return _.validateWholeNumber(e)
					},
					validateWholeNumberCo2: function(e) {
						return _.validateWholeNumberCo2(e)
					},
					validateOneDecimalNumber: function(e) {
						return _.validateOneDecimalNumber(e)
					},
					isNumber: function(e) {
						if (0 === e.charCode || /[0-9.,]/.test(String.fromCharCode(e.charCode))) return !0;
						e.preventDefault()
					},
					calcElecKm: function(e) {
						var t = e.replace(/,/g, ".");
						return Math.round(100 / (t / 91.25) * 10) / 10
					},
					calcHybridBenzinKm: function(e, t) {
						var i = e.replace(/,/g, "."),
							s = t.replace(/,/g, ".");
						return Math.round(100 / (i / 91.25 + 100 / s) * 10) / 10
					},
					calcHybridDieselKm: function(e, t) {
						var i = e.replace(/,/g, "."),
							s = t.replace(/,/g, ".");
						return Math.round(100 / (i / 91.25 + 100 / s * 1.092) * 10) / 10
					},
					matchNumberToInterval: function(e, t) {
						return _.matchNumberToInterval(e, t)
					},
					matchSelectedDateToRegistationPeriod: function(e, t) {
						return _.matchSelectedDateToRegistationPeriod(e, t)
					},
					updateSelectedRegiDate: function(e) {
						this.selectedRegiDate = e
					},
					resetInputFields: function() {
						this.vehicleKmNumber = "", this.validVehicleKmNumber = !0, this.vehicleCo2Number = "", this.validVehicleCo2Number = !0, this.vehicleWeightNumber = "", this.validVehicleWeightNumber = !0, this.electricWhNumber = "", this.validElecWhNumber = !0, this.hybridBenzinWhNumber = "", this.hybridBenzinKmNumber = "", this.validHyBenzWhNumber = !0, this.validHyBenzKmNumber = !0, this.hybridDieselWhNumber = "", this.hybridDieselKmNumber = "", this.validHyDiesWhNumber = !0, this.validHyDiesKmNumber = !0
					}
				},
				watch: {
					fuelOptions: function() {
						this.selectedFuel = "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedFuel: function(e) {
						var t = this;
						this.isLoading = !0, this.hasError = !1;
						var i = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=".concat(e.id, "&clear=1") : "./websrv/jsong.ashx?id=".concat(e.id);
						this.selectedParticleFilter = "", this.selectedRegistration = "", this.selectedRegiDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.showSubmit = !1, Ae.get(i).then((function(i) {
							1 == e.partikelfilter_mulighed ? t.particleFilterOptions = i.data : t.registrationOptions = i.data
						})).catch((function() {
							t.hasError = !0
						})).finally((function() {
							t.isLoading = !1
						})), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedParticleFilter: function(e) {
						this.registrationOptions = e.children, this.selectedRegistration = "", this.selectedRegiDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.showSubmit = !1, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedRegiDate: function(e) {
						this.validDateInput = !0, this.selectedSpecialChoice = "", this.selectedNewOrOldTaxChoice = "", this.selectedInterval = "", this.showSubmit = !1, "" != e && (this.selectedRegistration = this.matchSelectedDateToRegistationPeriod(e, this.registrationOptions), 1 == this.selectedRegistration.valgfri ? this.specialChoiceOptions = this.selectedRegistration.children : 1 == this.selectedRegistration.valgfri_ny_eller_gammel_sats ? this.newOrOldTaxChoiceOptions = this.selectedRegistration.children : (this.resetInputFields(), "" != this.selectedRegistration && (this.intervalOptions = _.getBaseYear(this.selectedRegistration), this.showSubmit = !0))), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedSpecialChoice: function(e) {
						this.selectedNewOrOldTaxChoice = "", this.selectedInterval = "", this.resetInputFields(), "" != e && (1 == e.valgfri_ny_eller_gammel_sats ? this.newOrOldTaxChoiceOptions = e.children : (this.intervalOptions = _.getBaseYear(e), this.showSubmit = !0)), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedNewOrOldTaxChoice: function(e) {
						this.selectedInterval = "", this.resetInputFields(), "" != e && (this.intervalOptions = _.getBaseYear(e), this.showSubmit = !0), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vehicleKmNumber: function(e) {
						this.validVehicleKmNumber = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vehicleCo2Number: function(e) {
						this.validVehicleCo2Number = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vehicleWeightNumber: function(e) {
						this.validVehicleWeightNumber = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					electricWhNumber: function(e) {
						this.validElecWhNumber = !0;
						var t = this.calcElecKm(e),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					hybridBenzinWhNumber: function(e) {
						this.validHyBenzWhNumber = !0, this.hybridBenzinNumbers = [e, this.hybridBenzinKmNumber]
					},
					hybridBenzinKmNumber: function(e) {
						this.validHyBenzKmNumber = !0, this.hybridBenzinNumbers = [this.hybridBenzinWhNumber, e]
					},
					hybridBenzinNumbers: function(e) {
						var t = this.calcHybridBenzinKm(e[0], e[1]),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					hybridDieselWhNumber: function(e) {
						this.validHyDiesWhNumber = !0, this.hybridDieselNumbers = [e, this.hybridDieselKmNumber]
					},
					hybridDieselKmNumber: function(e) {
						this.validHyDiesKmNumber = !0, this.hybridDieselNumbers = [this.hybridDieselWhNumber, e]
					},
					hybridDieselNumbers: function(e) {
						var t = this.calcHybridDieselKm(e[0], e[1]),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || {}, this.submitTried = !1, this.$emit("submittedE", !1)
					}
				},
				components: {
					Modal: f,
					DatePickerSkat: Ve
				}
			},
			qe = Le,
			Ge = Object(p["a"])(qe, Se, Ke, !1, null, null, null),
			Je = Ge.exports,
			Xe = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("form", {
					class: {
						"was-validated": e.submitTried
					},
					attrs: {
						novalidate: ""
					},
					on: {
						submit: function(t) {
							return t.preventDefault(), e.submit.apply(null, arguments)
						}
					}
				}, [e.hasError ? i("div", [e._m(0)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(1)]) : i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "registrationDate"
					}
				}, [e._v(" FÃ¸rste registrering "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.registrationInfo.description
					},
					on: {
						click: function() {
							return e.showRegistrationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.registrationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("DatePickerSkat", {
					key: e.regiDateRenderKey,
					attrs: {
						id: "registrationDate",
						ariaLabel: "VÃ¦lg fÃ¸rste registreringsdato",
						validInput: e.validDateInput
					},
					on: {
						selectedRegiDate: e.updateSelectedRegiDate
					}
				}), e.validDateInput ? e._e() : i("div", {
					staticClass: "text-danger"
				}, [e._v("VÃ¦lg fÃ¸rste registreringsdato")])], 1)]), e.showRegistrationInfo ? i("Modal", {
					attrs: {
						title: e.registrationInfo.description
					},
					on: {
						close: function() {
							return e.showRegistrationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.registrationInfo.infotekst)
					}
				})])]) : e._e(), "" != e.selectedRegistrationDate ? i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "trailerWeightField"
					}
				}, ["Campingvogn" == e.vehicleData.description ? i("div", [e._v(" Indtast campingvognens egenvÃ¦gt i kg ")]) : "Trailer (PÃ¥hÃ¦ngskÃ¸retÃ¸j)" == e.vehicleData.description ? i("div", [e._v(" Indtast pÃ¥hÃ¦ngskÃ¸retÃ¸jets totalvÃ¦gt i kg ")]) : e._e()]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.trailerWeightNumber,
						expression: "trailerWeightNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validTrailerWeightNumber
					},
					attrs: {
						type: "text",
						id: "trailerWeightField",
						name: "trailerWeightField",
						placeholder: "Indtast vÃ¦gt",
						required: ""
					},
					domProps: {
						value: e.trailerWeightNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.trailerWeightNumber = t.target.value)
						}
					}
				}), e._m(2), i("div", {
					staticClass: "invalid-feedback"
				}, ["Campingvogn" == e.vehicleData.description ? i("div", [e._v(" Indtast campingvognens egenvÃ¦gt i kg som et heltal ")]) : "Trailer (PÃ¥hÃ¦ngskÃ¸retÃ¸j)" == e.vehicleData.description ? i("div", [e._v(" Indtast pÃ¥hÃ¦ngskÃ¸retÃ¸jets totalvÃ¦gt til og med 4000 kg som et heltal ")]) : e._e()])])])]), e._m(3)]) : e._e()], 1)])])])
			},
			Qe = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("kg")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "row mb-3"
				}, [i("div", {
					staticClass: "col-sm-12 text-right"
				}, [i("input", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "submit",
						id: "submit",
						value: "Beregn afgift"
					}
				})])])
			}],
			Ze = i("bc3a"),
			et = {
				name: "TrailerComponent",
				props: ["textData", "vehicleData"],
				emits: ["taxResultE", "availableYearsE", "optionalDeadWeightE", "selectedRegistrationDateE", "submittedE"],
				data: function() {
					return {
						showRegistrationInfo: !1,
						isLoading: !1,
						hasError: !1,
						vehicleChildrenData: "",
						intervalOptions: [],
						regiDateRenderKey: 0,
						selectedRegistrationDate: "",
						validDateInput: !0,
						trailerWeightNumber: "",
						validTrailerWeightNumber: !0,
						selectedInterval: "",
						submitTried: !1,
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: ""
					}
				},
				computed: {
					registrationInfo: function() {
						return this.textData.find((function(e) {
							return "global_registrering" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				methods: {
					submit: function(e) {
						this.taxResult = this.selectedInterval, this.availableYears = this.vehicleChildrenData, this.hasDeadWeight(this.taxResult) ? this.optionalDeadWeight = this.trailerWeightNumber : this.optionalDeadWeight = "";
						var t = this.validateInputFields();
						this.submitTried = !!t, e.currentTarget.checkValidity() && t && (this.$emit("taxResultE", this.taxResult), this.$emit("availableYearsE", this.availableYears), this.$emit("optionalDeadWeightE", this.optionalDeadWeight), this.$emit("selectedRegistrationDateE", this.selectedRegistrationDate), this.$emit("submittedE", !0))
					},
					validateInputFields: function() {
						var e = "" != this.selectedRegistrationDate;
						if (this.validDateInput = e, "Trailer (PÃ¥hÃ¦ngskÃ¸retÃ¸j)" == this.vehicleData.description) {
							var t = this.validTrailer();
							return this.validTrailerWeightNumber = t, t && e
						}
						if ("Campingvogn" == this.vehicleData.description) {
							var i = this.validCamping();
							return this.validTrailerWeightNumber = i, i && e
						}
					},
					validTrailer: function() {
						return "" == this.trailerWeightNumber || this.validateWholeNumber(this.trailerWeightNumber) && this.trailerWeightNumber <= 4e3
					},
					validCamping: function() {
						return "" == this.trailerWeightNumber || this.validateWholeNumber(this.trailerWeightNumber)
					},
					validateWholeNumber: function(e) {
						return _.validateWholeNumber(e)
					},
					hasDeadWeight: function(e) {
						return _.hasDeadWeight(e)
					},
					isNumber: function(e) {
						if (0 === e.charCode || /[0-9.,]/.test(String.fromCharCode(e.charCode))) return !0;
						e.preventDefault()
					},
					matchNumberToInterval: function(e, t) {
						return _.matchNumberToInterval(e, t)
					},
					updateSelectedRegiDate: function(e) {
						this.selectedRegistrationDate = e
					}
				},
				watch: {
					vehicleChildrenData: function(e) {
						this.selectedRegistrationDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.intervalOptions = _.getBaseYear({
							children: e
						}), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedRegistrationDate: function() {
						this.validDateInput = !0, this.trailerWeightNumber = "", this.selectedInterval = "", this.showSubmit = !1, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					trailerWeightNumber: function(e) {
						this.validTrailerWeightNumber = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || "", this.submitTried = !1, this.$emit("submittedE", !1)
					}
				},
				mounted: function() {
					var e = this;
					this.isLoading = !0, this.hasError = !1;
					var t = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=".concat(this.vehicleData.id, "&clear=1") : "./websrv/jsong.ashx?id=".concat(this.vehicleData.id);
					Ze.get(t).then((function(t) {
						e.vehicleChildrenData = t.data
					})).catch((function() {
						e.hasError = !0
					})).finally((function() {
						e.isLoading = !1
					}))
				},
				components: {
					DatePickerSkat: Ve,
					Modal: f
				}
			},
			tt = et,
			it = Object(p["a"])(tt, Xe, Qe, !1, null, null, null),
			st = it.exports,
			at = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("form", {
					class: {
						"was-validated": e.submitTried
					},
					attrs: {
						novalidate: ""
					},
					on: {
						submit: function(t) {
							return t.preventDefault(), e.submit.apply(null, arguments)
						}
					}
				}, [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "fuelType"
					}
				}, [e._v(" BrÃ¦ndstof ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedFuel,
						expression: "selectedFuel"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "fuelType",
						name: "fuelType",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedFuel = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg brÃ¦ndstof")]), e._l(e.fuelOptions.children, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]), "" != e.selectedFuel ? i("div", [e.hasError ? i("div", [e._m(0)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(1)]) : i("div", ["" != e.selectedFuel ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "registrationDate"
					}
				}, [e._v(" FÃ¸rste registrering "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.registrationInfo.description
					},
					on: {
						click: function() {
							return e.showRegistrationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.registrationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("DatePickerSkat", {
					key: e.regiDateRenderKey,
					attrs: {
						id: "registrationDate",
						ariaLabel: "VÃ¦lg fÃ¸rste registreringsdato",
						validInput: e.validDateInput
					},
					on: {
						selectedRegiDate: e.updateSelectedRegiDate
					}
				}), e.validDateInput ? e._e() : i("div", {
					staticClass: "text-danger"
				}, [e._v("VÃ¦lg fÃ¸rste registreringsdato")])], 1)]) : e._e(), e.showRegistrationInfo ? i("Modal", {
					attrs: {
						title: e.registrationInfo.description
					},
					on: {
						close: function() {
							return e.showRegistrationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.registrationInfo.infotekst)
					}
				})])]) : e._e()], 1)])]) : e._e(), e.showSubmit ? i("div", {
					staticClass: "row mb-3"
				}, [e._m(2)]) : e._e()])])
			},
			rt = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "col-sm-12 text-right"
				}, [i("input", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "submit",
						id: "submit",
						value: "Beregn afgift"
					}
				})])
			}],
			nt = i("bc3a"),
			lt = {
				name: "MotorcycleComponent",
				props: ["textData", "fuelOptions"],
				emits: ["taxResultE", "availableYearsE", "optionalDeadWeightE", "selectedRegistrationDateE", "submittedE"],
				data: function() {
					return {
						showRegistrationInfo: !1,
						isLoading: !1,
						hasError: !1,
						vehicleChildrenData: "",
						selectedFuel: "",
						selectedYears: [],
						intervalOptions: [],
						regiDateRenderKey: 0,
						selectedRegistrationDate: "",
						validDateInput: !0,
						selectedInterval: "",
						showSubmit: !1,
						submitTried: !1,
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: ""
					}
				},
				computed: {
					registrationInfo: function() {
						return this.textData.find((function(e) {
							return "global_registrering" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				methods: {
					submit: function(e) {
						this.taxResult = this.selectedInterval, this.availableYears = this.selectedYears;
						var t = this.validateInputFields();
						this.submitTried = !!t, e.currentTarget.checkValidity() && t && (this.$emit("taxResultE", this.taxResult), this.$emit("availableYearsE", this.availableYears), this.$emit("optionalDeadWeightE", ""), this.$emit("selectedRegistrationDateE", this.selectedRegistrationDate), this.$emit("submittedE", !0))
					},
					validateInputFields: function() {
						var e = "" != this.selectedRegistrationDate;
						return this.validDateInput = e, e
					},
					updateSelectedRegiDate: function(e) {
						this.selectedRegistrationDate = e
					}
				},
				watch: {
					fuelOptions: function() {
						this.selectedFuel = "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedFuel: function(e) {
						var t = this;
						this.isLoading = !0, this.hasError = !1;
						var i = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=".concat(e.id, "&clear=1") : "./websrv/jsong.ashx?id=".concat(e.id);
						this.selectedYears = [], this.validDateInput = !0, this.selectedRegistrationDate = "", this.regiDateRenderKey++, this.intervalOptions = [], this.showSubmit = !1, nt.get(i).then((function(e) {
							t.selectedYears = e.data, t.intervalOptions = _.getBaseYear({
								children: e.data
							})
						})).catch((function() {
							t.hasError = !0
						})).finally((function() {
							t.isLoading = !1, t.showSubmit = !0
						})), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedRegistrationDate: function(e) {
						if (this.validDateInput = !0, this.motorcycleWeightNumber = "", this.selectedInterval = "", "" != e) {
							var t = this.intervalOptions.children[0];
							this.selectedInterval = t || ""
						}
						this.submitTried = !1, this.$emit("submittedE", !1)
					}
				},
				components: {
					DatePickerSkat: Ve,
					Modal: f
				}
			},
			ot = lt,
			ct = Object(p["a"])(ot, at, rt, !1, null, null, null),
			dt = ct.exports,
			ut = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("form", {
					class: {
						"was-validated": e.submitTried
					},
					attrs: {
						novalidate: ""
					},
					on: {
						submit: function(t) {
							return t.preventDefault(), e.submit.apply(null, arguments)
						}
					}
				}, [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "fuelType"
					}
				}, [e._v(" BrÃ¦ndstof ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedFuel,
						expression: "selectedFuel"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "fuelType",
						name: "fuelType",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedFuel = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg brÃ¦ndstof")]), e._l(e.fuelOptions.children, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]), "" != e.selectedFuel ? i("div", [e.hasError ? i("div", [e._m(0)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(1)]) : i("div", ["" != e.selectedFuel ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "registrationDate"
					}
				}, [e._v(" FÃ¸rste registrering "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.registrationInfo.description
					},
					on: {
						click: function() {
							return e.showRegistrationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.registrationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("DatePickerSkat", {
					key: e.regiDateRenderKey,
					attrs: {
						id: "registrationDate",
						ariaLabel: "VÃ¦lg fÃ¸rste registreringsdato",
						validInput: e.validDateInput
					},
					on: {
						selectedRegiDate: e.updateSelectedRegiDate
					}
				}), e.validDateInput ? e._e() : i("div", {
					staticClass: "text-danger"
				}, [e._v("VÃ¦lg fÃ¸rste registreringsdato")])], 1)]) : e._e(), e.showRegistrationInfo ? i("Modal", {
					attrs: {
						title: e.registrationInfo.description
					},
					on: {
						close: function() {
							return e.showRegistrationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.registrationInfo.infotekst)
					}
				})])]) : e._e(), "" != e.selectedRegistrationDate ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "axles"
					}
				}, [e._v(" Antal aksler ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedAxles,
						expression: "selectedAxles"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "axles",
						name: "axles",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedAxles = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("Antal aksler")]), e._l(e.axleOptions, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]) : e._e()], 1)])]) : e._e(), "" != e.selectedAxles ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "busWeightField"
					}
				}, [e._v(" Indtast bussens egenvÃ¦gt i kg ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.busWeightNumber,
						expression: "busWeightNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validBusWeightNumber
					},
					attrs: {
						type: "text",
						id: "busWeightField",
						name: "busWeightField",
						placeholder: "Indtast vÃ¦gt",
						required: ""
					},
					domProps: {
						value: e.busWeightNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.busWeightNumber = t.target.value)
						}
					}
				}), e._m(2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast bussens egenvÃ¦gt i kg som et heltal ")])])])]) : e._e(), e.showSubmit ? i("div", {
					staticClass: "row mb-3"
				}, [e._m(3)]) : e._e()])])
			},
			ht = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("kg")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "col-sm-12 text-right"
				}, [i("input", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "submit",
						id: "submit",
						value: "Beregn afgift"
					}
				})])
			}],
			mt = i("bc3a"),
			pt = {
				name: "BusComponent",
				props: ["textData", "fuelOptions"],
				emits: ["taxResultE", "availableYearsE", "optionalDeadWeightE", "selectedRegistrationDateE", "submittedE"],
				data: function() {
					return {
						showRegistrationInfo: !1,
						isLoading: !1,
						hasError: !1,
						selectedFuel: "",
						regiDateRenderKey: 0,
						selectedRegistrationDate: "",
						validDateInput: !0,
						selectedAxles: "",
						axleOptions: [],
						busWeightNumber: "",
						validBusWeightNumber: !0,
						intervalOptions: [],
						selectedInterval: "",
						showSubmit: !1,
						submitTried: !1,
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: ""
					}
				},
				computed: {
					registrationInfo: function() {
						return this.textData.find((function(e) {
							return "global_registrering" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				methods: {
					submit: function(e) {
						this.taxResult = this.selectedInterval, this.availableYears = this.selectedAxles.children, this.hasDeadWeight(this.taxResult) ? this.optionalDeadWeight = this.busWeightNumber : this.optionalDeadWeight = "";
						var t = this.validateInputFields();
						this.submitTried = !!t, e.currentTarget.checkValidity() && t && (this.$emit("taxResultE", this.taxResult), this.$emit("availableYearsE", this.availableYears), this.$emit("optionalDeadWeightE", this.optionalDeadWeight), this.$emit("selectedRegistrationDateE", this.selectedRegistrationDate), this.$emit("submittedE", !0))
					},
					validateInputFields: function() {
						var e = "" != this.selectedRegistrationDate;
						this.validDateInput = e;
						var t = "" == this.busWeightNumber || this.validateWholeNumber(this.busWeightNumber);
						return this.validBusWeightNumber = t, t && e
					},
					hasDeadWeight: function(e) {
						return _.hasDeadWeight(e)
					},
					validateWholeNumber: function(e) {
						return _.validateWholeNumber(e)
					},
					isNumber: function(e) {
						if (0 === e.charCode || /[0-9.,]/.test(String.fromCharCode(e.charCode))) return !0;
						e.preventDefault()
					},
					matchNumberToInterval: function(e, t) {
						return _.matchNumberToInterval(e, t)
					},
					updateSelectedRegiDate: function(e) {
						this.selectedRegistrationDate = e
					}
				},
				watch: {
					fuelOptions: function() {
						this.selectedFuel = "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedFuel: function(e) {
						var t = this;
						this.isLoading = !0, this.hasError = !1;
						var i = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=".concat(e.id, "&clear=1") : "./websrv/jsong.ashx?id=".concat(e.id);
						this.selectedRegistrationDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.showSubmit = !1, mt.get(i).then((function(e) {
							t.axleOptions = e.data
						})).catch((function() {
							t.hasError = !0
						})).finally((function() {
							t.isLoading = !1
						})), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedRegistrationDate: function() {
						this.validDateInput = !0, this.selectedAxles = "", this.showSubmit = !1, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedAxles: function(e) {
						this.busWeightNumber = "", this.selectedInterval = "", "" != e && (this.intervalOptions = _.getBaseYear(e), this.showSubmit = !0), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					busWeightNumber: function(e) {
						this.validBusWeightNumber = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || "", this.submitTried = !1, this.$emit("submittedE", !1)
					}
				},
				components: {
					DatePickerSkat: Ve,
					Modal: f
				}
			},
			vt = pt,
			ft = Object(p["a"])(vt, ut, ht, !1, null, null, null),
			gt = ft.exports,
			bt = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", [i("form", {
					class: {
						"was-validated": e.submitTried
					},
					attrs: {
						novalidate: ""
					},
					on: {
						submit: function(t) {
							return t.preventDefault(), e.submit.apply(null, arguments)
						}
					}
				}, [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "fuelType"
					}
				}, [e._v(" BrÃ¦ndstof ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedFuel,
						expression: "selectedFuel"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "fuelType",
						name: "fuelType",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedFuel = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg brÃ¦ndstof")]), e._l(e.fuelOptions.children, (function(t) {
					return i("option", {
						key: t.id,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.description) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]), "" != e.selectedFuel ? i("div", [e.hasError ? i("div", [e._m(0)]) : i("div", [e.isLoading ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(1)]) : i("div", ["" != e.selectedFuel && 1 == e.selectedFuel.partikelfilter_mulighed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "particleFilter"
					}
				}, [e._v(" Har kÃ¸retÃ¸jet et partikelfilter? ")]), i("div", {
					staticClass: "col-sm-7"
				}, [e._l(e.particleFilterOptions, (function(t) {
					return i("div", {
						key: t.id
					}, [i("div", {
						staticClass: "custom-control custom-radio"
					}, [i("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.selectedParticleFilter,
							expression: "selectedParticleFilter"
						}],
						staticClass: "custom-control-input",
						attrs: {
							type: "radio",
							id: "pf" + t.description,
							name: "specialRadio"
						},
						domProps: {
							value: t,
							checked: e._q(e.selectedParticleFilter, t)
						},
						on: {
							change: function(i) {
								e.selectedParticleFilter = t
							}
						}
					}), i("label", {
						staticClass: "custom-control-label",
						attrs: {
							for: "pf" + t.description
						}
					}, [e._v(e._s(t.description))])])])
				})), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])], 2)]) : e._e(), "" != e.selectedFuel && 0 == e.selectedFuel.partikelfilter_mulighed || "" != e.selectedFuel && 1 == e.selectedFuel.partikelfilter_mulighed && "" != e.selectedParticleFilter ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "registrationDate"
					}
				}, [e._v(" FÃ¸rste registrering "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.globalRegistrationInfo.description
					},
					on: {
						click: function() {
							return e.showGlobalRegistrationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.globalRegistrationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("DatePickerSkat", {
					key: e.regiDateRenderKey,
					attrs: {
						id: "registrationDate",
						ariaLabel: "VÃ¦lg fÃ¸rste registreringsdato",
						validInput: e.validDateInput
					},
					on: {
						selectedRegiDate: e.updateSelectedRegiDate
					}
				}), e.validDateInput ? e._e() : i("div", {
					staticClass: "text-danger"
				}, [e._v("VÃ¦lg fÃ¸rste registreringsdato")])], 1)]) : e._e(), e.showGlobalRegistrationInfo ? i("Modal", {
					attrs: {
						title: e.globalRegistrationInfo.description
					},
					on: {
						close: function() {
							return e.showGlobalRegistrationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.globalRegistrationInfo.infotekst)
					}
				})])]) : e._e()], 1)])]) : e._e(), "" != e.selectedRegiDate && 1 == e.showApplicationChoice ? i("div", [e.hasError2 ? i("div", [e._m(2)]) : i("div", [e.isLoading2 ? i("div", {
					staticStyle: {
						height: "55px",
						"margin-bottom": "1rem"
					}
				}, [e._m(3)]) : i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vanApplication"
					}
				}, [e._v(" Anvendelse "), i("button", {
					staticClass: "help-icon",
					attrs: {
						type: "button",
						title: e.applicationInfo.description
					},
					on: {
						click: function() {
							return e.showApplicationInfo = !0
						}
					}
				}, [e._v(" ? "), i("span", {
					staticClass: "sr-only"
				}, [e._v(e._s(e.applicationInfo.description))])])]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedApplication,
						expression: "selectedApplication"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "vanApplication",
						name: "vanApplication",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedApplication = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg anvendelse")]), e._l(e.applicationOptions, (function(t) {
					return i("option", {
						key: t.text,
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t.text) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]), e.showApplicationInfo ? i("Modal", {
					attrs: {
						title: e.applicationInfo.description
					},
					on: {
						close: function() {
							return e.showApplicationInfo = !1
						}
					}
				}, [i("div", {
					staticClass: "col-12"
				}, [i("p", {
					staticClass: "text-left",
					domProps: {
						innerHTML: e._s(e.applicationInfo.infotekst)
					}
				})])]) : e._e()], 1)])]) : e._e(), "" != e.selectedApplication && 1 == e.privateUseTaxObj.benyt_totalvÃ¦ gt && e.selectedRegiDate >= e.privateUseSecondDifferentiatorDate ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vanDeadweight"
					}
				}, [e._v(" TotalvÃ¦gt pÃ¥ varebil ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.selectedDeadweight,
						expression: "selectedDeadweight"
					}],
					staticClass: "form-control custom-select",
					attrs: {
						id: "vanDeadweight",
						name: "vanDeadweight",
						required: ""
					},
					on: {
						change: function(t) {
							var i = Array.prototype.filter.call(t.target.options, (function(e) {
								return e.selected
							})).map((function(e) {
								var t = "_value" in e ? e._value : e.value;
								return t
							}));
							e.selectedDeadweight = t.target.multiple ? i : i[0]
						}
					}
				}, [i("option", {
					attrs: {
						value: "",
						disabled: ""
					}
				}, [e._v("VÃ¦lg")]), e._l(e.deadweightOptions, (function(t) {
					return i("option", {
						key: t.replace(" ", ""),
						domProps: {
							value: t
						}
					}, [e._v(" " + e._s(t) + " ")])
				}))], 2), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v("Feltet er pÃ¥krÃ¦vet.")])])]) : e._e(), "" != e.selectedRegistration && e.selectedRegiDate < e.privateUseFirstDifferentiatorDate || "" != e.selectedRegistration && e.selectedRegiDate >= e.privateUseFirstDifferentiatorDate && e.selectedRegiDate < e.privateUseSecondDifferentiatorDate && "" != e.selectedApplication || "" != e.selectedRegistration && e.selectedRegiDate >= e.privateUseSecondDifferentiatorDate && "" != e.selectedApplication && "" != e.selectedDeadweight ? i("div", [0 == e.selectedRegistration.el_beregning && 0 == e.selectedRegistration.hybrid_benzin_beregning && 0 == e.selectedRegistration.hybrid_diesel_beregning ? i("div", ["Km pr. liter" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vanKmField"
					}
				}, [e._v(" Indtast km pr. liter ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vanKmNumber,
						expression: "vanKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVanKmNumber
					},
					attrs: {
						type: "text",
						id: "vanKmField",
						name: "vanKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.vanKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vanKmNumber = t.target.value)
						}
					}
				}), e._m(4), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])]) : e._e(), "Gram CO2 udledt pr. km" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vanCo2Field"
					}
				}, [e._v(" Indtast gram CO2 udledt pr. km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vanCo2Number,
						expression: "vanCo2Number"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVanCo2Number
					},
					attrs: {
						type: "text",
						id: "vanCo2Field",
						name: "vanCo2Field",
						placeholder: "Indtast CO2 udledt pr. km",
						required: ""
					},
					domProps: {
						value: e.vanCo2Number
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vanCo2Number = t.target.value)
						}
					}
				}), e._m(5), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast gram CO2/km som et heltal ")])])])]) : e._e(), "KÃ¸retÃ¸jets egenvÃ¦gt i kg" == e.intervalOptions.enhed ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "vanWeightField"
					}
				}, [e._v(" Indtast kÃ¸retÃ¸jets totalvÃ¦gt i kg ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.vanWeightNumber,
						expression: "vanWeightNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validVanWeightNumber
					},
					attrs: {
						type: "text",
						id: "vanWeightField",
						name: "vanWeightField",
						placeholder: "Indtast vÃ¦gt",
						required: ""
					},
					domProps: {
						value: e.vanWeightNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.vanWeightNumber = t.target.value)
						}
					}
				}), e._m(6), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast kÃ¸retÃ¸jets totalvÃ¦gt i kg som et heltal under 4001 ")])])])]) : e._e()]) : e._e(), 1 == e.selectedRegistration.el_beregning ? i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "electricWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.electricWhNumber,
						expression: "electricWhNumber"
					}],
					staticClass: "form-control text-right",
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validElecWhNumber
					},
					attrs: {
						type: "text",
						id: "electricWhField",
						name: "electricWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.electricWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.electricWhNumber = t.target.value)
						}
					}
				}), e._m(7), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]) : e._e(), 1 == e.selectedRegistration.hybrid_benzin_beregning ? i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridBenzinWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridBenzinWhNumber,
						expression: "hybridBenzinWhNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyBenzWhNumber
					},
					attrs: {
						type: "text",
						id: "hybridBenzinWhField",
						name: "hybridBenzinWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.hybridBenzinWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridBenzinWhNumber = t.target.value)
						}
					}
				}), e._m(8), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]), i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridBenzinKmField"
					}
				}, [e._v(" Indtast km/l ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridBenzinKmNumber,
						expression: "hybridBenzinKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyBenzKmNumber
					},
					attrs: {
						type: "text",
						id: "hybridBenzinKmField",
						name: "hybridBenzinKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.hybridBenzinKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridBenzinKmNumber = t.target.value)
						}
					}
				}), e._m(9), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])])]) : e._e(), 1 == e.selectedRegistration.hybrid_diesel_beregning ? i("div", [i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridDieselWhField"
					}
				}, [e._v(" Indtast wh/km ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridDieselWhNumber,
						expression: "hybridDieselWhNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyDiesWhNumber
					},
					attrs: {
						type: "text",
						id: "hybridDieselWhField",
						name: "hybridDieselWhField",
						placeholder: "Indtast wh/km",
						required: ""
					},
					domProps: {
						value: e.hybridDieselWhNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridDieselWhNumber = t.target.value)
						}
					}
				}), e._m(10), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast wh/km som et heltal eller et decimaltal med max 1 decimal ")])])])]), i("div", {
					staticClass: "form-group row"
				}, [i("label", {
					staticClass: "col-form-label col-sm-5 text-left pr-0",
					attrs: {
						for: "hybridDieselKmField"
					}
				}, [e._v(" Indtast km/l ")]), i("div", {
					staticClass: "col-sm-7"
				}, [i("div", {
					staticClass: "input-group mb-3"
				}, [i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.hybridDieselKmNumber,
						expression: "hybridDieselKmNumber"
					}],
					class: {
						"form-control": !0, "text-right": !0, "is-invalid": !e.validHyDiesKmNumber
					},
					attrs: {
						type: "text",
						id: "hybridDieselKmField",
						name: "hybridDieselKmField",
						placeholder: "Indtast km/l",
						required: ""
					},
					domProps: {
						value: e.hybridDieselKmNumber
					},
					on: {
						keypress: function(t) {
							return e.isNumber(t)
						},
						input: function(t) {
							t.target.composing || (e.hybridDieselKmNumber = t.target.value)
						}
					}
				}), e._m(11), i("div", {
					staticClass: "invalid-feedback"
				}, [e._v(" Indtast km/l som et heltal eller et decimaltal med max 1 decimal ")])])])])]) : e._e()]) : e._e(), e.showSubmit ? i("div", {
					staticClass: "row mb-3"
				}, [e._m(12)]) : e._e()])])
			},
			_t = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "alert alert-danger alert--light mb-3"
				}, [i("h2", {
					staticClass: "alert__header"
				}, [e._v(" Fejl: Der opstod en fejl under indlÃ¦sningen af kÃ¸retÃ¸jsafgifter ")]), i("p", [e._v("PrÃ¸v at genindlÃ¦s siden.")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "d-flex justify-content-center"
				}, [i("div", {
					staticClass: "spinner spinner--dark text-center",
					attrs: {
						title: "Henter yderligere data om kÃ¸retÃ¸jer",
						"aria-label": "Henter yderligere data om kÃ¸retÃ¸jer"
					}
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("gram")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("kg")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("wh/km")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "input-group-append"
				}, [i("span", {
					staticClass: "input-group-text align-units"
				}, [e._v("km/l")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "col-sm-12 text-right"
				}, [i("input", {
					staticClass: "btn btn-primary",
					attrs: {
						type: "submit",
						id: "submit",
						value: "Beregn afgift"
					}
				})])
			}],
			xt = i("bc3a"),
			Ct = {
				name: "VanComponent",
				props: ["textData", "fuelOptions"],
				emits: ["taxResultE", "availableYearsE", "optionalDeadWeightE", "selectedRegistrationDateE", "submittedE"],
				data: function() {
					return {
						showGlobalRegistrationInfo: !1,
						showApplicationInfo: !1,
						isLoading: !1,
						hasError: !1,
						selectedFuel: "",
						selectedParticleFilter: "",
						particleFilterOptions: [],
						regiDateRenderKey: 0,
						selectedRegiDate: "",
						validDateInput: !0,
						selectedRegistration: "",
						registrationOptions: [],
						isLoading2: !1,
						hasError2: !1,
						privateUseFirstDifferentiatorDate: new Date(1998, 5, 3, 0, 0),
						privateUseSecondDifferentiatorDate: new Date(2009, 2, 18, 0, 0),
						privateUseThirdDifferentiatorDate: new Date(2007, 3, 25, 0, 0),
						privateUseTaxObj: "",
						privateUseTaxNum: "",
						showApplicationChoice: !1,
						selectedApplication: "",
						applicationOptions: [{
							text: "Privat",
							taxMultiplier: 1
						}, {
							text: "Privat/Erhverv",
							taxMultiplier: .5
						}, {
							text: "Erhverv",
							taxMultiplier: 0
						}],
						selectedDeadweight: "",
						deadweightOptions: ["0 - 2.000 kg", "2.001 - 2.500 kg", "2.501 - 3.000 kg", "3.001 - 4.000 kg"],
						intervalOptions: [],
						vanKmNumber: "",
						validVanKmNumber: !0,
						vanCo2Number: "",
						validVanCo2Number: !0,
						vanWeightNumber: "",
						validVanWeightNumber: !0,
						electricWhNumber: "",
						validElecWhNumber: !0,
						hybridBenzinWhNumber: "",
						validHyBenzWhNumber: !0,
						hybridBenzinKmNumber: "",
						validHyBenzKmNumber: !0,
						hybridBenzinNumbers: [],
						hybridDieselWhNumber: "",
						validHyDiesWhNumber: !0,
						hybridDieselKmNumber: "",
						validHyDiesKmNumber: !0,
						hybridDieselNumbers: [],
						selectedInterval: "",
						showSubmit: !1,
						submitTried: !1,
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: ""
					}
				},
				computed: {
					globalRegistrationInfo: function() {
						return this.textData.find((function(e) {
							return "global_registrering" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					},
					applicationInfo: function() {
						return this.textData.find((function(e) {
							return "anvendelse" === e.id
						})) || {
							description: "Fejl: Information ikke fundet",
							infoTekst: ""
						}
					}
				},
				methods: {
					submit: function(e) {
						this.taxResult = this.selectedInterval, "" != this.privateUseTaxNum && "" != this.taxResult && (this.taxResult.privatbenyttelsestillÃ¦ g = this.privateUseTaxNum), this.availableYears = this.selectedRegistration.children;
						var t = this.validateInputFields();
						this.submitTried = !!t, e.currentTarget.checkValidity() && t && (this.$emit("taxResultE", this.taxResult), this.$emit("availableYearsE", this.availableYears), this.$emit("optionalDeadWeightE", ""), this.$emit("selectedRegistrationDateE", this.selectedRegiDate), this.$emit("submittedE", !0))
					},
					validateInputFields: function() {
						var e = "" != this.selectedRegiDate;
						this.validDateInput = e;
						var t = "" == this.vanKmNumber || this.validateOneDecimalNumber(this.vanKmNumber);
						this.validVanKmNumber = t;
						var i = "" == this.vanCo2Number || this.validateWholeNumberCo2(this.vanCo2Number);
						this.validVanCo2Number = i;
						var s = "" == this.vanWeightNumber || this.validateWholeNumber(this.vanWeightNumber) && this.vanWeightNumber <= 4e3;
						this.validVanWeightNumber = s;
						var a = 1 != this.selectedRegistration.el_beregning || this.validateOneDecimalNumber(this.electricWhNumber);
						this.validElecWhNumber = a;
						var r = 1 != this.selectedRegistration.hybrid_benzin_beregning || this.validateOneDecimalNumber(this.hybridBenzinWhNumber);
						this.validHyBenzWhNumber = r;
						var n = 1 != this.selectedRegistration.hybrid_benzin_beregning || this.validateOneDecimalNumber(this.hybridBenzinKmNumber);
						this.validHyBenzKmNumber = n;
						var l = 1 != this.selectedRegistration.hybrid_diesel_beregning || this.validateOneDecimalNumber(this.hybridDieselWhNumber);
						this.validHyDiesWhNumber = l;
						var o = 1 != this.selectedRegistration.hybrid_diesel_beregning || this.validateOneDecimalNumber(this.hybridDieselKmNumber);
						return this.validHyDiesKmNumber = o, e && t && i && s && a && r && n && l && o
					},
					validateWholeNumber: function(e) {
						return _.validateWholeNumber(e)
					},
					validateWholeNumberCo2: function(e) {
						return _.validateWholeNumberCo2(e)
					},
					validateOneDecimalNumber: function(e) {
						return _.validateOneDecimalNumber(e)
					},
					isNumber: function(e) {
						if (0 === e.charCode || /[0-9.,]/.test(String.fromCharCode(e.charCode))) return !0;
						e.preventDefault()
					},
					calcElecKm: function(e) {
						var t = e.replace(/,/g, ".");
						return Math.round(100 / (t / 91.25) * 10) / 10
					},
					calcHybridBenzinKm: function(e, t) {
						var i = e.replace(/,/g, "."),
							s = t.replace(/,/g, ".");
						return Math.round(100 / (i / 91.25 + 100 / s) * 10) / 10
					},
					calcHybridDieselKm: function(e, t) {
						var i = e.replace(/,/g, "."),
							s = t.replace(/,/g, ".");
						return Math.round(100 / (i / 91.25 + 100 / s * 1.092) * 10) / 10
					},
					matchNumberToInterval: function(e, t) {
						return _.matchNumberToInterval(e, t)
					},
					matchSelectedDateToRegistationPeriod: function(e, t) {
						return _.matchSelectedDateToRegistationPeriod(e, t)
					},
					updateSelectedRegiDate: function(e) {
						this.selectedRegiDate = e
					},
					resetInputFields: function() {
						this.vanKmNumber = "", this.validVanKmNumber = !0, this.vanCo2Number = "", this.validVanCo2Number = !0, this.vanWeightNumber = "", this.validVanWeightNumber = !0, this.electricWhNumber = "", this.validElecWhNumber = !0, this.hybridBenzinWhNumber = "", this.hybridBenzinKmNumber = "", this.validHyBenzWhNumber = !0, this.validHyBenzKmNumber = !0, this.hybridDieselWhNumber = "", this.hybridDieselKmNumber = "", this.validHyDiesWhNumber = !0, this.validHyDiesKmNumber = !0
					}
				},
				watch: {
					fuelOptions: function() {
						this.selectedFuel = "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedFuel: function(e) {
						var t = this;
						this.isLoading = !0, this.hasError = !1;
						var i = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=".concat(e.id, "&clear=1") : "./websrv/jsong.ashx?id=".concat(e.id);
						this.selectedParticleFilter = "", this.selectedRegistration = "", this.selectedRegiDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.showSubmit = !1, xt.get(i).then((function(i) {
							1 == e.partikelfilter_mulighed ? t.particleFilterOptions = i.data : t.registrationOptions = i.data
						})).catch((function() {
							t.hasError = !0
						})).finally((function() {
							t.isLoading = !1
						})), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedParticleFilter: function(e) {
						this.registrationOptions = e.children, this.selectedRegistration = "", this.selectedRegiDate = "", this.regiDateRenderKey++, this.validDateInput = !0, this.showSubmit = !1, this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedRegiDate: function(e) {
						var t = this;
						if (this.validDateInput = !0, this.isLoading2 = !0, this.hasError2 = !1, this.showApplicationChoice = !1, this.selectedApplication = "", this.privateUseTaxObj = "", this.selectedInterval = "", this.showSubmit = !1, "" != e)
							if (this.selectedRegistration = this.matchSelectedDateToRegistationPeriod(e, this.registrationOptions), e < this.privateUseFirstDifferentiatorDate) this.resetInputFields(), this.intervalOptions = _.getBaseYear(this.selectedRegistration), this.showSubmit = !0;
							else {
								this.showApplicationChoice = !0;
								var i = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=152610&clear=1" : "./websrv/jsong.ashx?id=152610";
								xt.get(i).then((function(i) {
									t.privateUseTaxObj = t.matchSelectedDateToRegistationPeriod(e, i.data)
								})).catch((function() {
									t.hasError2 = !0
								})).finally((function() {
									t.isLoading2 = !1
								}))
							}
						this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedApplication: function(e) {
						this.selectedInterval = "", this.privateUseTaxNum = "", this.selectedDeadweight = "", 1 == this.privateUseTaxObj.benyt_totalvÃ¦ gt ? (this.showSubmit = !1, this.selectedRegiDate < this.privateUseSecondDifferentiatorDate && (this.resetInputFields(), "" != e && (this.intervalOptions = _.getBaseYear(this.selectedRegistration), this.showSubmit = !0))) : (this.resetInputFields(), "" != e && (this.privateUseTaxNum = this.privateUseTaxObj.pbt * e.taxMultiplier, this.intervalOptions = _.getBaseYear(this.selectedRegistration), this.showSubmit = !0)), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					selectedDeadweight: function(e) {
						this.selectedInterval = "", this.privateUseTaxNum = "", this.resetInputFields(), "" != e && (this.privateUseTaxNum = "0 - 2.000 kg" == e ? this.privateUseTaxObj.pbt_0_2000_kg * this.selectedApplication.taxMultiplier : "2.001 - 2.500 kg" == e ? this.privateUseTaxObj.pbt_2001_2500_kg * this.selectedApplication.taxMultiplier : "2.501 - 3.000 kg" == e ? this.privateUseTaxObj.pbt_2501_3000_kg * this.selectedApplication.taxMultiplier : this.privateUseTaxObj.pbt_3001_4000_kg * this.selectedApplication.taxMultiplier, this.intervalOptions = _.getBaseYear(this.selectedRegistration), this.showSubmit = !0), this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vanKmNumber: function(e) {
						this.validVanKmNumber = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vanCo2Number: function(e) {
						this.validVanCo2Number = !0;
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					vanWeightNumber: function(e) {
						this.validVanWeightNumber = !0, 1 == this.privateUseTaxObj.benyt_totalvÃ¦ gt && (this.privateUseTaxNum = e >= 0 && e <= 2e3 ? this.privateUseTaxObj.pbt_0_2000_kg * this.selectedApplication.taxMultiplier : e >= 2001 && e <= 2500 ? this.privateUseTaxObj.pbt_2001_2500_kg * this.selectedApplication.taxMultiplier : e >= 2501 && e <= 3e3 ? this.privateUseTaxObj.pbt_2501_3000_kg * this.selectedApplication.taxMultiplier : this.privateUseTaxObj.pbt_3001_4000_kg * this.selectedApplication.taxMultiplier);
						var t = this.matchNumberToInterval(e.replace(/,/g, "."), this.intervalOptions.children);
						this.selectedInterval = t || "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					electricWhNumber: function(e) {
						this.validElecWhNumber = !0;
						var t = this.calcElecKm(e),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					hybridBenzinWhNumber: function(e) {
						this.validHyBenzWhNumber = !0, this.hybridBenzinNumbers = [e, this.hybridBenzinKmNumber]
					},
					hybridBenzinKmNumber: function(e) {
						this.validHyBenzKmNumber = !0, this.hybridBenzinNumbers = [this.hybridBenzinWhNumber, e]
					},
					hybridBenzinNumbers: function(e) {
						var t = this.calcHybridBenzinKm(e[0], e[1]),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || "", this.submitTried = !1, this.$emit("submittedE", !1)
					},
					hybridDieselWhNumber: function(e) {
						this.validHyDiesWhNumber = !0, this.hybridDieselNumbers = [e, this.hybridDieselKmNumber]
					},
					hybridDieselKmNumber: function(e) {
						this.validHyDiesKmNumber = !0, this.hybridDieselNumbers = [this.hybridDieselWhNumber, e]
					},
					hybridDieselNumbers: function(e) {
						var t = this.calcHybridDieselKm(e[0], e[1]),
							i = this.matchNumberToInterval(t, this.intervalOptions.children);
						this.selectedInterval = i || "", this.submitTried = !1, this.$emit("submittedE", !1)
					}
				},
				components: {
					DatePickerSkat: Ve,
					Modal: f
				}
			},
			yt = Ct,
			Dt = Object(p["a"])(yt, bt, _t, !1, null, null, null),
			Tt = Dt.exports,
			kt = i("bc3a"),
			wt = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=4431307&max=1&clear=1" : "./websrv/jsong.ashx?id=4431307&max=1",
			Nt = document.location.href.includes("clear=1") ? "./websrv/jsong.ashx?id=152164&clear=1" : "./websrv/jsong.ashx?id=152164",
			It = {
				name: "TaxCalculator",
				data: function() {
					return {
						jsonData: [],
						textData: [],
						autocamperOption: {},
						isLoading: !1,
						hasError: !1,
						renderKey: 0,
						vehicleType: "",
						submitted: !1,
						taxResult: {},
						availableYears: [],
						optionalDeadWeight: "",
						optionalSelectedRegistrationDate: ""
					}
				},
				methods: {
					updateTaxResult: function(e) {
						this.taxResult = e
					},
					updateAvailableYears: function(e) {
						this.availableYears = e
					},
					updateOptionalDeadWeight: function(e) {
						this.optionalDeadWeight = e
					},
					updateOptionalSelectedRegistrationDate: function(e) {
						this.optionalSelectedRegistrationDate = e
					},
					updatesubmitted: function(e) {
						this.submitted = e
					},
					scrollToResult: function() {
						var e = document.getElementById("resultElement");
						if (void 0 != e) {
							var t = e.getBoundingClientRect(),
								i = .75 * (window.pageXOffset + t.left),
								s = .75 * (window.pageYOffset + t.top),
								a = "scrollBehavior" in document.documentElement.style;
							a ? window.scrollTo({
								top: s,
								left: i,
								behavior: "smooth"
							}) : window.scrollTo(i, s)
						} else setTimeout(this.scrollToResult, 50)
					}
				},
				watch: {
					vehicleType: function() {
						this.renderKey++, this.submitted = !1
					},
					submitted: function(e) {
						e && this.scrollToResult()
					}
				},
				mounted: function() {
					var e = this;
					this.isLoading = !0, this.hasError = !1;
					var t = kt.get(wt),
						i = kt.get(Nt);
					kt.all([t, i]).then(kt.spread((function() {
						for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
						e.jsonData = i[0].data, e.textData = i[1].data;
						var a = Object.assign({}, e.jsonData.find((function(e) {
							return "Personbil" == e.description
						})));
						a.description = "Autocamper", e.autocamperOption = a
					}))).catch((function() {
						e.hasError = !0
					})).finally((function() {
						e.isLoading = !1
					}))
				},
				components: {
					Result: Be,
					VehicleComponent: Je,
					TrailerComponent: st,
					MotorcycleComponent: dt,
					BusComponent: gt,
					VanComponent: Tt
				}
			},
			jt = It,
			Rt = Object(p["a"])(jt, n, l, !1, null, null, null),
			Ot = Rt.exports,
			Wt = {
				name: "motor_afgift_beregner",
				components: {
					TaxCalculator: Ot
				}
			},
			Et = Wt,
			Ft = Object(p["a"])(Et, a, r, !1, null, null, null),
			Bt = Ft.exports;
		s["a"].config.productionTip = !1, new s["a"]({
			render: function(e) {
				return e(Bt)
			}
		}).$mount("#motor_afgift_beregner")
	},
	6036: function(e, t, i) {
		"use strict";
		i("6746")
	},
	6746: function(e, t, i) {},
	"6e3e": function(e, t, i) {
		"use strict";
		i("055b")
	},
	fd57: function(e, t, i) {}
});
//# sourceMappingURL=app.js.map