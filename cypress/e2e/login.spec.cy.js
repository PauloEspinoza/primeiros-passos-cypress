describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).should('be.visible').type('Admin')
    cy.get(selectorsList.passwordField).should('be.visible').type('admin123')
    cy.get(selectorsList.loginButton).should('be.visible').click('center')
    cy.location('pathname').should('be.equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).should('be.visible').contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).should('be.visible').type('Qwerty')
    cy.get(selectorsList.passwordField).should('be.visible').type('admin123')
    cy.get(selectorsList.loginButton).should('be.visible').click('center')
    cy.get(selectorsList.wrongCredentialAlert).should('be.visible')
  })
})