const data = require('../fixture/data/data-test.json');
const BasePageTest = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const DropdownPageTest = require("../page/page-test/DropdownPageTest");

describe('Verify that each option in a dropdown can be selected', function() {
    this.beforeEach(async function() {
        await BasePageTest.openBrowser(data.URL);
    });

    this.afterEach(async function() {
        await BasePageTest.closeBrowser();
    })

    it('Select each option', async function() {
        await HomePageTest.verifyWelcomeToInternet();
        await HomePageTest.goToDropdownPage();
        await DropdownPageTest.verifySelectEachOptionInDropdown();
    })
});