import { visit } from '../utils/utils';

describe('My First Test', () => {
  beforeEach(visit)

  it('Tests Of the empty list', () => {
    cy
        .get('.list-todo')
        .children()
        .should('have.length', 0)
  })
  it("Tests the add of a task", () => {
    cy.wait(500)
      .get('input')
      .type('Hello World').wait(500)
      .type('{enter}');
    cy.wait(500)
      .get('input')
      .type('Hello World').wait(500)
      .type('{enter}');
  })
  it("Tests deletion of a task", () => {
    cy
      .get('input')
      .type('Hello World')
      .type('{enter}');
    cy.wait(500)
      .get('.todo').first()
      .get('svg')
      .click();
  })
})