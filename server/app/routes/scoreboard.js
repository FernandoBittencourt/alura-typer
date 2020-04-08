 module.exports = function(app) {

	var api = app.api.scoreboard;

	app.route('/scoreboard/')
		.get(api.list);

    app.route('/scoreboard/')
        .post(api.insert);
};
