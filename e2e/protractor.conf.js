// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const jsonReports = process.cwd() + "/reports/json";

exports.config = {
  allScriptsTimeout: 60000,
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,
  specs: [
    // './src/**/*.e2e-spec.ts',
    './src/features/*.feature',
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://forums.att.com/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    defaultTimeoutInterval: 60000,
    // format: ['pretty'],
    // format: 'json:./reports/json/cucumber_report.json',
    require: ['./src/steps/*.js'],
    tags: '@smoke or @functionality'
  },
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 30000,
  //   print: function() {}
  // },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    browser.ignoreSynchronization = true;


    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};