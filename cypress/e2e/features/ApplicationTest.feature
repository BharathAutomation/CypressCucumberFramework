#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Parabank Application Login and Registration Feature
  I want to use this feature file to test Parabank Application Login and Registration Features

  Scenario: Verify application logo and caption
    Given Launch the application
    Then Verify application logo is displayed
    And Verify application caption is displayed as "Experience the difference"

  Scenario: Verify application home page left menu
    Given Launch the application
    Then Verify application home page left menu

  # Scenario Outline: Verify new user registration
  #   Given Launch the application
  #   When I click on the registration link
  #   Then Registration page should be launched with title "Signing up is easy!"
  #   When I update user details with "<username>" and "<password>"
  #   And I click on Register button
  #   Then Registration should be successful

  #   Examples:
  #     | username | password |
  #     | admin2   | admin123 |

  # Scenario Outline: Verify user login with <scenario>
  #   Given Launch the application
  #   When I login with "<username>" and "<password>"
  #   And I click on login button
  #   Then Verify the login "<scenario>"

  #   Examples:
  #     | scenario            | username | password   |
  #     | valid credentials   | admin    | admin123   |
  #     | invalid credentials | invalid  | invalid123 |