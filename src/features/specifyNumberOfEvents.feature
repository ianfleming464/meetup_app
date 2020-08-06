Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the app is loaded
    When the user hasn't entered a number
    Then the default number of events is 32

  Scenario: User can change the number of events they want to see.
    Given the app is loaded
    When the user specifies the number of events they want to see
    Then the desired number of events are displayed