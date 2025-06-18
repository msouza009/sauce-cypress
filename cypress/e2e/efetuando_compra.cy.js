import { faker } from '@faker-js/faker';

describe('Efetuando Compra simplificada', () => {
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
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Checkout: Complete!').should('be.visible');
    });
});