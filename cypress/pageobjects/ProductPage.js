import {AbstractPage} from "./AbstractPage";

export class ProductPage extends AbstractPage {

    constructor() {
        super()
        this.filterCheckBox = '.check-box-option'
        this.categories = '.category-select__item'
        this.sortDropDown = '.select-sort__sort-item:nth-child(2)'
        this.productTiles = '.product-details__title'
    }

    selectFirstProduct() {
        cy.get(this.productTiles).first().click({force: true})
    }

    selectManufacturer(manufacturer) {
        cy.waitUntil(() => {
            this.clickOnListItem(this.filterCheckBox, manufacturer)
            cy.reload()
            return Cypress.$(this.filterCheckBox)
        })
    }

    selectCategory(category) {
        cy.waitUntil(() => {
            this.clickOnListItem(this.categories, category)
            cy.reload()
            return Cypress.$(this.categories)
        })
    }

    sortAscending() {
        cy.get(this.sortDropDown).click()
    }
}

export default new ProductPage
