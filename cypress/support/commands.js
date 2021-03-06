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
Cypress.Commands.add('getIframeBody', () => {
    return cy
        .get('.c24-uli-loginlayer-iframe:first-child')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
})

Cypress.Commands.add('openHomePage', () => {
    cy.visit('https://www.check24.de/')
})

import 'cypress-wait-until';
