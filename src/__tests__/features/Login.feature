Feature: Login Screen

    Background:
        Given I am on the login page

    Scenario: Login with valid credentials
        Given I have a user account with username "testuser" and password "testpassword"
        When I enter username "testuser" and password "testpassword"
        And I click the "login" button
        Then I should be redirected to the "home" page

    # Scenario: Login with invalid credentials
    #     Given I have a user account with username "testuser" and password "testpassword"
    #     When I enter username "wronguser" and password "wrongpassword"
    #     And I click the "login" button
    #     Then I should remain on the "login" page
    #     And I should see the error message "Invalid credentials"