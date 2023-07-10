export class AbstractPage {

    clickOnListItem(listSelector, searchString) {
        cy.contains(listSelector, searchString)
            .click()
            .then(($el) => {
                if ($el.length === 0) {
                    throw new Error(`"${searchString}" not in "${listSelector}"`);
                }
            });
    }
}
