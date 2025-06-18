describe('Efetuando Login', () => {
  it.only('Login Realizado com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')
  })

  it.only('Login com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('user_invalido')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
  
    it.only('Login com senha inválida', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('user_invalido')
    cy.get('[data-test="password"]').type('secret_sauce_invalida')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

    it.only('Login com campos vázios', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })
})