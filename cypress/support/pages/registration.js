class RegistrationPage {

visit() {
    cy.log('**Open main page**')
    cy.visit('/')
}

closeWellcome() {
    return cy.get('button[color="primary"]')
}

getAccountButton() {
    return cy.get('#navbarAccount')
}

getLogInButton() {
    return cy.get('#navbarLoginButton')
}

getRegistPage() {
    return cy.get('div[id="newCustomerLink"] a.primary-link')
}

getEmailInput() {
    return cy.get('#emailControl')
}

getPaswInput() {
    return cy.get('#passwordControl')
}

getRepearPaswInput() {
    return cy.get('#repeatPasswordControl')
}

getSecurQuestipn() {
    return cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex')
}

getAnswerInput() {
    return cy.get('[data-placeholder="Answer to your security question"]')
}

getSubmitButton() {
    return cy.get('#registerButton') 
}

showFakerInfo() {
    console.log()
}

registerNewUser(userRegistation) {
    cy.log('**Visit Main Page**')
    this.visit()
    cy.log('**Close Wellcoce**')
    this.closeWellcome().click()
    cy.log('**Open Resgistration Page**')
    this.getAccountButton().click()
    this.getLogInButton().click()
    this.getRegistPage().click()
    cy.log('**Fill In Fields**')
    this.getEmailInput().type(userRegistation.email)
    this.getPaswInput().type(userRegistation.pasw)
    this.getRepearPaswInput().type(userRegistation.pasw)
    this.getSecurQuestipn().click().then(question => {
        cy.wrap(question).get('span.mat-option-text:contains("ZIP")').click()
      })
    this.getAnswerInput().type(userRegistation.answer)
    this.getSubmitButton().click()
    console.log(userRegistation.email,`--`, userRegistation.pasw)
}

}
export default new RegistrationPage()