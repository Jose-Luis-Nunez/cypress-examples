const {defineConfig} = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    projectId: 'bikke8',
    // Use production build of Cypress
    productionBrowserBuild: true,
    // Specify the necessary spec files only
    testFiles: [
        'cypress/e2e/features/*.feature',
        'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    ],
    pluginsFile: 'cypress/plugins/index.js',
    // Optimize preprocessors and plugins
    on: async (config) => {
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });
        config.env = config.env || {};
        config.env.cucumber_preprocessor = { bundler };
        await addCucumberPreprocessorPlugin(config);
        return config;
    },
});
