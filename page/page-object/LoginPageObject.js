const loginPageLocators = require("../../fixture/locators/login-page.locators");
var Action = require("../../utils/action");

class LoginPageObject extends Action
{

    async getContentSuccess()
    {
        return await this.getValue(await this.findElementByXPath(loginPageLocators.XPATH_TITLE_MESSAGE_SUCCESS));
    }

    async isNotDisplayContentSuccess()
    {
        return await this.isElementByXpathDisplayed(loginPageLocators.XPATH_TITLE_MESSAGE_SUCCESS);
    }

}

module.exports = LoginPageObject;