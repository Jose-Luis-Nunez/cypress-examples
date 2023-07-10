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
        cy.iFrameClick(login.registerButton);
        cy.iFrameGet(login.emailInputField).type(userTestData.email);
        cy.iFrameClick(login.continueButton);
        cy.iFrameGet(login.firstName).type("jose");
        cy.iFrameGet(login.lastName).type("nunez");
        cy.iFrameGet(login.password).type("ichbincool123");
        cy.iFrameGet(login.passwordRepeat).type("ichbincool123");
        cy.iFrameClick(login.submitUserDataButton);
        cy.iFrameGet(login.sendEmailIcon).should('be.visible');
    });
});
