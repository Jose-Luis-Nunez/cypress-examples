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
    }
}

export default new LoginIframe;
