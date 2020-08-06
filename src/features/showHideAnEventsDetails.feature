Feature: Show/Hide an event details

  Scenario: An event element is collapsed by default.
    Given the app is loaded
    When the events are loaded
    Then events details are collapsed/hidden by default

  Scenario: User can expand an event to see its details.
    Given the app is loaded
    And the events are loaded
    When the user clicks the details button
    Then event details are expanded

  Scenario: User can collapse an event to hide its details.
    Given the app is loaded
    And the event details are expanded
    When the user clicks the details button
    Then event details are collapsed/hidden