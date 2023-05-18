import { faker } from "@faker-js/faker"
// import { faker } from '@faker-js/faker/locale/de';

export function fakerAddress(shipAddress) {
    
    shipAddress.country = faker.address.country()
    shipAddress.name = faker.internet.userName()
    shipAddress.mNumber = faker.phone.number('3## ### # ###')
    shipAddress.zipCode = faker.address.zipCode('####')
    shipAddress.address = faker.address.streetAddress(true)
    shipAddress.city = faker.address.city()
    shipAddress.state = faker.address.state()
    
}


