import { faker } from "@faker-js/faker"
// import { faker } from '@faker-js/faker/locale/de';

export function fakerDataComments(dataCommnets) {
    
    dataCommnets.comment = faker.lorem.sentence(5)
    dataCommnets.rating = faker.random.numeric(1, { bannedDigits: ['0','6','7','8','9'] })
    
}


