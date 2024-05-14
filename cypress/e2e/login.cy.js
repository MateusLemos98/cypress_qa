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

})