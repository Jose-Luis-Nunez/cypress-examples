import {Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.check24.de'
Given('I open Check24 page', () => {
    openHomePage(url)
    acceptCookies()
})

When('I search for {string}', (product) => {
    searchForProduct
})


Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

const openHomePage = (url) => {
    cy.visit(url)
}

const acceptCookies = (acceptCookiesButton) => {
    cy.get(acceptCookiesButton).should('be.visible').click()
}

const searchForProduct = (searchField, product) => {
    cy.get(searchField).should('be.visible').type(`${product}{enter}`)
}
