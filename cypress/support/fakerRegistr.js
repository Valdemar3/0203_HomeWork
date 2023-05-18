import { faker } from "@faker-js/faker"
// import { faker } from '@faker-js/faker/locale/de';

export function fakerRegist(userRegistration) {
    
    userRegistration.email = faker.internet.email('Naomi', 'Kembel', 'gmail.com', {allowSpecialCharacters:false});
    userRegistration.pasw = faker.internet.password(10);
    userRegistration.answer = faker.address.zipCode('####');
    
}

export function fakerRegistErrorEmail(userRegistration) {
    
    userRegistration.email = faker.internet.password(10);
    userRegistration.pasw = faker.internet.password(10);
    userRegistration.answer = faker.address.zipCode('####');
    
}

export function fakerRegistErrorPasw(userRegistration) {
    
    userRegistration.email = faker.internet.email('Naomi', 'Kembel', 'gmail.com', {allowSpecialCharacters:false});
    userRegistration.pasw = faker.internet.password(100000);
    userRegistration.answer = faker.address.zipCode('####');
    
}

export function fakerRegistErrorAswer(userRegistration) {
    
    userRegistration.email = faker.internet.email('Naomi', 'Kembel', 'gmail.com', {allowSpecialCharacters:false});
    userRegistration.pasw = faker.internet.password(100000);
    userRegistration.answer = faker.address.zipCode('################################################################################################################################################################################################################################################################################################################################');
    
}