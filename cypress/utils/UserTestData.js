export class UserTestData {
    constructor() {
        this.email = this.getRandomEmail();
        this.password = this.getRandomPassword();
    }

    getRandomPassword() {
        return `pw${ this.getCurrentTime() }`;
    }

    getRandomPhoneNumber() {
        return `${ this.getCurrentTime() }${this.getRandomDigit(9)}`;
    }

    getRandomEmail() {
        return `josenunezumi+${this.getCurrentTime()}${this.getRandomDigit(999)}@gmail.rofl`;
    }

    getCurrentTime() {
        return Date.now();
    }

    getRandomDigit(max) {
        return Math.floor(Math.random() * (max + 1));
    }
}
