"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var homepage_1 = require("../pages/homepage");
var protractor_1 = require("protractor");
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);
var homePage = new homepage_1.HomePage();
// supports/timeout.js
var setDefaultTimeout = require("cucumber").setDefaultTimeout;
var title;
var input;
var button;
setDefaultTimeout(60 * 1000);
cucumber_1.Given(/^I Navigate to google.com$/, function () {
    protractor_1.browser.get("https://www.google.com/");
});
cucumber_1.When(/^I enter something in the search bar$/, function () {
    input = protractor_1.element(protractor_1.by.xpath("//input[@title = 'Search']"));
    input.sendKeys('HELLO').then(function () {
        console.log('Value' + input.value);
        expect(input.value).to.equal('HELLO');
    });
    button = protractor_1.element(protractor_1.by.xpath("//input[@aria-label='Google Search']"));
    button.click();
});
