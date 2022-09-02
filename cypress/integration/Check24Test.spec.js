import startPage from "../pageobjects/StartPage";
import productPage from "../pageobjects/ProductPage";
import offersPage from "../pageobjects/OffersPage";

describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage()
        startPage.acceptCookies()
    })

    it('should find cheapest offer', () => {
        startPage.searchForProduct("PS5")
        productPage.selectManufacturer("Sony")
        productPage.selectCategory('Sony Playstation')
        productPage.sortAscending()
        productPage.selectFirstProduct()

        offersPage.getOffersTitle().should('exist')
    })
})
