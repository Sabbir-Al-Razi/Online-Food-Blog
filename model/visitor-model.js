var db = require('./db');

module.exports={



    

	getAllres: function(callback){
		var sql = "select * from restaurent";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	}


}

	