const { assert } = require("chai");
const Action = require("../../utils/action");

class BasePageTest extends Action 
{
    async openBrowser(url)
    {
        driver.get(url);
    }

    async closeBrowser()
    {
        driver.close();
    }
}

module.exports = new BasePageTest;