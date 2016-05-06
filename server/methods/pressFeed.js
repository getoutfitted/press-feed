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
  },
  'pressFeed/changeVisibility': function (_id, currentVisibility) {
    check(_id, String);
    check(currentVisibility, Boolean);
    const visiblility = !currentVisibility;
    ReactionCore.Collections.PressFeed.update({
      _id: _id
    }, {
      $set: {
        visible: visiblility
      }
    })
  },
  'pressFeed/removePressFeed': function (_id) {
    check(_id, String);
    ReactionCore.Collections.PressFeed.remove({
      _id: _id,
      shopId: ReactionCore.getShopId()
    });
  }
});
