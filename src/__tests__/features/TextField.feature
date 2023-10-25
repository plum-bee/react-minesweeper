Feature: TextField

    As a developer,
    I want to set specific options for the TextField component,
    So that I can customize the component for various use cases.

    Background:
        Given I have TextField component on the page

    @single
    Scenario: Setting the TextField to disabled mode
        When I set the "isDisabled" prop to "true"
        Then The TextField should be disabled

    Scenario: Setting the TextField to read-only mode
        When I set the "isReadOnly" prop to "true"
        Then The TextField should be read-only

    Scenario Outline: Setting the TextField minimum length
        When I set the "minLength" prop to "5"
        And I type "<input>" into the TextField
        Then The TextField should be "<valid>"
        Examples:
            | input  | valid |
            | a      | false |
            | ab     | false |
            | abc    | false |
            | abcd   | false |
            | abcde  | true  |
            | abcdef | true  |

    Scenario Outline: Setting the TextField maximum length
        When I set the "maxLength" prop to "5"
        And I type "<input>" into the TextField
        Then The TextField should be "<valid>"
        Examples:
            | input  | valid |
            | a      | true  |
            | ab     | true  |
            | abc    | true  |
            | abcd   | true  |
            | abcde  | true  |
            | abcdef | false |

    Scenario Outline: Setting the TextField to required
        When I set the "isRequired" prop to "true"
        And I type "<input>" into the TextField
        Then The TextField should be "<valid>"
        Examples:
            | input  | valid |
            |        | false |
            | a      | true  |
            | ab     | true  |
            | abc    | true  |
            | abcd   | true  |
            | abcde  | true  |
            | abcdef | true  |