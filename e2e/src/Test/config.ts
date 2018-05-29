
const { SpecReporter } = require('jasmine-spec-reporter');

// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'https://forums.att.com/',
    seleniumAddress: 'http://localhost:4444/wd/hub',

  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./features/*.feature'],
  
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        // format: ['pretty'],
        // format: 'json:./reports/json/cucumber_report.json',
        require: ['./steps/*.js'],
        tags: '@smoke'
    },
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
      });
      jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
  };