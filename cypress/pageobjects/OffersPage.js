export class OffersPage {

    constructor() {
        this.shopButton = '.offer-item button[title=\'zum Shop\']';
        this.offersTitle = '.ts-pdp-product .d-none:first-child';
    }

    selectFirstOffer() {
        cy.get(this.shopButton).first().click();
    }

    getOffersTitle() {
        return cy.get(this.offersTitle);
    }
}

export default new OffersPage;
