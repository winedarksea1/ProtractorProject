"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var protractor_1 = require("protractor");
var basepage_1 = require("./basepage");
var Locators = {
    header: {
        type: basepage_1.IdentificationType[basepage_1.IdentificationType.Xpath],
        value: "//div[@id = 'notification-wrapper']/div[2]/div[3]/a"
    },
    exploreBtn: {
        type: basepage_1.IdentificationType[basepage_1.IdentificationType.Xpath],
        value: "//*[@id='mobile-explore-btn']"
    },
    searchInput: {
        type: basepage_1.IdentificationType[basepage_1.IdentificationType.Xpath],
        value: "//*[@name='messageSearchField']"
    }
};
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.header = _this.ElementLocator(Locators.header);
        _this.exploreBtn = _this.ElementLocator(Locators.exploreBtn);
        _this.searchInput = _this.ElementLocator(Locators.searchInput);
        return _this;
    }
    HomePage.prototype.getHomePage = function () {
        protractor_1.browser.get('https://forums.att.com/');
        // await browser.get('http://localhost:4200');
    };
    HomePage.prototype.getTitle = function () {
        return protractor_1.browser.getTitle();
    };
    HomePage.prototype.getHeader = function () {
        return this.header;
    };
    HomePage.prototype.getExploreBtn = function () {
        return this.exploreBtn;
    };
    HomePage.prototype.clickExploreBtn = function () {
        this.exploreBtn.click();
    };
    HomePage.prototype.getSearchInput = function () {
        return this.searchInput;
    };
    return HomePage;
}(basepage_1.BasePage));
exports.HomePage = HomePage;
