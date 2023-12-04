const checkboxPageLocators = require("../../fixture/locators/checkbox.locators");
const Action = require("../../utils/action");

class CheckboxPageObject extends Action {
    async getAllListCheckboxName()
    {
        let listCheckboxName;
        return listCheckboxName = await this.getValueInList(await this.findElementsByXPath(checkboxPageLocators.XPATH_CHECKBOXES_NAME_IN_LIST))
    }

    async checkedByCheckboxIndex(index)
    {
        let isChecked = await this.isChecked(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index)), "checked")
        if(!isChecked)
        {
            await this.click(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index)))
            if(await this.isChecked(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index))))
            {
                console.log("This checkbox " + index + " has checked")
            }
        } else
        {
            console.log("This checkbox " + index+ " is checked.")
        } 
    }

    async uncheckedByCheckboxIndex(index)
    {
        let isChecked = await this.isChecked(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index)), "checked")
        if(isChecked)
        {
            await this.click(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index)))
            if(!await this.isChecked(await this.findElementByXPath(checkboxPageLocators.XPATH_CHECKBOX_BY_INDEX(index))))
            {
                console.log("This checkbox " + index + " has unchecked")
            }
        } else
        {
            console.log("This checkbox " + index + "is unchecked.")
        }     
    }

}

module.exports = CheckboxPageObject;