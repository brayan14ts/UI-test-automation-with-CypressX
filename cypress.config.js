const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    excludeSpecPattern: [
      "cypress/e2e/getting-started/*.js",
      "cypress/e2e/advanced-examples/*.js",
      "cypress/e2e/1-eTestOps/login/*.js"
    ]
  },
  chromeWebSecurity: false,
})