const dropdownPageLocators = require("../../fixture/locators/dropdown-page.locators");
const Action = require("../../utils/action");

class DropdownPageObject extends Action 
{
    async getListOptionInDropdown()
    {
        return await this.getValueInList(await this.findElementsByXPath(dropdownPageLocators.XPATH_OPTION_IN_LIST_DROPDOWN))
    }

    async selectedAnOptionInDropdownList(optionIndex)
    {
        await this.click(await this.findElementByXPath(dropdownPageLocators.XPATH_OPTION_DROPDOWN_BY_INDEX(optionIndex)))
        let isSelected = await (await this.findElementByXPath(dropdownPageLocators.XPATH_OPTION_DROPDOWN_BY_INDEX(optionIndex))).isSelected()
        if(isSelected)
        {
            console.log(await this.getValue(await this.findElementByXPath(dropdownPageLocators.XPATH_OPTION_DROPDOWN_BY_INDEX(optionIndex))) + " is selected")
        }
    }
}

module.exports = DropdownPageObject