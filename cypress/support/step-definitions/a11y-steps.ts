import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I navigate to page {string}`, (url: string) => {
  cy.visit(url);
});

Given(`I initialize the accessibility test`, () => {
  // do nothing for now
});

Then(`I see a page without any critical or serious accessibility violations`, () => {
  cy.checkAccessibility();
});
