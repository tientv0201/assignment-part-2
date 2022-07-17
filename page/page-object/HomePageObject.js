const homePageLocators = require("../../fixture/locators/home-page.locators");
const Action = require("../../utils/action");

class HomePageObject extends Action 
{
    async isHelloDialogDisplayed() 
    {
        let element = await this.findElementByXPath(homePageLocators.XPATH_HELLO_DIALOG_IN_HOME_PAGE);
        await this.waitForElementDisplayed(element);
        return await this.isElementByXpathDisplayed(homePageLocators.XPATH_HELLO_DIALOG_IN_HOME_PAGE);
    }

    async clickOnCloseButtonInHelloDialog()
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_CLOSE_BUTTON_IN_HELLO_DIALOG));
    }

}

module.exports = HomePageObject;