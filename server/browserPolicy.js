Meteor.startup(function () {
  BrowserPolicy.content.allowEval();
  BrowserPolicy.content.allowImageOrigin("*");
});
