const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    tags: [String],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    comments: [
        {
            content: String,
            createdAt: {
                type: Date,
                default: Date.now,
            }, 
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
});

module.exports = mongoose.model('Post', PostSchema);