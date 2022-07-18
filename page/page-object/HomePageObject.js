const homePageLocators = require("../../fixture/locators/home-page.locators");
const Action = require("../../utils/action");

class HomePageObject extends Action 
{
    async clickOnCloseButtonInHelloDialog()
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_CLOSE_BUTTON_IN_HELLO_DIALOG));
    }

    async clickOnLoginButtonAtHeader() 
    {
        await this.click(await this.findElementByXPath(homePageLocators.XPATH_LOGIN_BUTTON_IN_HOME_PAGE));
    }

}

module.exports = HomePageObject;