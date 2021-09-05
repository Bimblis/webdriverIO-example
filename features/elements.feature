Feature: Soderberg and partners technical test
  Scenario: As a user, I can use the textbox formulary
    Given I am on the textbox page
    When I submit textbox formulary
    Then I check the values returned are correct