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
let button;


setDefaultTimeout(60 * 1000);


Given(/^I Navigate to google.com$/, () => {
    browser.get("https://www.google.com/");
});

When(/^I enter something in the search bar$/, () => {
    input = element(by.xpath("//input[@title = 'Search']"));
    input.sendKeys('HELLO').then(() => {
        console.log('Value' + input.value);
        expect(input.value).to.equal('HELLO');
    });

    button = element(by.xpath("//input[@aria-label='Google Search']"));
    button.click();
});