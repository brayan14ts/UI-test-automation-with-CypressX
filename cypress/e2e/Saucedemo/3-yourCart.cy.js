describe('Section YOUR CART', () => {

  beforeEach('login successfull', () => {
    // Dado que un usuario ha iniciado sesion
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce{enter}');
  });

// validar que 3 productos seleccionados en 'PRODUCTS' corresponden a cantidad, nombre y precio
// validfar orden de selección
})