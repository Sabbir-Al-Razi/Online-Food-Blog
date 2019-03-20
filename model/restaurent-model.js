var db = require('./db');

module.exports={



    get: function(userId, callback){
		var sql = "select * from restaurent where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getcomment: function(userId, callback){
		var sql = "select * from comment where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	
    
	getmenu: function(userId, callback){
		var sql = "select item,price from menu where resid=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getAll: function(callback){
		var sql = "select * from restaurent";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	getAllcomment: function(callback){
		var sql = "select * from comment";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	delete: function(userId, callback){
		var sql = "delete from restaurent where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	deletecomment: function(userId, callback){
		var sql = "delete from comment where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	insert: function(restaurent, callback){
		var sql = "insert into restaurent values (null,?,?,?)";
		db.execute(sql, [restaurent.name,restaurent.location,restaurent.background], function(status){
			callback(status);
		});
	},
	insertcomment: function(restaurent, callback){
		var sql = "insert into comment values (null,?,?,?)";
		db.execute(sql, [restaurent.name,restaurent.comment,restaurent.resid], function(status){
			callback(status);
		});
	},

	insertmenu: function(menu, callback){
		var sql = "insert into menu values (null,?,?,?)";
		db.execute(sql, [menu.item,menu.price,menu.resid], function(status){
			callback(status);
		});
	},


	update: function(restaurent, callback){
		var sql = "update restaurent set name=?,location=?,background=? where id=?";
		db.execute(sql, [restaurent.name,restaurent.location,restaurent.background,restaurent.id], function(status){
			callback(status);
		});
	}

	
}

	