const loginPageLocators = require("../../fixture/locators/login-page.locators");
var Action = require("../../utils/action");

class LoginPageObject extends Action
{

    async inputEmailInLoginPanel(email)
    {
        await this.setValue(await this.findElementById(loginPageLocators.ID_EMAIL_TEXTBOX_IN_LOGIN_PANEL), email);
    }

    async inputPasswordInLoginPanel(password)
    {
        await this.setValue(await this.findElementById(loginPageLocators.ID_PASSWORD_TEXTBOX_IN_LOGIN_PANEL), password);
    }

    async clickOnButtonInLoginPanel()
    {
        await this.click(await this.findElementByXPath(loginPageLocators.XPATH_LOGIN_BUTTON_IN_LOGIN_PANEL));
    }
}

module.exports = LoginPageObject;