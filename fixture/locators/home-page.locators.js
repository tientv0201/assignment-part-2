const homePageLocators = {
    XPATH_BASIC_AUTH_HYPERLINK_IN_HOME_PAGE: '//a[@href="/basic_auth"]',
    XPATH_WELCOME_TO_INTERNET_TITLE: '//h1[@class="heading"]',
    XPATH_CHECKBOX_HYPERLINK_IN_HOME_PAGE: '//li/a[text()="Checkboxes"]',
    XPATH_DROPDOWN_HYPERLINK_IN_HOME_PAGE: '//li/a[text()="Dropdown"]',
    XPATH_UPLOAD_FILE_HYPERLINK_IN_HOME_PAGE: '//li/a[text()="File Upload"]'
}

module.exports = homePageLocators;