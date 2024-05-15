/// <reference types="cypress" />

context('login do Saucedemo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/")
    });

    it('Login válido', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', "Products")
    });

    it('Falhas no login', () => {
        cy.fixture('logins_falhos.json').then((dados) =>{
            // const primeiroUser = dados.dadosLogin[3]

            dados.dadosLogin.forEach((dadosLogin) => {
                cy.get('[data-test="username"]').clear()
                cy.get('[data-test="password"]').clear()

                if (dadosLogin.usuario != '') {
                    cy.get('[data-test="username"]').type(dadosLogin.usuario)
                }
                if (dadosLogin.senha != '') {
                    cy.get('[data-test="password"]').type(dadosLogin.senha)
                }
                cy.get('#login-button').click()
                cy.get('[data-test="error"]').should('have.text', dadosLogin.mensagem)
            })
        })
        
    });

})