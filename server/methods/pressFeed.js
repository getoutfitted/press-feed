Meteor.methods({
  'pressFeed/addArticle': function (pressFeed) {
    check(pressFeed, {
      headline: String,
      blurb: String,
      logoUrl: String,
      articleUrl: String,
      position: Number,
      visible: Boolean
    });
    let pressFeedWithStoreId = pressFeed;
    pressFeedWithStoreId.shopId = ReactionCore.getShopId();
    ReactionCore.Collections.PressFeed.insert(pressFeedWithStoreId);
  }
});
