var api = {};

var phrases = [
	{_id: 0, text:"Alura, Online technology courses that reinvent your career.", time: 15 },
	{_id: 1, text:"Debuggers don't fix errors, they just display them in slow motion.",time: 8 },
	{_id: 2, text:"Caelum, Teaching and Innovation.", time: 5 },
	{_id: 3, text:"There are two difficult tasks in Computer Science: invalidating the cache and naming things.", time: 15 },
	{_id: 4, text:"Computer science is as much about computers as astronomy is about telescopes.", time: 15 },
	{_id: 5, text:"On my machine it works.", time: 5 },
	{_id: 6, text:"Hardware is what you kick, software is what you curse.", time: 12 },
	{_id: 7, text:"Software in operation more than comprehensive documentation.", time: 10 },
	{_id: 8, text:"Iterating is human, recursion is divine.", time: 7},
	{_id: 9, text:"There are three ways to develop software. The right way, the wrong way and my way, which is like the wrong way just faster.", time: 20},

	];

api.list = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(phrases[req.query.id]);

		res.json(phrases);
	},1500);

};

module.exports = api;
