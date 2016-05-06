Package.describe({
  summary: 'Press Feed',
  name: 'getoutfitted:press-feed',
  version: '0.1.0',
  git: 'https://github.com/getoutfitted/press-feed'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3.2');
  api.use('meteor-platform');
  api.use('less');
  api.use('http');
  api.use('base64');
  api.use('underscore');
  api.use('standard-minifiers');
  api.use('reactioncommerce:core');
  api.use('reactioncommerce:reaction-router');
  api.use('reactioncommerce:reaction-collections');
  api.use('momentjs:moment@2.10.6');

  api.addFiles([
    'server/registry.js',
    'server/browserPolicy.js',
    'server/publications/pressFeed.js',
    'server/methods/pressFeed.js'
  ], 'server');

  api.addFiles([
    'common/schemas.js',
    'common/collections.js'
  ]);

  api.addFiles([
    'client/templates/dashboard/dashboard.html',
    'client/templates/dashboard/dashboard.js',
    'client/templates/settings/settings.html',
    'client/templates/settings/settings.js',
    'client/templates/pressFeeds/detailed/pressFeedDetails.html',
    'client/templates/pressFeeds/detailed/pressFeedDetails.js',
    'client/templates/pressFeeds/detailed/pressFeedDetails.css',
    'client/templates/pressFeeds/logos/pressFeedLogos.html',
    'client/templates/pressFeeds/logos/pressFeedLogos.js',
    'client/templates/pressFeeds/logos/pressFeedLogos.css'
  ], 'client');

});
