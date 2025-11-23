// This is an example of how you could connect the terminal with a server

const params = new URLSearchParams(window.location.search);
const argv_param = params.get("argv");
const argc_param = params.get("argc");
const argc = argc_param ? parseInt(argc_param) : 0;
const argv = (argv_param && argv_param.length > 0 && argv_param != 'undefined') ? JSON.parse(argv_param) : [];

var SendOutput = null;
var GetScreenDimensions = null;
var GetTermios = null;
var SetTermios = null;


var oldterm = null;

// typed text + '\b' = backspace; '\7f' = delete
function HandleInput(appendinput) {
    console.log(appendinput);
}

function HandleKeys(event) {
    console.log(event);
}

function OnUnload() {
    // not needed, it's not preseved beetween sessions
    SetTermios(oldterm);
    SendOutput("\x1b[?1003l"); // Turn off mouse tracking
    SendOutput("\x1b[?1006l"); // Turn off extended mouse tracking
    SendOutput("\x1b[?1004l"); // Turn off gain/lost focus reporting
    SendOutput("\x1b[?1049l"); // Switch to alternate buffer
    console.log("disconnecting...");
}

// This will be called by script.js, when the terminal is initialized
function Main(SendOutputFunction,GetScreenDimensionsFunction,GetTermiosFunction,SetTermiosFunction) {
    SendOutput=SendOutputFunction;
    GetScreenDimensions=GetScreenDimensionsFunction;
    GetTermios=GetTermiosFunction;
    SetTermios=SetTermiosFunction;

    SendOutput("\x1b[?1003h"); // Turn on mouse tracking
    SendOutput("\x1b[?1006h"); // Turn on extended mouse tracking
    SendOutput("\x1b[?1004h"); // Turn on gain/lost focus reporting
    SendOutput("\x1b[?1049h"); // Switch to alternate buffer
    oldterm = GetTermios();
    let newterm = oldterm;
    newterm.LocalFlags &= ~ICANON; // don't buffer input
    SetTermios(newterm);

    // return functions (or null[s] to ignore) to be called when [0]standard input or [1]key states change,
    return {
        InputHandler: HandleInput,
        KeyboardHandler: HandleKeys,
        ExitHandler: OnUnload
    }
}
