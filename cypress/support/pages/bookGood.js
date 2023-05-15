class bookGood {

getBusket() {
    return cy.get('button[routerlink="/basket"]')
}

getCheckout() {
    return cy.get('#checkoutButton')
}

getAddressCreate() {
    return cy.get('button[aria-label="Add a new address"]')
}

getCountry() {
    return cy.get('input[placeholder="Please provide a country."]')
}

getName() {
    return cy.get('input[placeholder="Please provide a name."]')
}

getMobNumber() {
    return cy.get('input[placeholder="Please provide a mobile number."]')
}

getZipCode() {
    return cy.get('input[placeholder="Please provide a ZIP code."]')
}

getAddress() {
    return cy.get('#address')
}

getCity() {
    return cy.get('input[placeholder="Please provide a city."]')
}

getState() {
    return cy.get('input[placeholder="Please provide a state."]')
}

getSubmit() {
    return cy.get('#submitButton')
}

chooseAdress() {
    return cy.get('mat-cell.mat-cell')
}

getContinue() {
    return cy.get('button:contains("Continue")')
}

getDelivery() {
    return cy.get('mat-row.mat-row')
}

addNewCard() {
    return cy.get('#mat-expansion-panel-header-0')
}

getCardName() {
    return cy.get('mat-label:contains("Name")')
}

getCardNumber() {
    return cy.get('mat-label:contains("Card Number")')
}

getExpMonth() {
    return cy.get('mat-label:contains("Expiry Month")')
}

getExpYear() {
    return cy.get('mat-label:contains("Expiry Year")')
}

getPlaceOrder() {
    return cy.get('button[id="checkoutButton"]')
}

getConfOrder() {
    return cy.get('h1:contains("Thank you for your purchase!")')
}

fillInShippingData(shipAddress, billingInf) {
    cy.log('**Open Shopping Basket**')
    this.getBusket().click({force:true},{setTimeout:5000})
    cy.log('**Tap Chekout button**')
     cy.wait(2000) 
    this.getCheckout().click({force:true})   
    cy.log('**Tap Add new address**')
    
    this.getAddressCreate().click({force:true})  
    //cy.wait(6000)
    cy.log('**Fill in Country**')
    this.getCountry().type(shipAddress.country, {force: true})
    cy.log('**Fill in Name**')
    this.getName().type(shipAddress.name, {force: true})
    cy.log('**Fill in Mobile number**')
    this.getMobNumber().type(shipAddress.mNumber, {force: true})
    cy.log('**Fill in ZipCode**')
    this.getZipCode().type(shipAddress.zipCode, {force: true})
    cy.log('**Fill in Address**')
    this.getAddress().type(shipAddress.address, {force: true})
    cy.log('**Fill in City**')
    this.getCity().type(shipAddress.city, {force: true})
    cy.log('**Fill in State**')
    this.getState().type(shipAddress.state, {force: true})
    cy.log('**Tap Submit button**')
    this.getSubmit().click({force: true})
    cy.log('**Choosing Address**')
    this.chooseAdress().eq(0).click({force:true})
    //cy.wait(2000)
    cy.log('**Tap Continue**')
    this.getContinue().click({force: true})
    cy.log('**Choose Delivery method**')
    this.getDelivery().eq(1).click({force:true})
    cy.log('**Choose Delivery method**')
    this.getContinue().click({force: true})
    cy.log('**Add New Card**')
    this.addNewCard().click({force: true})
    cy.log('**Type Name of Cards owner**')
    this.getCardName().parents('.mat-form-field-infix').then(cName => {
        cy.wrap(cName).find('.mat-input-element.mat-form-field-autofill-control')
        .type(shipAddress.name, {force: true})
    })
    cy.log('**Type Number of the Card**')
    this.getCardNumber().parents('.mat-form-field-infix').then(cNumber => {
        cy.wrap(cNumber).find('.mat-input-element.mat-form-field-autofill-control')
        .type(billingInf.cardNumber, {force: true})
        console.log(billingInf.cardNumber)
    })
    cy.log('**Chose Expiry month**')
    this.getExpMonth().parents('.mat-form-field-infix').then(expDate => {
        cy.wrap(expDate).find('.mat-input-element.mat-form-field-autofill-control')
        .select(2, {force: true})
    })
    cy.log('**Chose Expiry year**')
    this.getExpYear().parents('.mat-form-field-infix').then(expYear => {
        cy.wrap(expYear).find('.mat-input-element.mat-form-field-autofill-control')
        .select('2090', {force: true})
    })
    cy.log('**Tap on Submit button**')
    this.getSubmit().click({force: true})
    cy.log('**Choose Bank Card**')
    cy.get(`mat-cell:contains("${shipAddress.name}")`).parents('.mat-row.cdk-row').then(getRadioButton => {
        cy.wrap(getRadioButton).find('mat-radio-button')
        .click({force: true})
    })
    this.getContinue().click({force: true})
    this.getPlaceOrder().click({force: true})
    cy.wait(4000)
    this.getConfOrder()
}


} export default new bookGood()