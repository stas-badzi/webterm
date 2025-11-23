const ICANON = 2 // Buffer lines
const ECHO = 8 // Echo input ot the console

class Termios {
    constructor() {
        this.LocalFlags = ICANON | ECHO;
    }
};
