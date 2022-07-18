const data = require('../fixture/data/existing-account.json');
const BasePageTest = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const LoginPageTest = require("../page/page-test/LoginPageTest");

describe('Sign In test flow', function() {
    this.beforeEach(async function() {
        await BasePageTest.openBrowser(data.URL);
    });

    this.afterEach(async function() {
        await BasePageTest.closeBrowser();
    })

    it('sign in successfully', async function() {
        await HomePageTest.byPassHelloDialog();
        await HomePageTest.goToLoginPanel();
        await LoginPageTest.doLoginByEmail(data.ExistingAccount.email, data.ExistingAccount.password);
    })
});