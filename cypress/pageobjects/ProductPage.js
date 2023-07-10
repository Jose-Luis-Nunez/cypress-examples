import { AbstractPage } from './AbstractPage';

export class ProductPage extends AbstractPage {

    constructor() {
        super();
        this.filterCheckBox = '.check-box-option';
        this.categories = '.category-select__items';
        this.sortDropDown = '.select-sort__sort-item:nth-child(2)';
        this.productTiles = '.product-details__title';
    }

    selectFirstProduct() {
        cy.get(this.productTiles).first().should('be.visible').click({ force: true });
    }

    selectManufacturer(manufacturer) {
        this.clickOnListItem(this.filterCheckBox, manufacturer);
        cy.get(this.filterCheckBox).should('be.visible');
    }

    selectCategory(category) {
        this.clickOnListItem(this.categories, category);
        cy.get(this.categories).should('be.visible');
    }

    sortAscending() {
        cy.get(this.sortDropDown).click();
    }
}

export default new ProductPage;
