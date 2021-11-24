/// <reference types="cypress" />

export class StartPage {

    constructor() {
        this.acceptCookiesButton = '.c24-cookie-consent-notice-buttons .c24-cookie-consent-button:nth-child(2)'
        this.searchField = 'input[name=\'q\']'
        this.loginButton = ".c24-customer [href*='user/login']"
    }

    acceptCookies() {
        cy.get(this.acceptCookiesButton).should('be.visible').click()
    }

    searchForProduct(product) {
        cy.get(this.searchField).should('be.visible').type(product + '{enter}')
    }

    clickOnLogin() {
        cy.get(this.loginButton).eq(1).should('be.visible').click()
    }
}
