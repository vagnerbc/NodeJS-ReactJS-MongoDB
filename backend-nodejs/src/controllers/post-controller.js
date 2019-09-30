const repository = require("../repositories/post-repository");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const posts = await repository.find(page);
    return res.json(posts);
  },

  async show(req, res) {
    const post = await repository.findById(req.params.id);

    if (!post) {
      res.status(404).send("The post with the given ID was not found!");
    }

    return res.json(post);
  },

  async store(req, res) {
    const post = await repository.create(req.body);
    return res.json(post);
  },

  async update(req, res) {
    const post = await repository.findByIdAndUpdate(req.params.id, req.body);
    return res.json(post);
  },

  async destroy(req, res) {
    await repository.findByIdAndDelete(req.params.id, req.body);
    return res.send();
  }
};
