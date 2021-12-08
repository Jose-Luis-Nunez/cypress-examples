export class ResultPage {

    constructor() {
        this.header = '.HeaderResult__orange'
    }

    getResultPageHeader() {
        return cy.get(this.header)
    }
}

export default new ResultPage
