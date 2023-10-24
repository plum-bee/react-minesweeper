Feature: TextField

    As a developer,
    I want to set specific options for the TextField component,
    So that I can customize the component for various use cases.


    Background:
        Given I am using the TextField component

    Scenario: Setting the TextField to disabled mode
        When I set the disabled prop to true
        Then The TextField is disabled

    Scenario Outline: Setting the TextField minimum length
        When I set the minLength prop to 5
        And I type '<input>' into the TextField
        Then The TextField is '<valid>'
        Examples:
            | input  | valid |
            | a      | false |
            | ab     | false |
            | abc    | false |
            | abcd   | false |
            | abcde  | true  |
            | abcdef | true  |

    Scenario Outline: Setting the TextField maximum length
        When I set the maxLength prop to 5
        And I type '<input>' into the TextField
        Then The TextField is '<valid>'
        Examples:
            | input  | valid |
            | a      | true  |
            | ab     | true  |
            | abc    | true  |
            | abcd   | true  |
            | abcde  | true  |
            | abcdef | false |

    Scenario Outline: Setting the TextField to required
        Given I set the required prop to true
        When I type '<input>' into the TextField
        Then The TextField is '<valid>'
        Examples:
            | input  | valid |
            |        | false |
            | a      | true  |
            | ab     | true  |
            | abc    | true  |
            | abcd   | true  |
            | abcde  | true  |
            | abcdef | true  |


