const Query = {
  async champion(parent, args, ctx, info) {
    return ctx.db.query.champion({  id: args.id  }, info);
  }
};

module.exports = Query;
