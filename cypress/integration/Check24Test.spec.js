import startPage from "../pageobjects/StartPage";
import resultPage from "../pageobjects/ResultPage";
import registration from "../pageobjects/RegistrationPage";
import {UserTestData} from "../utils/UserTestData";
import Dropdown from "../utils/Dropdown";

describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage()
        startPage.acceptCookies()
    })

    it('should search for product', () => {
        startPage.searchForProduct("PS5")
        resultPage.selectManufacturer("Sony")
        resultPage.selectCategory('Sony Playstation')
        resultPage.sortBy(Dropdown.PRICE_ASCENDING)

        resultPage.getProductTiles().should('have.length.greaterThan', 0)
    })

    it('should start registration', () => {
        const user = new UserTestData()

        startPage.clickOnLogin()
        registration.createNewAccount(user)

        expect(registration.getBackButton()).to.exist
    })
})
