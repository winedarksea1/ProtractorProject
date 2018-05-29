import { Given, When, Then, before } from 'cucumber';
import { HomePage } from '../pages/homepage';
import { when } from 'q';
import { element, by, browser } from 'protractor';
const protractor = require('protractor');
const EC = protractor.ExpectedConditions;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

let homePage = new HomePage();
// supports/timeout.js
const { setDefaultTimeout } = require("cucumber");
let title;
let input;


setDefaultTimeout(60 * 1000);

Given(/^I nagivate to the application$/, () => {
    homePage.getHomePage();
});

When(/^I land on the home page$/, () => {
    let title;
     homePage.getTitle()
    .then(data => {
        title = data;
        expect(title).to.equal('AT&T Community Forums');
        console.log(`TITLE: ${data}`);    
    })
    .catch(err => {
        console.log(`The error was ${err}`);
    });

    input = homePage.getSearchInput();
    input.sendKeys('asdfasdfasdflkjal;kejf;alskdfj');

});

Then(/^I expect homePage title to be correct$/, () => {
    // console.log(input.getSearchInput());
    console.log(input.value);

});


When(/^I click the explore button$/, () => {
    // browser.wait(EC.visibilityOf(homePage.getExploreBtn()));

    console.log('Are we here');
    let header = homePage.getHeader();
    header.getText()
    .then(text => {
        console.log('TEXT!!!' + text);
    })
    .catch(err => {
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