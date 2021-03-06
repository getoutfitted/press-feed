Template.pressFeedDashboard.onCreated(function () {
  this.subscribe('allPressFeed');
});

Template.pressFeedDashboard.helpers({
  anyPressFeeds: function () {
    return ReactionCore.Collections.PressFeed.find().count() > 0;
  }
});

Template.createPressFeed.events({
  'submit .addPressFeed': function (event) {
    event.preventDefault();
    const feedDetails = {
      headline: event.target.headline.value,
      blurb: event.target.blurb.value,
      logoUrl: event.target.logoUrl.value,
      articleUrl: event.target.articleUrl.value,
      position: parseInt(event.target.position.value, 10),
      visible: event.target.visible.checked
    }
    if (event.target.blurb.value.length <= 144 ){
      Meteor.call('pressFeed/addArticle', feedDetails);
      event.target.headline.value = '';
      event.target.blurb.value = '';
      event.target.logoUrl.value = '';
      event.target.articleUrl.value = '';
      event.target.position.value = '';
      event.target.visible.checked = false;
      Alerts.removeSeen();
      Alerts.add(`${feedDetails.headline} was added to your press feed.`, 'success', {
              autoHide: true
      });
    } else {
      Alerts.add(`${feedDetails.blurb} is above 144 Character Count`, 'danger', {
              autoHide: true
      });
    }
  }
});

Template.allPressFeeds.helpers({
  allPressFeeds: function () {
    return ReactionCore.Collections.PressFeed.find({}, {
      sort: {position: 1}
    });
  },
  active: function () {
    return this.visible ? 'checked' : '';
  }
});

Template.allPressFeeds.events({
  'change .activatePressFeed': function (event) {
    Meteor.call('pressFeed/changeVisibility', this._id, this.visible)
  },
  'click .deletePressFeed': function (event) {
    event.preventDefault();
    Meteor.call('pressFeed/removePressFeed', this._id);
  },
  'change .positionChange': function (event) {
    const newPosition = parseInt(event.target.value, 10);
    const positionAvailable = ReactionCore.Collections.PressFeed.find({
      position: newPosition
    }).count() === 0;
    if (positionAvailable) {
      Meteor.call('pressFeed/updatePosition', this._id, newPosition);
      Alerts.removeSeen();
      Alerts.add(`Position updated`, 'success', {autoHide: true});
    } else {
      Alerts.removeSeen();
      Alerts.add(`Position ${newPosition} is already in use.`, 'danger', {autoHide: true});
    }
  }
});
