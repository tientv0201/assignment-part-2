var Action = require("../../utils/action");

class LoginPageObject extends Action
{

    async inputEmail(email)
    {
        const element = await this.findElementByXPath()
        await this.action.setValue(element, email);
    }

    async inputPassword(password) 
    {
        const element = await this.findElementByXPath('');
        await this.setValue(element, password);
    }

    async clickOnLoginButton() 
    {
        await this.click(await this.findElementByXPath(''));
    }
}

module.exports = new LoginPageObject;