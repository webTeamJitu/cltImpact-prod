const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  },
  e2e: {
    baseUrl: 'https://cltimpact.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

