///<reference types="cypress"/>

import * as userRegistration from "../fixtures/userRegistation.json"
import * as userAuthoriz from "../fixtures/userAuthoriz.json"
import { fakerRegist, fakerRegistErrorEmail, fakerRegistErrorPasw, fakerRegistErrorAswer } from "../support/fakerRegistr"
import registration from "../support/pages/registration"
import authoriztion from "../support/pages/authoriztion"

describe('Test Suite for JuciHiuci', () => {
  describe.skip('Registration suites', () => {
    it('Registaration True', () => {
      //start faker function to set random LogIn information
      fakerRegist(userRegistration)
      //fillIn all fields and register New User
      registration.registerNewUser(userRegistration)
    })
    it('Registration with error Email',() =>{
      //start faker function to set random LogIn information
      fakerRegistErrorEmail(userRegistration)
      //fillIn all fields and register New User
      registration.registerNewUser(userRegistration)
    })
    it('Registration with error Pasw',() =>{
      //start faker function to set random LogIn information
      fakerRegistErrorPasw(userRegistration)
      //fillIn all fields and register New User
      registration.registerNewUser(userRegistration)
    })
    it('Registration with error Answ',() =>{
      //start faker function to set random LogIn information
      fakerRegistErrorAswer(userRegistration)
      //fillIn all fields and register New User
      registration.registerNewUser(userRegistration)
    })
  })

  it('Authorization', () => {
    
    //start authorization and verivy
    authoriztion.authorizationUser(userAuthoriz)

  })
})