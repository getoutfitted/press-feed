Template.pressFeedDashboard.events({
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
  }
});
