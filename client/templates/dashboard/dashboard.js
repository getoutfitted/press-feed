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
    debugger;
  }
});
