import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

const searchField = 'input[name=\'q\']';
const acceptCookiesButton = '.c24-cookie-consent-notice-buttons .c24-cookie-consent-button:nth-child(2)';

Given('I open Check24 page', () => {
    openHomePage(Cypress.config('baseUrl'));
    acceptCookies(acceptCookiesButton);
});

When('I search for {string}', (product) => {
    searchForProduct(product);
});

const openHomePage = (url) => {
    cy.visit(url);
}

const acceptCookies = () => {
    cy.get(acceptCookiesButton).should('be.visible').click();
}

const searchForProduct = (product) => {
    cy.get(searchField).should('be.visible').type(`${product}{enter}`);
}
