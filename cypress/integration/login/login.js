/// <reference types="Cypress" />

const { element } = require("prop-types");

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
                
                return false
            }

        })
        cy.get('.dGKTlf').contains('Avançar').click({force:true})
        cy.wait(500)
        /* cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3)')
        .then(()=>{
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > input:nth-child(2)')
            .type('romulo comin cardozo')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > input:nth-child(3)')
            .type('@romulocc')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > input:nth-child(4)')
            .type('romuloccardozo@gmail.com')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > input:nth-child(5)')
            .type('romuloccardozo@gmail.com')
       
            cy.get("[type='password']").each(($el, index)=>{
                cy.log($el.attr('placeholder', "ssss"))
                
                if(index == 2|| index == 3) cy.wrap($el).type('123321')
            
            })
        })
        */
        cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > label:nth-child(10) > input[type=checkbox]')
        .check("1", {force:true})
        cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(3) > form > label:nth-child(11) > input[type=checkbox]')
        .check("1", {force:true}).then(()=>{
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(4) > form > input:nth-child(2)')
            .type('romulo comin cardozo')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(4) > form > input:nth-child(3)')
            .type('@rqqqomulocc')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(4) > form > input:nth-child(4)')
            .type('rqqqomuloccardozo@gmail.com')
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(4) > form > input:nth-child(5)')
            .type('rqqqomuloccardozo@gmail.com')
       
            cy.get("[type='password']").each(($el, index)=>{
                
                if(index == 4|| index == 5)  cy.wrap($el).type('123321') 
            
            })
            cy.get('#app > section > div > div.form-login > form:nth-child(4) > div:nth-child(4) > form > button')
            .contains('Cadastrar').click({force:true}).then(()=>{
                cy.wait(2000)
            })
            
            cy.get('[type="phone"]').type('55555555555')
            cy.get('#sign-in-button').click({force:true})
        })
        //cy.get('.checkmark').click({force:true})
    });

});