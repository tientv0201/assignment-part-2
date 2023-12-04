const data = require('../fixture/data/data-test.json');
const BasePageTest = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const CheckboxPageTest = require("../page/page-test/CheckboxPageTest");

describe('Verify that checkboxes can be checked and unchecked.', function() {
    this.beforeEach(async function() {
        await BasePageTest.openBrowser(data.URL);
    });

    this.afterEach(async function() {
        await BasePageTest.closeBrowser();
    })

    it('checked and unchecked', async function() {
        await HomePageTest.verifyWelcomeToInternet();
        await HomePageTest.goToCheckboxPage();
        await CheckboxPageTest.verifyCheckedAllListCheckboxes();
        await CheckboxPageTest.verifyUncheckedAllListCheckboxes();
    })
});