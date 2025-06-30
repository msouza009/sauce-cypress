describe('Efetuando Login', () => {
  it.only('Login Realizado com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')
  })

  it.only('Login com usuário bloqueado', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it.only('Login com usuário problem_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')
  })

  it.only('Login com usuário de performance', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')
  })

  it.only('Login com usuário error', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('error_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')
  })

  it.only('Login com usuário visual', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('visual_user')
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