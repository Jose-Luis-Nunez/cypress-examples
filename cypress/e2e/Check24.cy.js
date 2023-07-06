import startPage from "../pageobjects/StartPage";
import productPage from "../pageobjects/ProductPage";
import offersPage from "../pageobjects/OffersPage";
import login from "../pageobjects/LoginIframe";
import userTestData from "../utils/UserTestData";

describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage();
        startPage.acceptCookies();
    })

    it('should find cheapest offer', () => {
        startPage.searchForProduct("PS5");
        productPage.selectManufacturer("Sony");
        productPage.selectCategory('Sony Playstation');
        productPage.sortAscending();
        productPage.selectFirstProduct();

        offersPage.getOffersTitle().should('exist');
    })

    it('registration without payment', () => {
        startPage.clickOnLogin();
        cy.clickInIframe(login.registerButton)
        cy.getFromIframe(login.emailInputField).type(userTestData.email);
        cy.clickInIframe(login.continueButton)
        cy.getFromIframe(login.firstName).type("jose");
        cy.getFromIframe(login.lastName).type("nunez");
        cy.getFromIframe(login.password).type("ichbincool123");
        cy.getFromIframe(login.passwordRepeat).type("ichbincool123");
        cy.clickInIframe(login.submitUserDataButton)
    })
})
