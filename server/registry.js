ReactionCore.registerPackage({
  label: 'Press Feed',
  name: 'press-feed',
  icon: 'fa fa-fa-rss',
  autoEnable: false,
  settings: {
    public: {
      grayScaleImages: true
    }
  },
    registry: [{
    route: '/dashboard/press-feed',
    provides: 'dashboard',
    name: 'pressFeedDashboard',
    label: 'Press Feed',
    description: 'List the relevent press feeds for your company',
    container: 'getoutfitted',
    icon: 'fa fa-rss',
    template: 'pressFeedDashboard',
    workflow: 'coreWorkflow',
    priority: 3
  }, {
    route: '/dashboard/pressFeed/settings',
    provides: 'settings',
    label: 'Press Feed Settings',
    name: 'Press Feed Settings',
    template: 'pressFeedSettings'
  }]
});
