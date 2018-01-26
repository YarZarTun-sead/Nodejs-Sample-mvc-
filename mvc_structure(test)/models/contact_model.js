//Common-parts-of-all-models
model = require('./db_model');
var contact_model = function(){ };
contact_model.prototype.constructor = contact_model;
contact_model.prototype = model;


//Fetch all contacts
contact_model.prototype.BindAllData = function(data,callback) {
	sql = "SELECT * FROM tbl_contact";
	
	this.execute(sql,callback);
};

//Fetch a particular contact
contact_model.prototype.SelectDataByID = function(data,callback) {
	sql = "SELECT * FROM tbl_contact WHERE C_ID = " + data.C_ID;
	this.execute(sql,callback);
};

//Insert a new contact
contact_model.prototype.SaveData = function(data,callback) {
	//sql = "INSERT INTO tbl_contact(C_ID,C_Name,C_Phone) VALUES ('','" + data.C_Name + "','" + data.C_Phone + "')";	
	sql = "INSERT INTO tbl_contact(C_Name,C_Phone) VALUES ('" + data.C_Name + "','" + data.C_Phone + "')";		console.log(sql);
	this.execute(sql,callback);
};

//Update a contact detail
contact_model.prototype.UpdateData = function(data,callback) {
	sql = "UPDATE  tbl_contact SET C_Name = '" + data.C_Name + "',C_Phone='" + data.C_Phone + "' WHERE C_ID='" + data.C_ID + "'  ";	
	this.execute(sql,callback);
};

//Delete a contact
contact_model.prototype.DeleteData = function(data,callback) {
	sql = "DELETE FROM  tbl_contact WHERE C_ID=" + data.C_ID;	
	this.execute(sql,callback);
};

module.exports = new contact_model();