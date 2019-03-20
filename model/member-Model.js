var db = require('./db');

module.exports={



    get: function(userId, callback){
		var sql = "select * from member where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getname: function(userId, callback){
		var sql = "select  * from restaurent where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getcomment: function(userId, callback){
		var sql = "select * from comment where resid=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getAll: function(callback){
		var sql = "select * from member";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getmember: function(userId,callback){
		var sql = "select * from member where id=?";
		db.getResult(sql, [userId.a], function(results){
			callback(results);
		});
	},

	getAllres: function(callback){
		var sql = "select * from restaurent";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},


	update: function(admin, callback){
		var sql = "update member set username=?,email=?,password=? where id=?";
		db.execute(sql, [admin.username,admin.email,admin.password,admin.id], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from member where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	 insert: function(member, callback){
		var sql = "insert into member values (null,?,?,?)";
		db.execute(sql, [member.username,member.email, member.password], function(status){
			callback(status);
		});
	},
	insertcomment: function(member, callback){
		var sql = "insert into comment values (null,?,?,?)";
		db.execute(sql, [member.name,member.comment, member.resid], function(status){
			callback(status);
		});
	},

	
	validate: function(admin, callback){
		var sql = "select id,username,password from member where username=? and password=?";

		db.getResult(sql, [admin.username, admin.password], function(result){
			callback(result);
		});
	}
}

	