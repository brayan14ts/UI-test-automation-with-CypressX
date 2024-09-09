describe('Section PRODUCTS', () => {

  beforeEach('login successfull', () => {
    // Dado que un usuario ha iniciado sesion
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce{enter}');
  });

  it('Select a product', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click().should('not.exist');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');
  });

  it('Remove a product', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click().should('not.exist');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist');
  });

  // ordeanar de A-Z
  // ordeanar de Z-A
  // ordenar por precio ( mayor a menor)
  // ordenar por precio ( menor a a mayor)
  
  //ir al carrito sin seleccionar productos
  //seleccionar dos veces mismo producto
})