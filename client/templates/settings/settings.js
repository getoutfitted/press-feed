Template.pressFeedSettings.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: 'press-feed',
      shopId: ReactionCore.getShopId()
    });
  }
});

AutoForm.hooks({
  'press-feed-update-form': {
    onSuccess: function (operation, result, template) {
      Alerts.removeSeen();
      return Alerts.add('Press Feeds settings saved.', 'success', {
        autoHide: true
      });
    },
    onError: function (operation, error, template) {
      Alerts.removeSeen();
      return Alerts.add('Press Feed settings update failed. ' + error, 'danger');
    }
  }
});
