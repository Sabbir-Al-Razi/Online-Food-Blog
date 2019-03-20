var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var user = {
			name: req.session.name
		};
		res.render('home/index', user);
});	

/*router.get('/visitor', (req, res)=>{
		var user = {
			name: req.session.name
		};
		res.render('visitor/index', user);
});	*/

router.get('/adminregister', (req, res)=>{
	res.render('home/adminregister');
});

router.post('/adminregister', (req, res)=>{
	
	var admin={
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
		
		};
   if(!admin.username || !admin.email|| !admin.password){
   	
	res.render('home/adminregister');

}
else{
	
	adminModel.insert(admin, function(success){
			if(success){
			res.redirect('/adminlogin');
		}else{
			res.render("home/adminregister");
		}
	});
}
});

router.get('/memberregister', (req, res)=>{
	res.render('home/memberregister');
});

router.post('/memberregister', (req, res)=>{
	
	var member={
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
		
		};

	if(!member.username || !member.email|| !member.password){
   	
	res.render('home/memberregister');
}else{

	memberModel.insert(member, function(success){
			if(success){
			res.redirect('/');
		}else{
			res.render("home/memberregister");
		}
	});
}
});


module.exports = router;