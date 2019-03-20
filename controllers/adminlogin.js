var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var router = express.Router();




router.get('/', (req, res)=>{
	res.render('login/adminlogin');
});

router.post('/', (req, res)=>{
	
	var admin ={
		username : req.body.username,
		password : req.body.password
	};
	
	adminModel.validate(admin, function(result){
		if(result.length > 0){
			req.session.name = req.body.username;
			req.session.uid = result[0].id;
			res.redirect('/adminhome');
		}else{
			res.render("login/adminlogin");
		}
	});
});

module.exports = router;