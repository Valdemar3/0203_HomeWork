///<reference types="cypress"/>

//fixtures:
import * as userRegistration from "../fixtures/userRegistation.json"
import * as userAuthoriz from "../fixtures/userAuthoriz.json"
import * as nameOfGood from "../fixtures/nameOfGood.json"
import * as shipAddress from "../fixtures/shipAddress.json"
import * as billingInf from "../fixtures/billingInf.json"
//support:
import { fakerRegist, fakerRegistErrorEmail, fakerRegistErrorPasw, fakerRegistErrorAswer } from "../support/fakerRegistr"
import { fakerAddress } from "../support/fakerAdress"
import {fakerBilling} from "../support/fakerBilling"
import { searchGood } from "../support/searchGood"
//pages:
import registration from "../support/pages/registration"
import authoriztion from "../support/pages/authoriztion"
import bookGood from "../support/pages/bookGood"

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

    //search good on the web site
    searchGood(nameOfGood)
    //create fake Data for shipping
    fakerAddress(shipAddress)
    //create fake Data for Billing
    fakerBilling(billingInf)
    //book this good
    bookGood.fillInShippingData(shipAddress, billingInf)
    
  })
})