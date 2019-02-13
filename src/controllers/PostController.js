const Post = require('../models/Post');

module.exports = {
    async findAll(req, res){
        const posts = await Post.find({}).populate('user').populate('categories').sort('-createdAt');
        return res.json(posts);
    },
    async findById(req, res){
        const post = await Post.findById(req.params.id).populate('user').populate('categories');
        return res.json(post);
    },
    async create(req, res){
        const post = await Post.create(req.body);
        return res.json(post);
    },
    async delete(req, res){
        await Post.findByIdAndDelete(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        });
    },
    async update(req, res){
        await Post.findByIdAndUpdate(req.params.id, req.body, function (err) {
            if (err) return next(err);
            res.send('Updated successfully!');
        });
    }
};