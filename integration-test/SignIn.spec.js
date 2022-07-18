const data = require('../fixture/data/existing-account.json');
const { openBrowser, closeBrowser } = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const LoginPageTest = require("../page/page-test/LoginPageTest");

describe('Sign In test flow', function() {
    beforeEach(async function() {
        await openBrowser(data.URL);
    });

    it('sign in successfully', async function() {
        await HomePageTest.byPassHelloDialog();
        await LoginPageTest.doLoginByEmail('qathth@gmail.com', 'Pomelo1857$');
    })

    afterEach(async function() {
        await closeBrowser();
    })
});