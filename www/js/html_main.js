"use strict";

require.config({
	"baseUrl": ".",
	"paths": {
		'Spellsword': 'js/spellsword/spellsword',
		'jquery': 'thirdparty/jquery',
		'Handlebars': 'thirdparty/handlebars',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'bootstrap-combobox': 'thirdparty/bootstrap-combobox/js/bootstrap-combobox',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Matter': 'thirdparty/matter.min',
		'Backbone': 'thirdparty/backbone'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'Matter': {
			exports: 'Matter'
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


require(['jquery', 'Spellsword'],
function($, Spellsword ) {
	$( document ).ready( function(){
		var spellsword = new Spellsword( $(".main-view")[0] );
		spellsword.run();
	});
});

