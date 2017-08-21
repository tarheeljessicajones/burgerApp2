var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var db = require("./models");

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(express.static('public-assets/images'));
app.use(express.static('public-assets/css'));

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
	defaultLayout: 'main'
}));
app.set('view engine','handlebars');

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);
app.use("/update", routes);
app.use("/create", routes);

var port = 3000;
db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log('Running at localhost:'+ port);
	});
});
console.log(module.exports);

