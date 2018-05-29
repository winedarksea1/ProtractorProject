Feature: To work with home page

@smoke
Scenario: Navigate to home page of application
    Given I nagivate to the application
    When I land on the home page
    Then I expect homePage title to be correct

@functionality
Scenario: Navigate to home page of application
    Given I nagivate to the application
    When I click the explore button

@functionality
Scenario: Use Google
    Given I Navigate to google.com
    When I enter something in the search bar
