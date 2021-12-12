import {AbstractPage} from "./AbstractPage";

export class ResultPage extends AbstractPage {

    constructor() {
        super()
        this.header = '.HeaderResult__orange'
        this.filterCheckBox = '.ChipContent__chip .ChipContent__filter-chip__content'
        this.categories = '.user-none-select:first-child'
        this.sortDropDown = 'select[name=sort_filter]'
        this.productTiles = '.Product__content'
    }

    getResultPageHeader() {
        return cy.get(this.header)
    }

    getProductTiles() {
        return cy.get(this.productTiles)
    }

    selectManufacturer(manufacturer) {
        this.clickOnListItem(this.filterCheckBox, manufacturer)
    }

    selectCategory(category) {
        this.clickOnListItem(this.categories, category)
    }

    sortBy(option) {
        console.log(option)
        cy.get(this.sortDropDown).select(option).should('have.value', option)
        return Cypress.$(this.sortDropDown)
    }
}

export default new ResultPage
