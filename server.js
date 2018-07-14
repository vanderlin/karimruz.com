var path 		= require('path');
var express 	= require('express');
var app 		= express();
var port 		= process.env.PORT || 5000
var secure 		= require('express-force-https');

// if we are in production then we force https
if (process.env.NODE_ENV == 'production') {
	app.use(secure);
}

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


// kick off the server
app.listen(port, () => {
	console.log(`Server hosted at http://localhost:${port}`);
})
