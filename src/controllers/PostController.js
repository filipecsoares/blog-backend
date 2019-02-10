const Post = require('../models/Post');

module.exports = {
    async index(req, res){
        const posts = await Post.find({}).populate('user').populate('categories').sort('-createdAt');
        return res.json(posts);
    },
    async store(req, res){
        const post = await Post.create(req.body);
        return res.json(post);
    },
    async delete(req, res){
        await Post.findByIdAndDelete(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        });
    }
};