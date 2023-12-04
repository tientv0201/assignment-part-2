const CheckboxPageObject = require("../page-object/CheckboxPageObject");

class CheckBoxPageTest extends CheckboxPageObject {
    async verifyCheckedAllListCheckboxes()
    {
        let listChecboxes = await this.getAllListCheckboxName()
        for (let i = 0; i < listChecboxes.length; i++) {
            await this.checkedByCheckboxIndex(i+1);
        }
    }

    async verifyUncheckedAllListCheckboxes()
    {
        let listChecboxes = await this.getAllListCheckboxName()
        for (let i = 0; i < listChecboxes.length; i++) {
            await this.uncheckedByCheckboxIndex(i+1);
        }
    }
}

module.exports = new CheckBoxPageTest