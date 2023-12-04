const data = require('../fixture/data/data-test.json');
const BasePageTest = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const LoginPageTest = require("../page/page-test/LoginPageTest");

describe('Verify Form Authentication', function() {
    this.beforeAll(async function() {
        await BasePageTest.openBrowser(data.URL);
    });

    this.afterAll(async function() {
        await BasePageTest.closeBrowser();
    })
    
    it('Verify that an error message appears for invalid credentials.', async function() {
        let username = data.AccountInvalid.username;
        let password = data.AccountCorrect.password;
        enpointBasicAuth = "http://"+username+":"+password+"@"+"localhost:8080/basic_auth";
        await LoginPageTest.loginAndVerifyInvalidCredentials(enpointBasicAuth);
    })

    it('Verify that users can successfully log in with valid credentials.', async function() {
        let username = data.AccountCorrect.username;
        let password = data.AccountCorrect.password;
        enpointBasicAuth = "http://"+username+":"+password+"@"+"localhost:8080/basic_auth";
        await LoginPageTest.loginAndVerifyValidCredentials(enpointBasicAuth);
    })
});