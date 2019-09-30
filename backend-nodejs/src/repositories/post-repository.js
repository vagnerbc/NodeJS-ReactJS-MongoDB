const mongoose = require("mongoose");

const post = mongoose.model("Post");

module.exports = {
  async find(page) {
    return await post.paginate({}, { page, limit: 10 });
  },

  async findById(id) {
    return await post.findById(id);
  },

  async create(post) {
    return await post.create(post);
  },

  async findByIdAndUpdate(id, post) {
    return await findByIdAndUpdate(id, post, {
      new: true
    });
  },

  async remove(id, post) {
    return await post.findByIdAndDelete(id, post);
  }
};
