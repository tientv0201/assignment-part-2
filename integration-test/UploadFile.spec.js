const data = require('../fixture/data/data-test.json');
const BasePageTest = require("../page/page-test/BasePageTest");
const HomePageTest = require("../page/page-test/HomePageTest");
const UploadFilePageTest = require('../page/page-test/UploadFilePageTest');

describe('- Verify that a file can be successfully uploaded', function() {
    this.beforeEach(async function() {
        await BasePageTest.openBrowser(data.URL);
    });

    this.afterEach(async function() {
        await BasePageTest.closeBrowser();
    })

    it('Upload file successfully', async function() {
        const curentPath = process.cwd()
        const pathFileUpload = curentPath + "/fixture/data/data-file.pdf"
        await HomePageTest.verifyWelcomeToInternet();
        await HomePageTest.clickOnUploadFileInHomePage();
        await UploadFilePageTest.verifyUploadFileSuccessfully(pathFileUpload);
    })
});