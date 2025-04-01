import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I navigate to page {string}`, (url: string) => {
  cy.visit(url);
});

Given(`I initialize the accessibility test`, () => {
  // do nothing for now
});

Then(
  `I see a page without any critical or serious accessibility violations`,
  () => {
    cy.checkAccessibility();
  }
);

Then(
  `I see a page without any critical or serious accessibility violations - color contrast rule ignored`,
  () => {
    cy.checkAccessibility(undefined, {
      // generateReport: true,
      rules: { "color-contrast": { enabled: false } },
      includedImpacts: ["critical", "serious", "moderate"],
      // runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
      iframes: true,
    });
  }
);
