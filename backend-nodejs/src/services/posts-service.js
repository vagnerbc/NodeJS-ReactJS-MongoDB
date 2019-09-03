const mongoose = require('mongoose')

const Post = mongoose.model('Post');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const posts = await Post.paginate({}, { page, limit: 10 });
        return res.json(posts);
    },

    async show(req, res) {
        const post = await Post.findById(req.params.id);

        if (!post) {
            res.status(404).send('The post with the given ID was not found!');
        }

        return res.json(post);
    },

    async store(req, res) {
        const post = await Post.create(req.body);
        return res.json(post);
    }, 

    async update(req, res) {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(post);
    },

    async destroy(req, res) {
        await Post.findByIdAndDelete(req.params.id, req.body);
        return res.send();
    }
};