var db = require('./db');

module.exports={



    get: function(userId, callback){
		var sql = "select * from admin where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getAll: function(callback){
		var sql = "select * from admin";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	update: function(admin, callback){
		var sql = "update admin set username=?,email=?,password=? where id=?";
		db.execute(sql, [admin.username,admin.email,admin.password,admin.id], function(status){
			callback(status);
		});
	},
	

	 insert: function(admin, callback){
		var sql = "insert into admin values (null,?,?,?)";
		db.execute(sql, [admin.username,admin.email, admin.password], function(status){
			callback(status);
		});
	},

	
	validate: function(admin, callback){
		var sql = "select username,password from admin where username=? and password=?";

		db.getResult(sql, [admin.username, admin.password], function(result){
			callback(result);
		});
	}
}

	