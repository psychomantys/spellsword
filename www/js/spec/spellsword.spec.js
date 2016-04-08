"use strict";

require.config({
	"baseUrl": "www",
	"paths": {
		'Spellsword': 'js/spellsword/spellsword',
		'jquery': 'thirdparty/jquery',
		'Handlebars': 'thirdparty/handlebars',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'bootstrap-combobox': 'thirdparty/bootstrap-combobox/js/bootstrap-combobox',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Matter': 'thirdparty/matter.min',
		'Mousetrap': 'thirdparty/mousetrap',
		'Backbone': 'thirdparty/backbone'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'Matter': {
			exports: 'Matter'
		},
		'Mousetrap': {
			exports: 'Mousetrap'
		},
		'Handlebars': {
			exports: 'Handlebars'
		},
		'Backbone': {
			exports: 'Backbone',
			deps: ['jquery','underscore']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'bootstrap-combobox': {
			deps: ['jquery','bootstrap']
		}
	}
});


describe("A false case", function() {
	it("canot be true", function() {
		expect(true).not.toBe(false);
	});
});

define(["jquery"],
function ($) {

describe("Um teste de teste", function() {
	it("canot be true", function() {
		expect(true).not.toBe(false);
	});
});

});

