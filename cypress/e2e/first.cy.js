import { faker } from "@faker-js/faker"
import * as userRegistration from "../fixtures/userRegistation.json"
import * as userAuthoriz from "../fixtures/userAuthoriz.json"


userRegistration.email = faker.internet.email('Naomi', 'Kembel', 'gmail.com', {allowSpecialCharacters:false});
userRegistration.pasw = faker.internet.password(10)
userRegistration.answer = faker.address.zipCode('####')

//createRandomUser(email,pasw)

describe('Test Suite for JuciHiuci', () => {
  it('Registaration', () => {
    cy.log('**Open main page**')
    cy.visit('/')
    cy.get('button[color="primary"]').click()
    cy.get('#navbarAccount').click()
    cy.get('#navbarLoginButton').click()
    cy.get('div[id="newCustomerLink"] a.primary-link').click()
    cy.log('**Fill in Registation**')
    cy.get('#emailControl').type(userRegistration.email)
    cy.get('#passwordControl').type(userRegistration.pasw)
    cy.get('#repeatPasswordControl').type(userRegistration.pasw)
    cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex').click().then(question => {
      cy.wrap(question).get('span.mat-option-text:contains("ZIP")').click()
    })
    cy.get('[data-placeholder="Answer to your security question"]').type(userRegistration.answer)
    cy.get('#registerButton').click()
    console.log(userRegistration.email,`--`, userRegistration.pasw)
  })

  it('Authorization', () => {
    cy.log('**Open LogIn Page**')
    cy.visit('/')
    cy.get('button[color="primary"]').click()
    cy.get('#navbarAccount').click()
    cy.get('#navbarLoginButton').click()
    cy.get('#email').type(userAuthoriz.email)
    cy.get('#password').type(userAuthoriz.pasw)
    cy.get('#loginButton').click()
  })
})