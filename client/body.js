Template.body.helpers({
	home: function(home) {
		if (!Session.get("tab"))
			Session.set("tab", home);
	},
	tab: function () {
		return (Session.get("tab"));
	}
});

Template.body.events({
	"click .projet-tab":	function () {Session.set("tab", "projet");		},
	"click .parcours-tab":	function () {Session.set("tab", "parcours");	},
	"click .prop-tab":		function () {Session.set("tab", "prop");		}
});

var uid = "123456789012346";

function cpa(type) {
	var address = "https://cpa.api.gouv.fr/api"
	var request = address + "/cpa/" + uid + "/" + type;
	console.log(request);
	Meteor.http.get(request, function (error, result) {
		if (error)
			console.log(error);
		Session.set(type, JSON.parse(result.content));
	});
}

/*
uid; qlf; reg; dep; rome; cat; sex; age
AKCAKBAPDC;8;82;69;D1406;A;2;20
AKCAKCAQBE;5;91;11;G1803;A;2;10
AKCAKCAQZG;5;11;93;D1505;A;2;10
AKCAKDARXI;5;22;80;D1214;A;2;10
*/

function pe() {
	var person = [{
		uid: "AKCAKBAPDC",
		qlf: "8",
		region: "82",
		departement: "69",
		rome: "D1406",
		category: "A",
		sex: "2",
		age: "20"
	}, {
		uid: "AKCAKBAPDC",
		qlf: "5",
		region: "91",
		departement: "11",
		rome: "G1803",
		category: "A",
		sex: "2",
		age: "20"
	}, {
		uid: "AKCAKBAPDC",
		qlf: "5",
		region: "11",
		departement: "93",
		rome: "D1505",
		category: "A",
		sex: "2",
		age: "20"
	}, {
		uid: "AKCAKBAPDC",
		qlf: "5",
		region: "22",
		departement: "80",
		rome: "D1214",
		category: "A",
		sex: "2",
		age: "20"
	}];
	console.log(person);
	Session.set("pe", person);
}

Template.body.rendered = function () {
	cpa("chomage");
	cpa("retraite");
	cpa("formation");
	cpa("penibilite");
	pe();
}

Template.body.helpers({
	session: function (key) {
		return (Session.get(key));
	}
});
