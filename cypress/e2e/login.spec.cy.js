describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").should('be.visible').type('Admin')
    cy.get("[name='password']").should('be.visible').type('admin123')
    cy.get("[type='submit']").should('be.visible').click('center')
    cy.location('pathname').should('be.equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible').contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").should('be.visible').type('Qwerty')
    cy.get("[name='password']").should('be.visible').type('admin123')
    cy.get("[type='submit']").should('be.visible').click('center')
    cy.get("[role='alert']").should('be.visible')
  })
})