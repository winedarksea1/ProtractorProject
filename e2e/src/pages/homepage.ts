import { browser } from "protractor";
import { BasePage, IdentificationType } from "./basepage";

const Locators = {
    header: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//div[@id = 'notification-wrapper']/div[2]/div[3]/a"
    },
    exploreBtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//*[@id='mobile-explore-btn']"
    },
    searchInput: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//*[@name='messageSearchField']"
    }
}


export class HomePage extends BasePage {

    header = this.ElementLocator(Locators.header);
    exploreBtn = this.ElementLocator(Locators.exploreBtn);
    searchInput = this.ElementLocator(Locators.searchInput);


    public getHomePage() {
        browser.get('https://forums.att.com/');
        // await browser.get('http://localhost:4200');
    }

    public getTitle() {
        return browser.getTitle();
    }

    public getHeader() {
        return this.header;
    }

    public getExploreBtn() {
        return this.exploreBtn;
    }

    public clickExploreBtn() {
        this.exploreBtn.click();
    }

    public getSearchInput() {
        return this.searchInput;
    }
}