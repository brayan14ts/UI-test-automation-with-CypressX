describe('Section CHECKOUT: OVERVIEW', () => {

  beforeEach('login successfull', () => {
    // Dado que un usuario ha iniciado sesion
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce{enter}');
  });

  // ---------------------------------SOLUCION 1 - OK ----------------------------------------
  it.only('Validate purchase tax', function () {
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    // Cuando selecciona tres productos de la sección 'PRODUCTS'
    cy.get('.btn_primary').last().click()
    cy.get('.btn_primary').eq(1).click()
    cy.get('.btn_primary').first().click()

    // se calculó 'subtotal', 'tax' y 'total' mediante la suma de los productos seleccionados
    cy.get('.inventory_item_price').last().then(itemPrice => {
      let strPrice1 = itemPrice.text()
      subtotal += Number(strPrice1.slice(1))
    })
    cy.get('.inventory_item_price').eq(1).then(itemPrice => {
      let strPrice2 = itemPrice.text()
      subtotal += Number(strPrice2.slice(1))
    })
    cy.get('.inventory_item_price').first().then(itemPrice => {
      let strPrice3 = itemPrice.text()
      subtotal += Number(strPrice3.slice(1))
      tax = Number((subtotal * .08).toFixed(2))
      total = subtotal + tax
      console.log(strPrice3)

      // Y hace clic en carrito
      cy.get('.shopping_cart_badge').click();
      // Y confirma los productos seleccionados en 'YOUR CART'
      cy.get('[data-test="checkout"]').click();
      // Y completa los datos del usuario en 'CHECKOUT: YOUR INFORMATION'
      cy.get('[data-test="firstName"]').type('Pepe');
      cy.get('[data-test="lastName"]').type('Carabobo');
      cy.get('[data-test="postalCode"]').type('1201');
      cy.get('[data-test="continue"]').click();

      // Entonces es dirijido a la seccion 'CHECKOUT: OVERVIEW'
      // Y se visualiza el 'subtotal', 'tax' y 'total' de la compra
      cy.get('.summary_subtotal_label').contains(subtotal)
      cy.get('.summary_tax_label').contains(tax)
      cy.get('.summary_total_label').contains(total)
    });
  })


  // validar que 3 productos seleccionados en 'PRODUCTS' corresponden con el cantidad, nombre y precio

})