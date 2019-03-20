var express = require('express');
/*var exSession 		= require('express-session');*/
var memberModel = require.main.require('./model/member-model');
var router = express.Router();




/*router.get('/', (req, res)=>{
	
	memberModel.getAllres(function(results){
		if(results.length > 0){
			
			var admin = {
				name: req.session.name,
				uList: results
			};
			res.render('userhome/restaurentinfo', admin);
		}
		else
			res.send("There is an error");
	});	
});


router.get('/comment/:id', (req, res)=>{

	memberModel.getcomment( req.params.id,function(result){
		if(result.length >0 ){
			var comment={
				uList:result
			};
			res.render('userhome/comment', comment);
		}else{
			res.redirect('/memberlogin');
		}
	});
});	

router.post('/comment/:id', (req, res)=>{
	
	memberModel.getname( req.params.id,function(result){
		if(result.length >0 ){
			var x= result[0].name;

	  var admin ={
		resid: req.params.id,
		name : x,
		comment : req.body.comment
		
	};
	
	memberModel.insertcomment(admin, function(success){
		if(success){
			res.redirect('/memberlogin');
		}else{
			//res.redirect("/memberlogin/comment/"+req.parms.id);

			res.send(admin);
		}
	});
		}
		else
			res.send("name not found");
	});

	
});*/
router.get('/', (req, res)=>{
	res.render('login/memberlogin');
});
router.post('/', (req, res)=>{
	
	var member ={
		username : req.body.username,
		password : req.body.password
	};
	
	memberModel.validate(member, function(result){
		if(result.length > 0){
			req.session.name = req.body.username;
			req.session.userid = result[0].id;
			/*console.log(req.session.userid);*/
			res.redirect('/memberhome');
		}else{
			res.render("login/memberlogin");
		}
	});
});

module.exports = router;