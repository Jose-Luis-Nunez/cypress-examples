Feature: Check24 Main Page

  I want to search for products

  @focus
  Scenario: Search for Products
    Given I open Check24 page
    When I search for "PS5"
    Then I am on product result page

  @focus
  Scenario: Create new account
    Given I open Check24 page
    When I click on login
    And I and start registration
    Then I see the welcome page
