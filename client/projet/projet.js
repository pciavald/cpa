Template.projet.rendered = function () {

	var noUiSlider = require('nouislider');

	var type = document.getElementById('type');
	noUiSlider.create(type, {
		start: 10,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var contact = document.getElementById('contact');
	noUiSlider.create(contact, {
		start: 70,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var group = document.getElementById('group');
	noUiSlider.create(group, {
		start: 80,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var inside = document.getElementById('inside');
	noUiSlider.create(inside, {
		start: 50,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var time = document.getElementById('time');
	noUiSlider.create(time, {
		start: 80,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var horaires = document.getElementById('horaires');
	noUiSlider.create(horaires, {
		start: 30,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
	var group = document.getElementById('group');
	noUiSlider.create(group, {
		start: 80,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		}
	});
}
