Template.donnees.helpers({
	session: function (key) {
		console.log(Session.get(key));
		return (Session.get(key));
	}
});
