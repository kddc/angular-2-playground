module.exports = config => {
  const options = {
    frameworks: ['jasmine'],

    files: ['karma.entry.js'],

    preprocessors: {
      'karma.entry.js': ['webpack']
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'dots'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browsers: ['Chrome']
  };

  config.set(options);
};
