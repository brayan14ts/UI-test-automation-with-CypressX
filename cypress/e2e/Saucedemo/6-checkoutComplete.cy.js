describe('Section CHECKOUT: OVERVIEW', () => {

  beforeEach('login successfull', () => {
    // Dado que un usuario ha iniciado sesion
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce{enter}');
  });

})