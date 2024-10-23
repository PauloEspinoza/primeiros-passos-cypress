import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).should('be.visible').type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).should('be.visible').type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).should('be.visible').click('center')
    cy.location('pathname').should('be.equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid).should('be.visible')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).should('be.visible').type(userData.userFail.username)
    cy.get(selectorsList.passwordField).should('be.visible').type(userData.userFail.password)
    cy.get(selectorsList.loginButton).should('be.visible').click('center')
    cy.get(selectorsList.wrongCredentialAlert).should('be.visible')
  })
})