import {Then} from "cypress-cucumber-preprocessor/steps";

const header = '.search-header'

Then(`I am on product result page`, () => {
    cy.get(header).should('be.visible')
})
