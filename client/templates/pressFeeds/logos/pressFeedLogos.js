Template.pressFeedLogos.onCreated(function () {
  this.subscribe('activePressFeed');
});

Template.pressFeedLogos.helpers({
  pressFeed: function () {
    return ReactionCore.Collections.PressFeed.find({
      shopId: ReactionCore.getShopId(),
      visible: true
    }, {
      sort: { position: 1 }
    });
  },
  grayEnabled: function () {
    const pressFeedPackage = ReactionCore.Collections.Packages.findOne({
      name: 'press-feed',
      shopId: ReactionCore.getShopId()
    }, {fields: {
      'settings.public.grayScaleImages': 1
    }});
    if (pressFeedPackage && pressFeedPackage.settings.public.grayScaleImages) {
      return 'grayScale'
    }
    return '';
  }
});
