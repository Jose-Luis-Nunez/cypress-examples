import {Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.check24.de'
const searchField = 'input[name=\'q\']'
const header = '.HeaderResult__orange'
const acceptCookiesButton = '.c24-cookie-consent-notice-buttons .c24-cookie-consent-button:nth-child(2)'

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

const openHomePage = (url) => {
    cy.visit(url)
}

const acceptCookies = () => {
    cy.get(acceptCookiesButton).should('be.visible').click()
}

const searchForProduct = (product) => {
    cy.get(searchField).should('be.visible').type(`${product}{enter}`)
}
