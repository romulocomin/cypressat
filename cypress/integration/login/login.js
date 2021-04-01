/// <reference types="Cypress" />

context('login', () => {
    beforeEach(() => {
        cy.visit('https://atleta.teste.goatme.app/');
        cy.wait(6000)
    });

    it('should fill register form at homepage', () => {
        // cy.get('YOUR_BUTTON_CLASS').contains('Customer');
        cy.get('[data-v-8cf0a0e0]').contains('Cadastrar').click()
            .then(() => {
                cy.wait(1500)
            })
        cy.get('input[type="text"]').click({ multiple: true, force: true })
        cy.get('.vdatetime-year-picker').find('div').contains('1984').click()
        cy.get('.vdatetime-month-picker').find('div').contains('Outubro').click()
        cy.get('.vdatetime-calendar__month__day').find('span').contains('25').click()
        cy.get('button').contains('Avançar').click()
        /* cy.get('#search_input').type('futebol').then(
            ()=>{
                cy.get('.kNbXwS').contains('Futebol').then((el)=>{
                    
        console.log(el)
                })
        
            }
        ) */
        cy.get('.kNbXwS').each(($el, index) => {
            const texto = $el.text();
            if (texto === "Futebol") {
                $el.on('click', () => { })
                console.log(texto)
                cy.wrap($el).click()
            }

        })
        cy.get('.dGKTlf').click({ multiple: true, force: true })

    });

});