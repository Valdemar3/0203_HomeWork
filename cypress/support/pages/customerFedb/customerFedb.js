import resolveCaptcha from "./resolveCaptcha"
import * as userAuthoriz from "../../../fixtures/userAuthoriz.json"
import * as dataComments from "../../../fixtures/dataComments.json"
import math, { string, typeOf } from "mathjs"


class customerFedb {

    visit() {
        return cy.visit('/#/contact')
    }
    checkAuthor() {
        return cy.get('[aria-label="Field with the name of the author"]')
    }
    writeComment() {
        return cy.get('#comment')
    }
    giveRating() {
        return cy.get('mat-slider[aria-valuenow]')
    }
    getCaptcha() {
        return cy.get('#captcha')
    }
    writeCaptcha() {
        return cy.get('#captchaControl')
    }
    getSubmitButton() {
        return cy.get('button[id="submitButton"]')
    }

    customerFedb(userAuthoriz, dataComments) {
        cy.log('**Visit Customer Page**')
        this.visit()
        cy.wait(3000)
        cy.log('**Check if user is right**')
        // this.checkAuthor().invoke('val').then(author => {
        //     expect(author).not.to.be.empty
        // })
        cy.log('**Write a Comment**')
        this.writeComment().type(dataComments.comment, {force: true})
        cy.log('**Give Rating**')
        //doesnt work, becouse ther is no 'val' in Tag giveRating, and with this command I create new Propertie 'value' and set value 3 in that
        //this.giveRating().as('aria-valuenow').invoke('val', 3).trigger('change', {force: true})
        this.giveRating().invoke('attr', 'aria-valuenow', '3')
        .trigger('change', {force:true}).click({force:true})
        cy.log('**КResolve captcha**')
        let resOut=77;
        this.getCaptcha().then( valueCaptcha => {
            //expect(valueCaptcha).to.have.property('textContent')
            let resIn, resOut;
            resIn = valueCaptcha.prop('textContent')
            resOut = eval(resIn)
            //resOut = string(resOut)
            console.log(typeof(resOut))
            console.log(resOut)
        })
        cy.log('**Input captcha`a aswer to field**')
        this.writeCaptcha().type(valueCaptcha, {force:true})
        cy.log('**Press Submit button**')
        this.getSubmitButton().click({force:true})

    }

} export default new customerFedb()