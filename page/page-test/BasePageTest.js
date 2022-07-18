const Action = require("../../utils/action");

class BasePageTest extends Action 
{
    async openBrowser(url)
    {
        try {
            await driver.get(url);
        } catch (error) {
            console.log(error)
        }
    }

    async closeBrowser()
    {
        try {
            await driver.close();
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BasePageTest;