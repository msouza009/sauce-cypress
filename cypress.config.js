const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v7ypd1',
  viewportWidth: 1280,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
