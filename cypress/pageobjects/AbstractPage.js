export class AbstractPage {

    clickOnListItem(listSelector, searchString) {
        cy.get(listSelector)
            .each((element) => {
                if (element.text() === searchString) {
                    cy.wrap(element).click()
                    return false
                }
            })
    }
}
