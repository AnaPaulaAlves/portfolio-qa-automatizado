/// <reference types= "cypress" />

describe('Dev Finances Agilizei', () => {

    it('Cadastrar entradas', () => {
        // - enterder o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com cypress
        // - adicionar as asserções que a gente precisa
       
        
        cy.visit('https://dev-finance.netlify.app')
        cy.get('#data-table tbody tr').should('have.length', 0 )
        
        cy.get('#transaction .button').click()
        cy.get('#description').type('Mesada')
        cy.get('[name=amount]').type(50)
        cy.get('[type=date]').type('2025-06-27')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1 )


    });

    it('Cadastrar saídas', () => {
        
        cy.visit('https://dev-finance.netlify.app')
        cy.get('#data-table tbody tr').should('have.length', 0 )
        
        cy.get('#transaction .button').click()
        cy.get('#description').type('Presente')
        cy.get('[name=amount]').type(-12)
        cy.get('[type=date]').type('2025-06-30')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1 )


    })
    it('Remover entradas e saídas', () => {
        const entrada = 'Mesada'
        const saída = 'Presente'

           cy.get('#transaction .button').click()
           cy.get('#description').type(entrada)
           cy.get('[name=amount]').type(50)
           cy.get('[type=date]').type('2025-06-27')
           cy.get('button').contains('Salvar').click()


        cy.get('#transaction .button').click()
        cy.get('#description').type(saída)
        cy.get('[name=amount]').type(-12)
        cy.get('[type=date]').type('2025-06-30')
        cy.get('button').contains('Salvar').click()

        cy.contains(entrada)
          .parent()
          .find(img[onclick*=remove])
          .click()

    });
});
