const { assert } = require("chai");
const LoginPageObject = require("../page-object/LoginPageObject");

const loginPageObject = new LoginPageObject();
class LoginPageTest extends LoginPageObject 
{
    async doLoginByEmail(email, password) 
    {
        await loginPageObject.inputEmailInLoginPanel(email);
        await loginPageObject.inputPasswordInLoginPanel(password);
        await loginPageObject.clickOnButtonInLoginPanel();
    }
}

module.exports = new LoginPageTest;