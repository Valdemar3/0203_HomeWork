class AuthorizationPage {
    visit() {
        cy.visit('/')
    }

    closeWellcome() {
        return cy.get('button[color="primary"]', {timeout:20000})
    }

    getAccountButton() {
        return cy.get('#navbarAccount')
    }
    
    getNavLogInButton() {
        return cy.get('#navbarLoginButton')
    }

    getEmailIput() {
        return cy.get('#email')
    }
   
    getPaswInput() {
        return cy.get('#password')
    }
    
    getLogInButton() {
        return cy.get('button[id="loginButton"]')
    }

    verifyIfLoggedIn() {
       return cy.get(`button[aria-label="Go to user profile"] span`) 
    }

    authorizationUser(userAuthoriz) {
        cy.log('**Visit Main Page**')
        this.visit()
        cy.log('**Close Wellcoce**')
        this.closeWellcome().click()
        cy.log('**Open Authoriz Page**')
        this.getAccountButton().click()
        this.getNavLogInButton().click()
        cy.log('**FillIn all fields**')
        this.getEmailIput().type(userAuthoriz.email)
        this.getPaswInput().type(userAuthoriz.pasw)
        cy.log('**Tap Submit Button**')
        this.getLogInButton().click()
        cy.log('**Verivy User is LoggedIn**')
        this.getAccountButton().click()
        this.verifyIfLoggedIn().should('have.text', ` ${userAuthoriz.email} `)

    }

} export default new AuthorizationPage()