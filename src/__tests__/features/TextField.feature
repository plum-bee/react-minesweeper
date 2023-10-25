Feature: TextField

    As a developer,
    I want to set specific options for the TextField component,
    So that I can customize the component for various use cases.

    Background:
        Given I have TextField component on the page

    Scenario: Setting the TextField to disabled mode
        When I set the "disabled" prop to "true"
        Then The TextField should be disabled

    Scenario: Setting the TextField to read-only mode
        When I set the "readonly" prop to "true"
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
        When I set the "required" prop to "true"
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

    Scenario Outline: Setting the TextField to validate using regex
        When I set the "pattern" prop to "<regex>"
        And I type "<input>" into the TextField
        Then The TextField should be "<valid>"
        Examples:
            | input                 | regex                                              | valid |
            | abc123                | /^[a-z]+$/i                                        | false |
            | abc                   | /^[a-z]+$/i                                        | true  |
            | 123                   | /^[a-z]+$/i                                        | false |
            | 123abc                | /^[a-z]+$/i                                        | false |
            | ABC                   | /^[a-z]+$/                                         | false |
            | abc                   | /^[a-z]+$/                                         | true  |
            | 123                   | /^[a-z]+$/                                         | false |
            | 123abc                | /^[a-z]+$/                                         | false |
            | ABC                   | /^[a-z]+$/                                         | false |
            | abc123                | /^[a-z0-9]+$/i                                     | true  |
            | ABC123                | /^[a-z0-9]+$/i                                     | true  |
            | 123                   | /^[a-z0-9]+$/i                                     | true  |
            | abc!                  | /^[a-z0-9]+$/i                                     | false |
            | ABC!                  | /^[a-z0-9]+$/i                                     | false |
            | 123!                  | /^[a-z0-9]+$/i                                     | false |
            | john.doe@example.com  | /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ | true  |
            | john.doe@example      | /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ | false |
            | john.doe@.com         | /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ | false |
            | john.doe@example..com | /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ | false |



