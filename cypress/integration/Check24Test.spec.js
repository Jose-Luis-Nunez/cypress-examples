import {StartPage} from '../pageobjects/StartPage'
import {ResultPage} from "../pageobjects/ResultPage";
import {TestUser} from "../utils/TestUser";
import {RegistrationPage} from "../pageobjects/RegistrationPage";

describe('product search test', () => {
    const user = new TestUser()
    const startPage = new StartPage()
    const resultPage = new ResultPage()
    const registration = new RegistrationPage()

    beforeEach(() => {
        startPage.openHomePage()
    })

    it('should search for product', () => {
        startPage.acceptCookies()
        startPage.searchForProduct("PS5")

        expect(resultPage.getResultPageHeader()).to.exist
    })

    it('should start login', () => {
        startPage.acceptCookies()
        startPage.clickOnLogin()
        registration.createNewAccount(user)

        expect(registration.getBackButton()).to.exist
    })

    it('should search for product2', () => {
        startPage.acceptCookies()
        startPage.searchForProduct("PS5")

        expect(resultPage.getResultPageHeader()).to.exist
    })

    it('should start login2', () => {
        startPage.acceptCookies()
        startPage.clickOnLogin()
        registration.createNewAccount(user)

        expect(registration.getBackButton()).to.exist
    })
})
