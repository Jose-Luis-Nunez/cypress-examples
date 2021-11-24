export class TestUser {

    constructor() {
        this.email = this.getRandomEmail()
        this.password = this.getRandomNumber(8)
        this.addressStreet = this.getRandomStreet()
        this.phoneNumber = this.getRandomPhoneNumber()
    }

    getRandomPhoneNumber() {
        return "176" + this.getRandomNumber(7)
    }

    getRandomEmail() {
        return "josenunez" + this.getRandomNumber(8) + "@gmail.com"
    }

    getRandomStreet() {
        return "Brunnenstraße " + this.getRandomNumber(2)
    }

    getRandomNumber(numberOfDigits) {
        let min = 1;
        let max = 9;

        for (let i = 0; i < numberOfDigits; i++) {
            if (i > 0) {
                min = min * 10
                max = max * 10
            }
        }
        return Math.floor(min + Math.random() * max)
    }
}
