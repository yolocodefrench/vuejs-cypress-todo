import { visit } from '../utils/utils';

describe('My First Test', () => {
  beforeEach(visit)

  it('Test la liste vide', () => {
    cy
        .get('.list-todo')
        .children()
        .should('have.length', 0)
  })
  it("Teste l'ajout  d'une chose à faire", () => {
    cy.wait(500).get('input').type('Hello World').wait(500).type('{enter}');
    cy.wait(500).get('input').type('Hello World').wait(500).type('{enter}');
  })
  it("Teste la suppression d'une tache", () => {
    cy.get('input').type('Hello World').type('{enter}');
    cy.wait(500).get('.todo').first().get('svg').click().wait(1000);
    
  })
})