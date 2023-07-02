const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
    projectId: 'bikke8',
    // ... other configurations ...

    // Configure the "e2e" testing type
    e2e: {
        // Configure setupNodeEvents
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on('file:preprocessor', bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        specPattern: ['cypress/e2e/features/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    },
});
