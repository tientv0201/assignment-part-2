const { doLogin } = require("../page/page-test/LoginPageTest")
const data = require('../fixture/data/existing-account.json');
const { openBrowser, closeBrowser } = require("../page/page-test/BasePageTest");
const { byPassHelloDialog } = require("../page/page-test/HomePageTest");

describe('Sign In test flow', async function() {
    this.beforeEach(async function() {
        await this.timeout(60000);
        await openBrowser(data.URL);
    });

    this.afterEach(async function() {
        await closeBrowser();
    })

    it('sign in successfully', async function() {
        await byPassHelloDialog();
    })
});