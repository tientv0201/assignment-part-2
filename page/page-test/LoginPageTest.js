const { assert } = require("chai");
const LoginPageObject = require("../page-object/LoginPageObject");
const sleep = ms => new Promise(res => setTimeout(res, ms));

class LoginPageTest extends LoginPageObject 
{
    async loginAndVerifyValidCredentials(url) 
    {
        await this.openUrl(url)
        assert.equal(await this.getContentSuccess(), "Congratulations! You must have the proper credentials.")
    }

    async loginAndVerifyInvalidCredentials(url)
    {
        await this.openUrl(url)
        assert.isFalse(await this.isNotDisplayContentSuccess());
    }
}

module.exports = new LoginPageTest;