# WebTerm
A webpage terminal renderer witten in html, css and plain javascript

## Documentation
### API Imports
- `OnUnload()` -> get's called on before the page unloads
- `HandleInput(newinput)` -> get's called whenever there is new input available
- `HandleKeys(event)` -> get's called whenever a keyboard event is triggered
  ```javascript
  event = {
    type: (event_type),
    val: (Key/Toggle)
  }
  ```
  `event_type`, `Key` and `Toggle` are defined in [key.js](https://github.com/stas-badzi/webterm/blob/main/key.js)
### API Exports

- `GetScreenDimensions()` -> returns `{rows: character_rows,columns:#}`
- `class TermIOS` see [termios.js](https://github.com/stas-badzi/webterm/blob/main/termios.js)

  Members:
  - `LocalFlags` -> a bitfield, currently supporting `ICANON` (Do input buffering) and `ECHO` (Do print input to the console), both by default `true`

  Functions:
  - `GetTermios()` -> returns the `Termios` of the terminal
  - `SetTermios(newtermios)` -> overrides the `Termios` of the terminal with `newtermios`
- `SendOutput(string)` -> sends output to console
  - Supports most [ANSI Escape Codes](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797), mainly:
    - Cursor movement
    - 16 Colors
  - Supports some [XTerm Control Sequences](https://invisible-island.net/xterm/ctlseqs/ctlseqs.pdf):
    - Cursor visibility/shape/blinking `\e[?25h` / `\e[?25l` ; `\e[# q` (only visibility and steady/blinking supported for now)
    - Save/Restor cursor and switch between the Normal and Alternate Screen Buffer `\e[?1049h` / `\e[?1049l`
    - SGR Mouse PixelMode Tracking `\e[?1003h` + `\e[?1016h` (Also enabled here by `\e[?1003h` + `\e[?1016h`)
    - FocusIn/FocusOut events `\e[?1004h`
  - In addition it handles custom Escape Sequences:
    - ```javascript
      `\e@${argv[0]}\t${argv[1]}\t${argv[2]}\a`
      ```
      Opens a popup window ignoring argv[0], and passing the rest in the query string:
      ```
        let query = new URLSearchParams();
        query.append("argc",argv.length);
        query.append("argv",JSON.stringify(argv));
        query.append("argc",argv.length);
        document.open(url+"?"+query.toString(),...);
      ```
      <br/>
    - `\e[#` Closes the window without calling `OnUnload()` (tries `window.close()`, `window.history.back()` and `window.location="about:blank"` in order)
## Example use
My terminal based game [FactoryRush](https://github.com/stas-badzi/c-c-collab) is hosted using this project [here](https://stasbadzi.w.staszic.waw.pl/terminal) ([source](https://github.com/stas-badzi/staszic-page/blob/active/src/implementation.js))
