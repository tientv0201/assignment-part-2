const { assert } = require("chai");
const HomePageObject = require("../page-object/HomePageObject");

const homePageObject = new HomePageObject();
class HomePageTest extends HomePageObject 
{
    async byPassHelloDialog() 
    {
        await homePageObject.clickOnCloseButtonInHelloDialog();
    }

    async goToLoginPanel() {
        await homePageObject.clickOnLoginButtonAtHeader();
    }
}

module.exports = new HomePageTest;