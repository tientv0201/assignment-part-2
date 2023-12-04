const DropdownPageObject = require("../page-object/DropdownPageObject");

class DropdownPageTest extends DropdownPageObject 
{
    async verifySelectEachOptionInDropdown()
    {
        let listOptionInDropdown = await this.getListOptionInDropdown();
        for(let i=0; i < listOptionInDropdown.length; i++)
        {
            await this.selectedAnOptionInDropdownList(i+1)
        }
    }
}

module.exports = new DropdownPageTest