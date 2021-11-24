/// <reference types="cypress" />

export class RegistrationPage {

    constructor() {
        this.emailField = '#cl_login'
        this.submitEmailButton = 'button[value=\'weiter\']'
        this.passwordField = '#cl_pw_register'
        this.repeatPasswortField = '#cl_ul_pw_register_repeat'
        this.submitPasswordButton = '.c24-uli-back-start + .c24-uli-button'
        this.backButton = '.c24-uli-back:not(:last-of-type)'
    }

    createNewAccount(user) {
        this.enterEmail(user.getRandomEmail())
        this.enterPassword(user.getRandomPassword())
    }

    enterEmail(email) {
        cy.getIframeBody(this.emailField).find(this.emailField).type(email)
        cy.getIframeBody(this.submitEmailButton).find(this.submitEmailButton).click()
    }

    enterPassword(password) {
        cy.getIframeBody(this.passwordField).find(this.passwordField).type(password)
        cy.getIframeBody(this.repeatPasswortField).find(this.repeatPasswortField).type(password)
        cy.getIframeBody(this.submitPasswordButton).find(this.submitPasswordButton).eq(2).click()
    }

    getBackButton() {
        return cy.getIframeBody(this.backButton).find(this.backButton)
    }
}
