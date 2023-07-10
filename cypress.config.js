const {defineConfig} = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    projectId: 'bikke8',
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        baseUrl: 'https://www.check24.de/',
        specPattern: ['cypress/e2e/features/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
        pageLoadTimeout: 90000,
    },
})
