/// <reference types= "cypress" />  

describe('Dev Finances Agilizei', () => {
  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app');
  });

  it('Cadastrar e remover entrada e saída', () => {
    const entrada = 'Mesada';
    const saida = 'Presente';

    // Cadastrar entrada
    cy.get('a.button.new').should('be.visible').click();
    cy.get('#description').type(entrada);
    cy.get('[name=amount]').type(150);
    cy.get('[type=date]').type('2025-06-27');
    cy.get('button').contains('Salvar').click();

    // Cadastrar saída
    cy.get('a.button.new').should('be.visible').click();
    cy.get('#description').type(saida);
    cy.get('[name=amount]').type(-30);
    cy.get('[type=date]').type('2025-06-28');
    cy.get('button').contains('Salvar').click();

    // Remover entrada
    cy.contains(entrada)
  .closest('tr') // pega a linha correta
  .find('img[onclick*=remove]')
  .click();

  // Remover saída
    cy.contains(saida)
  .closest('tr')
  .find('img[onclick*=remove]')
  .click();


    // Verificar que a tabela ficou vazia
    cy.get('#data-table tbody tr').should('have.length', 0);
  });
});

