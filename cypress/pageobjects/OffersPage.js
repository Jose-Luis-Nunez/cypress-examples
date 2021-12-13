export class OffersPage {

    constructor() {
        this.shopButton = '.offer-item button[title=\'zum Shop\']'
        this.offersTitle = '.price-information-title'
    }

    selectFirstOffer() {
        cy.get(this.shopButton).eq(0).click()
    }

    getOffersTitle() {
        return cy.get(this.offersTitle)
    }

}

export default new OffersPage
