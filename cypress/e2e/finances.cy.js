/// <reference types= "cypress" />  

// describe('Dev Finances Agilizei', () => {
//   beforeEach(() => {
//     cy.visit('https://dev-finance.netlify.app');
//   });

//   it('Cadastrar e remover entrada e saída', () => {
//     const entrada = 'Mesada';
//     const saida = 'Presente';

//     // Cadastrar entrada
//     cy.get('a.button.new').should('be.visible').click();
//     cy.get('#description').type(entrada);
//     cy.get('[name=amount]').type(150);
//     cy.get('[type=date]').type('2025-06-27');
//     cy.get('button').contains('Salvar').click();

//     // Cadastrar saída
//     cy.get('a.button.new').should('be.visible').click();
//     cy.get('#description').type(saida);
//     cy.get('[name=amount]').type(-30);
//     cy.get('[type=date]').type('2025-06-28');
//     cy.get('button').contains('Salvar').click();

    
//     // Remover entrada
//     cy.contains(entrada)
//   .closest('tr') // pega a linha correta
//   .find('img[onclick*=remove]')
//   .click();

//   // Remover saída
//     cy.contains(saida)
//   .closest('tr')
//   .find('img[onclick*=remove]')
//   .click();


//     // Verificar que a tabela ficou vazia
//     cy.get('#data-table tbody tr').should('have.length', 0);
//   });
// });
 

    // hooks
    // trechos que executam antes e depois do teste
    // before antes de todos os testes
    // beforeEach antes de cada testes
    // after depois de todos os tetes
    // afterEach depois de cada tetes
  //   context('Dev Finances Agilizei', () => {
  //   beforeEach(() => {
  //     cy.visit('https://dev-finance.netlify.app');
  //     cy.get('#data-table tbody tr').should('have.length', 0)
  //   });
    
  //   it('Cadastrar entradas', () => {

  //  cy.get('#transaction .button').click(); //id + classe
  //  cy.get('#description').type('Mesada');   // id
  //  cy.get('[name=amount').type(150);  // atribitos
  //  cy.get('[type=date]').type('2025-06-27');  // atributos
  //  cy.get('button').contains('Salvar').click();  // tipo de valor
  //  cy.get('#data-table tbody tr').should('have.length', 1)
  // })
  // })

  //  it('Cadastrar saídas', () => {
  //     cy.visit('https://dev-finance.netlify.app');
      

  //  cy.get('#transaction .button').click(); //id + classe
  //  cy.get('#description').type('Presente');   // id
  //  cy.get('[name=amount').type(-50);  // atribitos
  //  cy.get('[type=date]').type('2025-06-28');  // atributos
  //  cy.get('button').contains('Salvar').click();// tipo de valor
   
  //  cy.get('#data-table tbody tr').should('have.length', 1)
  
  // })

  // it('Remover entradas e saídas', () => {
    
  //   const entradas = 'Mesada';
  //   const saidas   = 'Presente';

  //   cy.get('#transaction .button').click(); //id + classe
  //   cy.get('#description').type(entradas);   // id
  //   cy.get('[name=amount]').type(100);  // atribitos
  //   cy.get('[type=date]').type('2025-06-27');  // atributos
  //   cy.get('button').contains('Salvar').click();  // tipo de valor

  //    cy.get('#transaction .button').click(); //id + classe
  //    cy.get('#description').type(saidas);   // id
  //    cy.get('[name=amount]').type(-35);  // atribitos
  //    cy.get('[type=date]').type('2025-06-27');  // atributos
  //    cy.get('button').contains('Salvar').click();  // tipo de valor

     
  //    cy.get('td.description')
  //    .contains(entradas)
  //    .parent()
  //    .find('img[onclick*=remove]')
  //    .click();

  //    cy.get('td.description')
  //    .contains(saidas)
  //    .siblings()
  //    .children('img[onclick*=remove]')
  //    .click();

  // });

 
   

  context('Dev Finances Agilizei', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app');
    cy.get('#data-table tbody tr').should('have.length', 0);
  });

  it('Cadastrar entradas', () => {
    cy.get('#transaction .button').click();
    cy.get('#description').type('Mesada');
    cy.get('[name=amount]').type(150);
    cy.get('[type=date]').type('2025-06-27');
    cy.get('button').contains('Salvar').click();

    cy.get('#data-table tbody tr').should('have.length', 1);
  });

  it('Cadastrar saídas', () => {
    cy.get('#transaction .button').click();
    cy.get('#description').type('Presente');
    cy.get('[name=amount]').type(-50);
    cy.get('[type=date]').type('2025-06-28');
    cy.get('button').contains('Salvar').click();

    cy.get('#data-table tbody tr').should('have.length', 1);
  });

  it('Remover entradas e saídas', () => {
    const entrada = 'Mesada';
    const saida = 'Presente';

    // Cadastrando entrada
    cy.get('#transaction .button').click();
    cy.get('#description').type(entrada);
    cy.get('[name=amount]').type(100);
    cy.get('[type=date]').type('2025-06-27');
    cy.get('button').contains('Salvar').click();

    // Cadastrando saída
    cy.get('#transaction .button').click();
    cy.get('#description').type(saida);
    cy.get('[name=amount]').type(-35);
    cy.get('[type=date]').type('2025-06-27');
    cy.get('button').contains('Salvar').click();

    // Remover entrada
    cy.contains('td.description', entrada)
      .siblings()
      .find('img[onclick*=remove]')
      .click();

    // Remover saída
    cy.contains('td.description', saida)
      .siblings()
      .find('img[onclick*=remove]')
      .click();

    // Verifica se não há mais transações
    cy.get('#data-table tbody tr').should('have.length', 0);
  });

});
