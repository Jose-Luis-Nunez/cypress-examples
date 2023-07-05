import startPage from "../pageobjects/StartPage";
import productPage from "../pageobjects/ProductPage";
import offersPage from "../pageobjects/OffersPage";
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
        startPage.clickOnLogin()
        cy.getIframeBody().find(startPage.registerButton).click()
        cy.getIframeBody().find(startPage.emailInputField).type(userTestData.email)
    })
})
