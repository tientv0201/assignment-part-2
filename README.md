# Asignment Part 2

## Prerequisites

You will need these things to install the app

```
    Node.js v12.x or latest (https://nodejs.org/en/)
```
Testing tools and frameworks:
```
    Node.js v12.x or latest (https://nodejs.org/en/)
```
```
    "selenium-webdriver": "^4.15.0"
```
```
    "mocha": "^10.2.0"
```

## Installation

Run the command to install project dependencies

```bash
npm install
```

## Project structure

```
  /fixtures # You define your needed data for your test
    /data # Folder contains safety tests data
    /locators
      - home-page.locators.js # Contains locators in Home screen
      - login-page.locators.js # Contains locators in Home screen

  /integration # You define your test cases here
      - Dropdown.spec.js 
      - Checkbox.spec.js
      - SignIn.spec.js

  /mochawesome-report # Where to store data about images, videos, and results to create report files
    - mochawesome.html
    - mochawesome.json

  /page # Manage and implement code for each class of page
    /page-object # Implemant code for class object of page
    - LoginPageObject.js
    ...
    /page-test  # Extend from the Object class to perform checks on the page
    - LoginPageTest.js
    ...

  /util # Manage and initialize common methods
    - action.js 
- .gitignore # Contains which will be ignored before commit and push to branch. (For example: /videos, /screenshots)
- package-lock.json # 
- package.json # Config run CLI and manage dependencies
```

## Usage
According to the exercise, I have separated the CLI run commands for each page to run separate tests as follows:

To run test case of Login page:

```bash
npm run test-login
```

To run test case of Checkbox page:

```bash
npm run test-checkbox
```

To run test case of Dropndown page

```bash
npm run test-dropdown
```

To run test case of Upload file page:

```bash
npm run test-upload
```
