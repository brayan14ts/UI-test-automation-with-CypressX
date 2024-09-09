describe('Make a purchase', () => {

    beforeEach('login successfull', () => {
        // Dado que un usuario ha iniciado sesion
        cy.visit('/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce{enter}');
    });

    // ------------------------------------USO: INVOKE-------------------------------------------

    it('Validate purchase tax - 2', function () {
        // seleccionó tres productos
        cy.get('.btn_primary').last().click()
        cy.get('.btn_primary').eq(1).click()
        cy.get('.btn_primary').first().click()

        // se calculó 'subtotal', 'tax' y 'total' mediante la suma de los productos seleccionados
        cy.get('.inventory_item_price').last().invoke('text').as('strPrice1')
        cy.get('.inventory_item_price').eq(1).invoke('text').as('strPrice2')
        cy.get('.inventory_item_price').first().invoke('text').as('strPrice3')
    })

    // ------------------------------------USO: WRAP-------------------------------------------

    it('Validate purchase tax - 3', function () {
        // seleccionó tres productos
        cy.get('.btn_primary').last().click()
        cy.get('.btn_primary').eq(1).click()
        cy.get('.btn_primary').first().click()

        // se calculó 'subtotal', 'tax' y 'total' mediante la suma de los productos seleccionados
        cy.get('.inventory_item_price').last().then(itemPrice => {
            let price1 = Number((itemPrice.text()).slice(1))
            cy.wrap(price1).as('price1')
        })
        cy.get('.inventory_item_price').eq(1).then(itemPrice => {
            let price2 = Number((itemPrice.text()).slice(1))
            cy.wrap(price2).as('price2')
        })
        cy.get('.inventory_item_price').first().then(itemPrice => {
            let price3 = Number((itemPrice.text()).slice(1))
            cy.wrap(price3).as('price3')
        });
    })

    it('llamar variable de otra prueba', function () {
        cy.log('INVOKE: ' + this.strPrice1)
        cy.log('WRAP: ' + this.price1)

    });
})
