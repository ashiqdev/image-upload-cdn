const Mutations = {
  async createChampion(parent, args, ctx, info) {
    return ctx.db.mutation.createChampion({
      data: {
        ...args
      }
    }, info);
  }
};

module.exports = Mutations;
