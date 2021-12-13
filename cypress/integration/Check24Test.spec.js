import startPage from "../pageobjects/StartPage";
import productPage from "../pageobjects/ProductPage";
import offersPage from "../pageobjects/OffersPage";
import registration from "../pageobjects/RegistrationPage";
import {UserTestData} from "../utils/UserTestData";
import Dropdown from "../utils/Dropdown";

describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage()
        startPage.acceptCookies()
    })

    it('should find cheapest offer', () => {
        startPage.searchForProduct("PS5")
        productPage.selectManufacturer("Sony")
        productPage.selectCategory('Sony Playstation')
        productPage.sortBy(Dropdown.PRICE_ASCENDING)
        productPage.selectFirstProduct()
        offersPage.selectFirstOffer()

        offersPage.getOffersTitle().should('exist')
    })

    it('should start registration', () => {
        const user = new UserTestData()

        startPage.clickOnLogin()
        registration.createNewAccount(user)

        expect(registration.getBackButton()).to.exist
    })
})
