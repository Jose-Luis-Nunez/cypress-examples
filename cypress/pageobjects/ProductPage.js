import {AbstractPage} from "./AbstractPage";

export class ProductPage extends AbstractPage {

    constructor() {
        super()
        this.filterCheckBox = '.ChipContent__chip .ChipContent__filter-chip__content'
        this.categories = '.user-none-select:first-child'
        this.sortDropDown = 'select[name=sort_filter]'
        this.productTiles = '.result-item__content'
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

    sortBy(option) {
        cy.waitUntil(() => {
            cy.get(this.sortDropDown).select(option).should('have.value', option)
            cy.reload()
            return Cypress.$(this.sortDropDown)
        })
    }
}

export default new ProductPage
