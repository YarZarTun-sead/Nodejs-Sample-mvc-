module.exports = function(app){

	//Controllers
	var contactcontroller = require('../controllers/contact_controller');

	//Routes
	app.get('/', contactcontroller.BindAllData);
	app.get('/new', contactcontroller.New);
	app.post('/save', contactcontroller.SaveData);
	app.get('/edit/:id', contactcontroller.Edit);
	app.post('/update', contactcontroller.UpdateData);
	app.get('/delete/:id', contactcontroller.DeleteData);

}
	