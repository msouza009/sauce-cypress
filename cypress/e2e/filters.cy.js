describe('Filtros do sistema', () => {
    beforeEach(() => {
        cy.login();
    });
    
    it.only('Filtra nome de (A to Z)', () => {
        cy.get('[data-test="product-sort-container"]').select('az');
        cy.get('.inventory_item_name').then($els => {
            const texts = [...$els].map(el => el.innerText);
            const sorted = [...texts].sort();
            expect(texts).to.deep.equal(sorted);
        });
    });

    it.only('Filtra nome de (Z to A)', () => {
        cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('.inventory_item_name').then($els => {
        const texts = [...$els].map(el => el.innerText);
        const sorted = [...texts].sort().reverse();
        expect(texts).to.deep.equal(sorted);
        });
    });

    it.only('Filtra preço de (low to high)', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('.inventory_item_price').then($els => {
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
        });
    });

    it.only('Filtra preço de (high to low)', () => {
        cy.get('[data-test="product-sort-container"]').select('hilo');
        cy.get('.inventory_item_price').then($els => {
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sorted);
        });
    });

});