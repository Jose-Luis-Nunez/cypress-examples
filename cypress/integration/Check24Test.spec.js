import startPage from "../pageobjects/StartPage";
import resultPage from "../pageobjects/ResultPage";
import registration from "../pageobjects/RegistrationPage";
import {UserTestData} from "../utils/UserTestData";

describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage()
        startPage.acceptCookies()
    })

    it('should search for product', () => {
        startPage.searchForProduct("PS5")

        expect(resultPage.getResultPageHeader()).to.exist
    })

    it('should start registration', () => {
        const user = new UserTestData()

        startPage.clickOnLogin()
        registration.createNewAccount(user)

        expect(registration.getBackButton()).to.exist
    })
})
