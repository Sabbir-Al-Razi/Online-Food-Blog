var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var restaurentModel = require.main.require('./model/restaurent-model');
var visitorModel = require.main.require('./model/visitor-model');
var router = express.Router();


/*router.get('/', (req, res)=>{
		var admin = {
			username: req.session.username
		};
		res.render('visitor/index', admin);
});	
*/
router.get('/', (req, res)=>{
	
	visitorModel.getAllres(function(results){
		if(results.length > 0){
			
			var admin = {
				name: req.session.name,
				uList: results
			};
			res.render('visitor/index', admin);
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
			res.render('visitor/comment', comment);
		}else{
			res.redirect('/');
		}
	});
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
			res.render('visitor/menu', admin);
		}else{
			res.redirect('/');
		}
	});
    }
	});
});	

module.exports = router;