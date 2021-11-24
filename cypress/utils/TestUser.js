export class TestUser {

    constructor() {
        this.email = this.getRandomEmail()
        this.password = this.getRandomNumber(8)
    }

    getRandomEmail() {
        return "josenunez" + this.getRandomNumber(8) + "@gmail.com"
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
