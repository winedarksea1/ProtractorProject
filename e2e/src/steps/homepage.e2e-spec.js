"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var homepage_1 = require("../pages/homepage");
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
setDefaultTimeout(60 * 1000);
cucumber_1.Given(/^I nagivate to the application$/, function () {
    homePage.getHomePage();
});
cucumber_1.When(/^I land on the home page$/, function () {
    var title;
    homePage.getTitle()
        .then(function (data) {
        title = data;
        expect(title).to.equal('AT&T Community Forums');
        console.log("TITLE: " + data);
    })["catch"](function (err) {
        console.log("The error was " + err);
    });
    input = homePage.getSearchInput();
    input.sendKeys('asdfasdfasdflkjal;kejf;alskdfj');
});
cucumber_1.Then(/^I expect homePage title to be correct$/, function () {
    // console.log(input.getSearchInput());
    console.log(input.value);
});
cucumber_1.When(/^I click the explore button$/, function () {
    // browser.wait(EC.visibilityOf(homePage.getExploreBtn()));
    console.log('Are we here');
    var header = homePage.getHeader();
    header.getText()
        .then(function (text) {
        console.log('TEXT!!!' + text);
    })["catch"](function (err) {
        console.log('error: ' + err);
    });
});
// Then(/^the title should be AT&T Community Forums$/, () => {
//     // title = homePage.getTitle();
//     console.log('Title: ' + title);
//     // expect(homePage.getTitle()).to.eventually.equal('AT&T Community Forums');
// });
// When(/^I get the header$/, () => {
//     header.getText()
//     .then(text => {
//         console.log(text);
//         // expect(text.to.be.equal('AT&T Forums'));
//     })
//     .catch(err => {
//         console.log(`The error was ${err}`);
//     });
//     let header = homePage.getHeader();
//     header.getText()
//     .then(text => {
//         console.log('Text ' + text);
//         expect(text).to.equal('AT&T Forums');
//     });
//     let header = element(by.xpath("//div[@id = 'notification-wrapper']/div[2]/div[3]/a"));
//     browser.manage().timeouts().pageLoadTimeout(30000);
//     homePage.clickExploreBtn();
//     browser.wait(EC.visibilityOf(homePage.getHeader()));
//     let header = homePage.getHeader();
//     header.getText()
//     .then(text => {
//         console.log('TEXT!!!' + text);
//     })
//     .catch(err => {
//         console.log('error: ' + err);
//     });
//     browser.wait(EC.visibilityOf(homePage.getExploreBtn()));
//     homePage.clickExploreBtn();
// });
