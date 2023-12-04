const { assert } = require("chai");
const uploadFilePageLocators = require("../../fixture/locators/upload-page.locators");
const Action = require("../../utils/action");

class UploadFilePageObject extends Action
{
    async uploadFile(pathFile)
    {
        await (await this.findElementById(uploadFilePageLocators.ID_CHOOSE_FILE_UPLOAD)).sendKeys(pathFile);
        await (await this.findElementById(uploadFilePageLocators.ID_BUTTON_UPLOAD)).submit();
    }

    async verifyUploadedMessage()
    {
        assert.equal(await (await this.findElementByXPath(uploadFilePageLocators.XPATH_UPLOADED_MESSAGE)).getText(), "File Uploaded!") 
    }

    async verifyUploadedFileDisplayed(expectedFileName)
    {
        let actualUploadedFile = await (await this.findElementById(uploadFilePageLocators.ID_UPLOADED_FILE)).getText();

        if(expectedFileName.includes(actualUploadedFile))
        {
            console.log("Uploaded file is " + actualUploadedFile);
        }
    }
}

module.exports = UploadFilePageObject