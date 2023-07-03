import { uniqueNamesGenerator, colors, starWars, NumberDictionary } from 'unique-names-generator';

export class UserTestData {

    constructor() {
        this.email = this.getRandomEmail();
        this.password = this.getRandomPassword();
    }

    getRandomEmail() {
        const randomNumber = this.getRandomNumber(7);
        const characterName = uniqueNamesGenerator({
            dictionaries: [starWars, colors, randomNumber],
        })
        return `${characterName}@gmail.com`;
    }

    getRandomPassword() {
        return `pw${this.getRandomNumber(6)}`;
    }

    getRandomNumber(numberOfDigits) {
        let minRange = 1;
        let maxRange = 9;

        for (let i = 0; i < numberOfDigits; i++) {
            if (i > 0) {
                minRange = minRange * 10;
                maxRange = maxRange * 10;
            }
        }
        return NumberDictionary.generate({min: minRange, max: maxRange});
    }
}
