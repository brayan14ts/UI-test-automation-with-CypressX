describe('Section CHECKOUT: YOUR INFORMATION', () => {

  beforeEach('login successfull', () => {
    // Dado que un usuario ha iniciado sesion
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce{enter}');
  });

  //usuario completa todos sus datos correctamente

  //no escribe su nombre
  //no escribe su apellido
  //no escribe su codigo postal

  //escribe un nombre de numeros
  //escribe un apellido de numeros
  //escribe un zipcode con solo letras


})