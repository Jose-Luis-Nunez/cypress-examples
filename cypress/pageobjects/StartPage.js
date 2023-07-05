export class StartPage {

    constructor() {
        this.acceptCookiesButton = '.c24-cookie-consent-notice-buttons .c24-cookie-consent-button:nth-child(2)';
        this.searchField = 'input[name=\'q\']';
        this.loginButton = '#c24-meinkonto-anmelden';
        this.registerButton = 'a.c24-uli-cl-r-start-trigger';
        this.emailInputField = '#cl_login'
    }

    openHomePage() {
        cy.visit(Cypress.config('baseUrl'));
    }

    acceptCookies() {
        cy.get(this.acceptCookiesButton).should('be.visible').click();
    }

    searchForProduct(product) {
        cy.get(this.searchField).should('be.visible').type(product + '{enter}');
    }

    clickOnLogin() {
        cy.get(this.loginButton).click( { force: true });
    }
}

export default new StartPage;
