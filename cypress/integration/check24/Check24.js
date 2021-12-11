import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {colors, NumberDictionary, starWars, uniqueNamesGenerator} from "unique-names-generator";

const url = 'https://www.check24.de'
const searchField = 'input[name=\'q\']'
const header = '.HeaderResult__orange'
const acceptCookiesButton = '.c24-cookie-consent-notice-buttons .c24-cookie-consent-button:nth-child(2)'
const loginButton = '.c24-customer [href*=\'user/login\']'

const emailField = '#cl_login'
const submitEmailButton = 'button[value=\'weiter\']'
const passwordField = '#cl_pw_register'
const repeatPasswordField = '#cl_ul_pw_register_repeat'
const submitPasswordButton = '.c24-uli-back-start + .c24-uli-button'
const backButton = '.c24-uli-back:not(:last-of-type)'

Given('I open Check24 page', () => {
    openHomePage(url)
    acceptCookies(acceptCookiesButton)
})

When('I search for {string}', (product) => {
    searchForProduct(product)
})

Then(`I am on product result page`, () => {
    cy.get(header).should('be.visible')
})

When('I click on login', () => {
    clickOnLogin()
})

And(`I and start registration`, () => {
    createNewAccount()
})

Then(`I see the welcome page`, () => {
    cy.getIframeBody(backButton).find(backButton)
})

const openHomePage = (url) => {
    cy.visit(url)
}

const acceptCookies = () => {
    cy.get(acceptCookiesButton).should('be.visible').click()
}

const searchForProduct = (product) => {
    cy.get(searchField).should('be.visible').type(`${product}{enter}`)
}

const clickOnLogin = () => {
    cy.get(loginButton).eq(1).should('be.visible').click()
}

const createNewAccount = () => {
    enterEmail(getRandomEmail())
    enterPassword(getRandomPassword())
}

const enterEmail = (email) => {
    cy.getIframeBody(emailField).find(emailField).type(email)
    cy.getIframeBody(submitEmailButton).find(submitEmailButton).click()
}

const enterPassword = (password) => {
    cy.getIframeBody(passwordField).find(passwordField).type(password)
    cy.getIframeBody(repeatPasswordField).find(repeatPasswordField).type(password)
    cy.getIframeBody(submitPasswordButton).find(submitPasswordButton).eq(2).click()
}

const getRandomEmail = () => {
    const randomNumber = getRandomNumber(7)
    const characterName = uniqueNamesGenerator({
        dictionaries: [starWars, colors, randomNumber],
    })
    return `${characterName}@gmail.com`
}

const getRandomPassword = () => {
    return `pw${getRandomNumber(6)}`
}

const getRandomNumber = (numberOfDigits) => {
    let minRange = 1;
    let maxRange = 9;

    for (let i = 0; i < numberOfDigits; i++) {
        if (i > 0) {
            minRange = minRange * 10
            maxRange = maxRange * 10
        }
    }
    return NumberDictionary.generate({min: minRange, max: maxRange})
}
