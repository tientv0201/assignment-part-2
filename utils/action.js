const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver');

var driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();

class Action {
    constructor() 
    {
        global.driver = driver;
    }

    async findElementByXPath(locator) 
    {
        return await driver.findElement(By.xpath(locator));
    }

    async findElementById(locator) 
    {
        return await driver.findElement(By.id(locator));
    }

    async setValue(element, value) 
    {
        await element.sendKeys(value);
    }

    async click(element) 
    {
        await element.click();
    }

    async isElementByXpathDisplayed(locator) {
        let flag = true;
        let elements
        try 
        {
            elements = await driver.findElements(By.xpath(locator));
            if(elements.length === 0 || typeof(undefined) === 'undefined' || elements === null) 
            {
                flag = false;
            } 
            else 
            {
                flag = true;
            } 
        } 
        catch (error) 
        {
            flag = false;
        }

        return flag;
    }

    async waitForElementDisplayed(element)
    {
        await driver.wait(until.elementIsVisible(element), 2000)
    }
}

module.exports = Action;