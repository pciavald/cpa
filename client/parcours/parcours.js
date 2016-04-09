Template.parcours.helpers({
	home: function(home) {
		if (!Session.get("parcours-tab"))
			Session.set("parcours-tab", home);
	},
	parcours_tab: function () {
		return (Session.get("parcours-tab"));
	}
});

Template.parcours.events({
	"click .donnees":	function () {Session.set("parcours-tab", "donnees");},
	"click .cv1":		function () {Session.set("parcours-tab", "cv1");	},
	"click .motiv1":	function () {Session.set("parcours-tab", "motiv1");	},
	"click .cv2":		function () {Session.set("parcours-tab", "cv2");	}
});
