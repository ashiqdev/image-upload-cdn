const Query = {
  async getImage(parent, args, ctx, info) {
    return ctx.db.query.image(
      {
        where: {
          id: args.id
        }
      },
      info
    );
  },

  async getImages(parent, args, ctx, info) {
    return ctx.db.query.images({}, info);
  }
};

module.exports = Query;
