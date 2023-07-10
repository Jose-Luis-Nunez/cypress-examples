import { Then } from "@badeball/cypress-cucumber-preprocessor";

const header = '.search-header';

Then(`I am on product result page`, () => {
    cy.get(header).should('be.visible');
});
