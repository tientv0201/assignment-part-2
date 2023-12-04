const UploadFilePageObject = require("../page-object/UploadFilePageObject");

class UploadFilePageTest extends UploadFilePageObject
{
    async verifyUploadFileSuccessfully(partFile) 
    {
        await this.uploadFile(partFile);
        await this.verifyUploadedMessage();
        await this.verifyUploadedFileDisplayed(partFile);
    }
}

module.exports = new UploadFilePageTest