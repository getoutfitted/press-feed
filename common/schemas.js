ReactionCore.Schemas.PressFeed = new SimpleSchema({
  headline: {
    type: String,
    label: 'Article Title'
  },
  blurb: {
    type: String,
    label: 'A short discription of the press release. Maximum 144 characters',
    max: 144
  },
  logoUrl: {
    type: String,
    label: 'URL for Article Branding',
    regEx: SimpleSchema.RegEx.Url
  },
  articleUrl: {
    type: String,
    label: "URL to full Press Coverage",
    regEx: SimpleSchema.RegEx.Url
  },
  position: {
    type: Number,
    label: 'The Position in which an article is displayed',
    unique: true,
    min: 1
  },
  visible: {
    type: Boolean,
    label: 'Display this Article?',
    defaultValue: false
  }
});

ReactionCore.Schemas.PressFeedPackageConfig = new SimpleSchema([
  ReactionCore.Schemas.PackageConfig, {
    'settings.grayScaleImages': {
      type: Boolean,
      label: 'Display Images in GrayScale',
      optional: true
    }
  }
]);
