describe('Login Page', () => {

  beforeEach('visit to login page', () => {
    cy.visit('/');
  });

  describe(('Happy path'), () => {
    it('log in success (standard_user)', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('contains', '/inventory.html')
    });

    it.skip('Validate performance at login (performance_glitch_use)', () => {
      cy.get('[data-test="username"]').type('performance_glitch_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      // necesito validar que el tiempo en acceder no sea tan alto (problema de performance)
      cy.url().should('eq', '/inventory.html')
    });

    it('login with problem_user', function() {
      cy.get('[data-test="username"]').type('problem_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('contains', '/inventory.html')
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('hola', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('[data-test="username"]').clear('gh');
      cy.get('[data-test="username"]').type('ghghghghghgh');
      cy.get('[data-test="password"]').clear('h');
      cy.get('[data-test="password"]').type('hghghghghghghgh');
      cy.get('[data-test="login-button"]').click();
      /* ==== End Cypress Studio ==== */
    });
  })

  describe(('Negative tests'), () => {
    it('log in with invalid password', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('dummyPass');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
    });

    it('Login with invalid user', () => {
      cy.get('[data-test="username"]').type('dummyUser');
      cy.get('[data-test="password"]').type('hola123');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
    });

    it('Login with empty password', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
    });

    it('Login with empty user', () => {
      cy.get('[data-test="password"]').type('hola123');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
    });

    it('Login with blocked user (locked_out_user)', () => {
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
    });
  });
});