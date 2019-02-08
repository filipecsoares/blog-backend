const Category = require('../models/Category');

module.exports = {
    async index(req, res){
        const categories = await Category.find({}).sort('-createdAt');
        return res.json(categories);
    },
    async store(req, res){
        const category = await Category.create(req.body);
        
        return res.json(category);
    },
    async delete(req, res){
        await Category.findByIdAndDelete(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        });
    }
};