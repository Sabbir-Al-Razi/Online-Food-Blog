var express = require('express');
/*var exSession 		= require('express-session');*/
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var restaurentModel = require.main.require('./model/restaurent-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var admin = {
			username: req.session.username
		};
		res.render('userhome/index', admin);
});	

router.get('/restaurentinfo', (req, res)=>{
	
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

	restaurentModel.get(req.params.id, function(result){
	if(result.length >0 ){
          var x= result[0].name;
          /*console.log(x);*/

	memberModel.getcomment( req.params.id,function(result){
		if(result.length >0 ){
			var comment={
				name: x,
				uList:result
			};
			res.render('userhome/comment', comment);
		}else{
			res.redirect('/memberhome/restaurentinfo');
		}
	});
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
			res.redirect('/memberhome/comment/'+req.params.id);
		}else{
			//res.redirect("/memberlogin/comment/"+req.parms.id);

			res.send(admin);
		}
	});
		}
		else{
			res.send("name not found");
		}
	});

	
});


router.get('/membermenu/:id', (req, res)=>{
	restaurentModel.get(req.params.id, function(result){
	if(result.length >0 ){
          var x= result[0].name;
          console.log(x);
	restaurentModel.getmenu(req.params.id, function(result){
		if(result.length >0 ){
			var admin = {
				name: x,
				uList: result
			};
			res.render('userhome/menu', admin);
		}else{
			res.redirect('/memberhome/restaurentinfo');
		}
	});
    }
	});
});	


router.get('/memberinfo', (req, res)=>{
	
	var x={ 

		a : req.session.userid,
		b : req.session.name

	};/*
	console.log(x);*/
	memberModel.getmember(x,function(results){
		if(results.length > 0){
			
			var admin = {
				username: req.session.username,
				uList: results

				/*if(username==results[0].username)*/
			};
			
			res.render('userhome/memberinfo', admin);
		}
		else
			res.send("There is an error");
	});	
});

router.get('/edit/:id', (req, res)=>{

	memberModel.get( req.params.id,function(result){
		if(result.length >0 ){
			res.render('userhome/editmemberinfo', result[0]);
		}else{
			res.redirect('/memberhome');
		}
	});
});	

router.post('/edit/:id', (req, res)=>{
	
	var admin ={
		id: req.params.id,
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
	};
	
	memberModel.update(admin, function(success){
		if(success){
			res.redirect('/memberhome/memberinfo');
		}else{
			res.redirect("/memberhome/edit/"+req.parms.id);
		}
	});
});

module.exports = router;