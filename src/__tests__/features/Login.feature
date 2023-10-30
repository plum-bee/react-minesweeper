Feature: Login Screen

    Background:
        Given I am on the login page

    Scenario: Login with valid credentials
        When I enter "valid" credentials
        And I click the "login" button
        Then I should be on the "home" page

    Scenario: Login with invalid credentials
        When I enter "invalid" credentials
        And I click the "login" button
        Then I should be on the "login" page
        And I should see the error message "Invalid credentials"

