const homePageLocators = require("../../fixture/locators/home-page.locators");
const Action = require("../../utils/action");

class HomePageObject extends Action 
{
    async getTitleHomePage()
    {
        return await this.getValue(await this.findElementByXPath(homePageLocators.XPATH_WELCOME_TO_INTERNET_TITLE));

    }

    async clickOnBasicAuthInHomePage() 
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_BASIC_AUTH_HYPERLINK_IN_HOME_PAGE));
    }

    async clickOnCheckboxesInHomePage()
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_CHECKBOX_HYPERLINK_IN_HOME_PAGE));
    }

    async clickOnDropwdownInHomePage()
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_DROPDOWN_HYPERLINK_IN_HOME_PAGE))
    }

    async clickOnUploadFileInHomePage()
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_UPLOAD_FILE_HYPERLINK_IN_HOME_PAGE))
    }

}

module.exports = HomePageObject;