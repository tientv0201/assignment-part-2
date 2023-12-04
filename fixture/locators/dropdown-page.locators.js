const dropdownPageLocators = {
    ID_DROPDOWN: "dropdown",
    XPATH_OPTION_IN_LIST_DROPDOWN: '//select[@id="dropdown"]/option[not(@disabled) and @value]',
    XPATH_OPTION_DROPDOWN_BY_INDEX: (index) => `//select[@id="dropdown"]/option[not(@disabled) and @value][${index}]`,


}
module.exports = dropdownPageLocators;