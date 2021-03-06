Meteor.publish('allPressFeed', function () {
  let shopId = ReactionCore.getShopId();
  let masterPress = ['admin',
                     'owner',
                     'pressFeed',
                     'dashboard/PressFeed'
                     ]
  if (Roles.userIsInRole(this.userId, masterPress, ReactionCore.getShopId())) {
    return ReactionCore.Collections.PressFeed.find({
      shopId: shopId
    });
  }
  return this.ready();
});

Meteor.publish('activePressFeed', function () {
  let shopId = ReactionCore.getShopId();
  return ReactionCore.Collections.PressFeed.find({
    shopId: shopId,
    visible: true
  });
  return this.ready();
});
