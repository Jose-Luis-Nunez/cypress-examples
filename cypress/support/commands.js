// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * @memberOf cy
 * @method getIframeBody
 */
Cypress.Commands.add('getIframeBody', () => {
    return cy
        .get('.c24-uli-loginlayer-iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap);
})

/**
 * @memberOf cy
 * @method clickInIframe
 */
Cypress.Commands.add('clickInIframe', (selector) => {
    cy.getIframeBody().find(selector).click();
});

/**
 * @memberOf cy
 * @method getFromIframe
 */
Cypress.Commands.add('getFromIframe', (selector) => {
    return cy.getIframeBody().find(selector);
});
