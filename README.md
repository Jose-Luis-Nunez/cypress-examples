# Cypress
![master](https://github.com/Jose-Luis-Nunez/cypress-examples/actions/workflows/run_tests.yml/badge.svg?branch=master)


Example Cypress project for web UI automation with page object pattern and cucumber.


### Example test with page object pattern

```js
describe('Check 24 tests', () => {

    beforeEach(() => {
        startPage.openHomePage()
        startPage.acceptCookies()
    })

    it('should find cheapest offer', () => {
        startPage.searchForProduct("PS5")
        productPage.selectManufacturer("Sony")
        productPage.selectCategory('Sony Playstation')
        productPage.sortBy(Dropdown.PRICE_ASCENDING)
        productPage.selectFirstProduct()

        offersPage.getOffersTitle().should('exist')
    })
})
```

### Example test with cucumber
```gherkin
Feature: Check24 Main Page

  I want to search for products

  @focus
  Scenario: Search for Products
    Given I open Check24 page
    When I search for "PS5"
    Then I am on product result page
```

### Run the test with:

The tests can be executed with the following command:

* Chrome `cypress run --browser chrome`
* Firefox `cypress run --browser firefox`
* Electron `cypress run --headed`

### OR open cypress and start tests manually
`npx cypress open`
