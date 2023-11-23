Feature: Login Screen

    Background:
        Given I am on the login page

    Scenario: Login with valid credentials
        Given I have a user account with username "johndoe" and password "password123"
        When I enter username "johndoe" and password "password123"
        And I click the "login" button
        Then I should be redirected to the "leaderboard" page

    Scenario: Login with invalid credentials
        Given I have a user account with username "johndoe" and password "password123"
        When I enter username "johndoe" and password "wrongpassword123"
        And I click the "login" button
        Then I should remain on the "login" page