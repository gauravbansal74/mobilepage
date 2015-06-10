var express = require('express');
var router = express.Router();
var fs = require('fs');
var outputFilename= "views/users.html";

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("body name",req.query);
	if(typeof req.query.name == 'undefined'){
		res.render('users', { title: 'Express' });
	}else{
		console.log("i am inside the if");
		var myData = {
		  name: req.query.name,
		  userstring:req.query.userstring
		}
	fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
	    if(err) {
	    	//console.log(err);
	      res.send("error");
	      //console.log(err);
	    } else {
	      res.send("done");
	      //console.log("JSON saved to " + outputFilename);
	    }
	});
}
	
  
});

module.exports = router;
