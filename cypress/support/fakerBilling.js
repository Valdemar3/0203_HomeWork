import { faker } from "@faker-js/faker"
// import { faker } from '@faker-js/faker/locale/de';

export function fakerBilling(billingInf) {
    
    billingInf.cardNumber = faker.finance.creditCardNumber('63[7-9]############L')
    billingInf.expMonth = faker.random.numeric()
    
}


