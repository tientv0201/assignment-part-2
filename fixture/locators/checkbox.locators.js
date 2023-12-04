const checkboxPageLocators = {
    XPATH_CHECKBOXES_NAME_IN_LIST: '//input[@type="checkbox"]',
    XPATH_CHECKBOX_BY_INDEX: (index) => `//input[@type="checkbox"][${index}]`,


}
module.exports = checkboxPageLocators;