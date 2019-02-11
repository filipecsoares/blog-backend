const User = require('../models/User');

module.exports = {
    async findAll(req, res){
        const users = await User.find({}).sort('-createdAt');
        return res.json(users);
    },
    async create(req, res){
        const user = await User.create(req.body);
        
        return res.json(user);
    },
    async delete(req, res){
        await User.findByIdAndDelete(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        });
    }
};