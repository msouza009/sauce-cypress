import { faker } from '@faker-js/faker';

describe('Efetuando Compras', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Efetuando Compra simplificada', () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.contains('Checkout: Your Information').should('be.visible');
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Checkout: Complete!').should('be.visible');
    });

    it('Removendo alguns itens do carrinho', () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.contains('Checkout: Your Information').should('be.visible');
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Checkout: Complete!').should('be.visible');
    })

    it('Efetuando compra acessando detalhes do produto', () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();

        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
        cy.contains('Add to cart').should('be.visible').click();
        cy.contains('Back to products').should('be.visible').click();
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').click();
        cy.contains('Add to cart').should('be.visible').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.contains('Checkout: Your Information').should('be.visible');
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Checkout: Complete!').should('be.visible');
    })
});