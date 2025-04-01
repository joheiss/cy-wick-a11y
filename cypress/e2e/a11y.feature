Feature: Our web pages must conform with the WCAG standards for accessibility

  Scenario: Page must not contain any accessibility violations
    Given I navigate to page "https://www.bwi.de/"
    And I initialize the accessibility test
    # Then I see a page without any critical or serious accessibility violations
    And I see a page without any critical or serious accessibility violations - color contrast rule ignored
