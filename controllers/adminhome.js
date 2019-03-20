var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var restaurentModel = require.main.require('./model/restaurent-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var admin = {
			username: req.session.username
		};
		res.render('adminhome/index', admin);
});	

router.get('/admininfo', (req, res)=>{
	
	adminModel.getAll(function(results){
		if(results.length > 0){
			
			var admin = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/admininfo', admin);
		}
		else
			res.send("There is an error");
	});	
});
router.get('/memberlist', (req, res)=>{
	
	memberModel.getAll(function(results){
		if(results.length > 0){
			
			var member = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/memberlist', member);
		}
		else
			res.send("There is an error");
	});	
});

router.get('/edit/:id', (req, res)=>{

	adminModel.get( req.params.id,function(result){
		if(result.length >0 ){
			res.render('adminhome/editadmininfo', result[0]);
		}else{
			res.redirect('/adminhome');
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
	
	adminModel.update(admin, function(success){
		if(success){
			res.redirect('/adminhome/admininfo');
		}else{
			res.redirect("/adminhome/edit/"+req.parms.id);
		}
	});
});



router.get('/delete/:id', (req, res)=>{

	memberModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('adminhome/removemember', result[0]);
		}else{
			res.redirect('/adminhome/memberlist');
		}
	});
});	

router.post('/delete/:id', (req, res)=>{
	
	memberModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/memberlist');
		}else{
			res.redirect("/adminhome/delete/"+req.params.id);
		}
	});
});

router.get('/restaurentinfo', (req, res)=>{
	
	restaurentModel.getAll(function(results){
		if(results.length > 0){
			
			var restaurent = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/restaurentsinfo', restaurent);
		}
		else
			res.send("Threr is an error");
	});	
});


router.get('/editrestaurent/:id', (req, res)=>{

	restaurentModel.get( req.params.id,function(result){
		if(result.length >0 ){
			res.render('adminhome/editrestaurent', result[0]);
		}else{
			res.redirect('/adminhome');
		}
	});
});	

router.post('/editrestaurent/:id', (req, res)=>{
	
	var restaurent ={
		id: req.params.id,
		name : req.body.name,
		location : req.body.location,
		background : req.body.background
	};
	
	restaurentModel.update(restaurent, function(success){
		if(success){
			res.redirect('/adminhome/restaurentinfo');
		}else{
			res.redirect("/adminhome/editrestaurent/"+req.parms.id);
		}
	});
});

router.get('/deleterestaurent/:id', (req, res)=>{

	restaurentModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('adminhome/deleterestaurent', result[0]);
		}else{
			res.redirect('/adminhome/restaurentinfo');
		}
	});
});	

router.post('/deleterestaurent/:id', (req, res)=>{
	restaurentModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/restaurentinfo');
		}else{
			res.redirect("/adminhome/deleterestaurent/"+req.params.id);
		}
	});
});

router.get('/addrestaurent', (req, res)=>{
	res.render('adminhome/addrestaurent');
});	

router.post('/addrestaurent', (req, res)=>{
	
	var restaurent ={
		id: req.params.id,
		name : req.body.name,
		location : req.body.location,
		background : req.body.background
	};

	
	restaurentModel.insert(restaurent, function(success){
			if(success){
			res.redirect('/adminhome/restaurentinfo');
		}else{
			res.render("adminhome/addrestaurent");
		}
	});
});

router.get('/addmenu/:id', (req, res)=>{
	res.render('adminhome/addmenu');
});	

router.post('/addmenu/:id', (req, res)=>{
	
	var menu ={
		resid: req.params.id,
		item : req.body.item,
		price : req.body.price
		/*background : req.body.background*/
	};

	
	restaurentModel.insertmenu(menu, function(success){
			if(success){
			res.redirect('/adminhome/restaurentinfo');
		}else{
			res.render("adminhome/addmenu");
		}
	});
});


router.get('/menu/:id', (req, res)=>{
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
			res.render('adminhome/menu', admin);
		}else{
			res.redirect('/adminhome/restaurentinfo');
		}
	});
    }
	});
});	


router.get('/foodexperience', (req, res)=>{
	
	restaurentModel.getAllcomment(function(results){
		if(results.length > 0){
			
			var comment = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/foodexperience', comment);
		}
		else
			res.send("Threr is an error");
	});	
});
router.post('/foodexperience', (req, res)=>{
	
	var comment ={
		resid: req.body.resid,
		name : req.body.name,
		comment : req.body.comment
		/*background : req.body.background*/
	};

	
	restaurentModel.insertcomment(comment, function(success){
			if(success){
			res.redirect('/adminhome/foodexperience');
		}else{
			res.render("adminhome/foodexperience");
		}
	});
});

router.get('/deletecomment/:id', (req, res)=>{

	restaurentModel.getcomment(req.params.id, function(result){
		if(result.length >0 ){
			res.render('adminhome/deletecomment', result[0]);
		}else{
			res.redirect('/adminhome/foodexperience');
		}
	});
});	

router.post('/deletecomment/:id', (req, res)=>{

	/*var menu ={
		id: req.params.id,
		item : req.body.item,
		price : req.body.price
		background : req.body.background
	};*/
	restaurentModel.deletecomment(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/foodexperience');
		}else{
			res.redirect("/adminhome/deletecomment/"+req.params.id);
		}
	});
});

module.exports = router;