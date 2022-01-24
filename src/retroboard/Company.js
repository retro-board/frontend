import { RetroBoard } from "@/retroboard/RetroBoard";

export class Company extends RetroBoard {
    constructor() {
        super();
    }

    nameCheck(name) {
        return new Promise((resolve, reject) => {
            if (name.length < 3) {
                reject('Name must be at least 3 characters long');
            } else {
                resolve(name);
            }
        });
    }
}