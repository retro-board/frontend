import cookie from 'cookie'

export class RetroBoard {
    constructor() {
        this.readCookie();
    }

    readCookie() {
        this.cookieDetails = cookie.parse('retro-board');
        console.log("cookies", this.cookieDetails);

        return false;
    }
}
