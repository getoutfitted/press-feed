Template.pressFeedFull.onCreated(function () {
  this.subscribe('activePressFeed');
});

Template.pressFeedFull.helpers({
  pressFeed: function () {
    return ReactionCore.Collections.PressFeed.find({
      shopId: ReactionCore.getShopId(),
      visible: true
    }, {
      sort: { position: 1 }
    });
  }
});
