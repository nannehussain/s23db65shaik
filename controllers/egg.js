var egg = require('../models/egg');
// List of all eggs
exports.egg_list = function(req, res) {
res.send('NOT IMPLEMENTED: egg list');
};
// for a specific egg.
exports.egg_detail = function(req, res) {
res.send('NOT IMPLEMENTED: egg detail: ' + req.params.id);
};
// Handle egg create on POST.
exports.egg_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: egg create POST');
};
// Handle egg delete form on DELETE.
exports.egg_delete = function(req, res) {
res.send('NOT IMPLEMENTED: egg delete DELETE ' + req.params.id);
};
// Handle egg update form on PUT.
exports.egg_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: egg update PUT' + req.params.id);
};
// List of all eggs
exports.egg_list = async function(req, res) {
    try{
    theegg = await egg.find();
    res.send(theegg);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.egg_view_all_Page = async function(req, res) {
try{
theegg = await egg.find();
res.render('egg', { title: 'egg Search Results', results: theegg });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle egg create on POST.
exports.egg_create_post = async function(req, res) {
    console.log(req.body)
    let document = new egg();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"egg_type":"goat", "cost":12, "size":"large"}
    document.egg_color = req.body.egg_color;
    document.egg_type = req.body.egg_type;
    document.egg_price = req.body.egg_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };