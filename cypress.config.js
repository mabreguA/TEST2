/*const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    // specPattern: "cypress/e2e/features/*.feature",
    // specPattern: "cypress/e2e/features",
    //  specPattern: "cypress/e2e",
    baseUrl: "https://afexconnect.com/iniciar-sesion",
    chromeWebSecurity: false,

  },
}); */

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1465,//para definir las dimenasiones del navegador automatizado, en 73%
  viewportHeight: 955,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,

  },
});