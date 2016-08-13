/**
 * @author: @AngularClass
 */

exports.config = {
  baseUrl: 'http://localhost:3000/',

  directConnect: true,

  specs: ['e2e/*e2e-spec.js','src/**/*e2e-spec.js'],
  exclude: [],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    showTiming: true,
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    // jasmine.getEnv().addReporter(new Reporter( browser.params )) ;
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true
};
