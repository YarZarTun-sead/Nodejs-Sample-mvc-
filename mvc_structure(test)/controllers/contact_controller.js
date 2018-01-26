//Contact controller
function contact(){
	data 	= {};
	tomodel = {};
	model 	= require('../models/contact_model');
};
contact.prototype.constructor = contact;

//Function to list all contacts
contact.prototype.BindAllData =  function(req, res) {
	data.title = 'My Contacts';
	model.BindAllData(tomodel,function(err,rows){
		data.rows = rows;
	  	res.render('../views/all',data);
	});
}

//Function to show the add new form
contact.prototype.New =  function(req, res) {
	data.title = 'Add New Contats';
	res.render('../views/new',data);
}

//Function to insert a new contact
contact.prototype.SaveData =  function(req, res) {
	
	tomodel.C_Name = req.body.txtName;
	tomodel.C_Phone = req.body.txtPhone;
	model.SaveData(tomodel,function(err,rows){
	  	res.redirect('/');
	});

}

//Function to edit contact
contact.prototype.Edit =  function(req, res) {
	
	data.title = 'Edit Contats';
	tomodel.C_ID = req.params.id;
	model.SelectDataByID(tomodel,function(err,rows){
	  		data.rows = rows;
	  		res.render('../views/edit',data);
	});

}

//Function to save the editted contact
contact.prototype.UpdateData =  function(req, res) {
	
	tomodel.C_Name = req.body.txtName;
	tomodel.C_Phone = req.body.txtPhone;
	tomodel.C_ID = req.body.hdID;
	model.UpdateData(tomodel,function(err,rows){
	  	res.redirect('/');
	});

}

//Function to delete contact
contact.prototype.DeleteData =  function(req, res) {	
	tomodel.C_ID = req.params.id;
	model.DeleteData(tomodel,function(err,rows){
	  	res.redirect('/');
	});

}

module.exports = new contact();