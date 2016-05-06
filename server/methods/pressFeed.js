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
    console.log('pressfeed', pressFeed)
    let pressFeedWithStoreId = pressFeed;
    pressFeedWithStoreId.shopId = ReactionCore.getShopId();
    console.log('final', pressFeedWithStoreId)
    ReactionCore.Collections.PressFeed.insert(pressFeedWithStoreId);
  }
});
