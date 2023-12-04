const { assert } = require("chai");
const HomePageObject = require("../page-object/HomePageObject");

const homePageObject = new HomePageObject();
class HomePageTest extends HomePageObject 
{
    async verifyWelcomeToInternet() 
    {
        assert.equal(await this.getTitleHomePage(), "Welcome to the-internet")
    }

    async goToLogin() {
        await homePageObject.clickOnBasicAuthInHomePage();
    }

    async goToCheckboxPage() 
    {
        await homePageObject.clickOnCheckboxesInHomePage();
    }

    async goToDropdownPage() 
    {
        await homePageObject.clickOnDropwdownInHomePage();
    }

    async goToUploadFilePage()
    {
        await homePageObject
    }
}

module.exports = new HomePageTest;