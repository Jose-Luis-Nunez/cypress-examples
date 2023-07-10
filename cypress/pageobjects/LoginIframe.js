import login from "../pageobjects/LoginIframe";

export class LoginIframe {

    constructor() {
        this.registerButton = 'a.c24-uli-cl-r-start-trigger';
        this.emailInputField = '#cl_login';
        this.continueButton = 'button[type="submit"]#c24-uli-login-btn';
        this.firstName = '#cl_ul_firstname';
        this.lastName = '#cl_ul_lastname';
        this.password = '#cl_pw_register';
        this.passwordRepeat = '#cl_ul_pw_register_repeat';
        this.submitUserDataButton = '#c24-uli-register-btn';
        this.sendEmailIcon = '.c24-uli-form > .c24-uli-tan-text rect';
    }

    startRegistration(email) {
        cy.iFrameClick(login.registerButton);
        cy.iFrameGet(login.emailInputField).type(email);
        cy.iFrameClick(login.continueButton);
        return this;
    }

    enterAccountDetails(userTestData) {
        cy.iFrameGet(this.firstName).type(userTestData.firstName);
        cy.iFrameGet(this.lastName).type(userTestData.lastName);
        cy.iFrameGet(this.password).type(userTestData.password);
        cy.iFrameGet(this.passwordRepeat).type(userTestData.passwordRepeat);
        cy.iFrameClick(this.submitUserDataButton);
        return this;
    }
}

export default new LoginIframe;
