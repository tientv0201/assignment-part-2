const { assert } = require("chai");
const HomePageObject = require("../page-object/HomePageObject");

const homePageObject = new HomePageObject();
class HomePageTest extends HomePageObject 
{
    async byPassHelloDialog() 
    {
        assert.isTrue(await homePageObject.isHelloDialogDisplayed());
        await homePageObject.clickOnCloseButtonInHelloDialog();
    }
}

module.exports = new HomePageTest;