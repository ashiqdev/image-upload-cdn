const Mutations = {
  async createImage(parent, args, ctx, info) {
    return ctx.db.mutation.createImage({
      data: {
        ...args
      }
    }, info);
  }
};

module.exports = Mutations;
