// Convert Javascript keyboard events to a format simillar to <linux/keyboard.h> 
const event_type = {key_down: 0, key_up: 1, toggle_on: 2, toggle_off: 3};

const Key = { 
    NONE: 0xffff, /* only in KeyPressed when no key is pressed */

    NUL: 0, /* ␀ */
    CTRL_A: 1, /* Ctrl + A */
    CTRL_B: 2, /* Ctrl + B */
    CTRL_C: 3, /* Ctrl + C */
    CTRL_D: 4, /* Ctrl + D */
    CTRL_E: 5, /* Ctrl + E */
    CTRL_F: 6, /* Ctrl + F */
    CTRL_G: 7, /* Ctrl + G */
    BACKSPACE: 8, /* ← [Ctrl + H] */
    TAB: 9, /* ⇥ [Ctrl + I] */
    LINEFEED: 10, /* ␊ [Ctrl + J] */
    CTRL_K: 11, /* Ctrl + K */
    CTRL_L: 12, /* Ctrl + L */
    CTRL_M: 13, /* Ctrl + M */
    CTRL_N: 14, /* Ctrl + N */
    CTRL_O: 15, /* Ctrl + O */
    CTRL_P: 16, /* Ctrl + P */
    CTRL_Q: 17, /* Ctrl + Q */
    CTRL_R: 18, /* Ctrl + R */
    CTRL_S: 19, /* Ctrl + S */
    CTRL_T: 20, /* Ctrl + T */
    CTRL_U: 21, /* Ctrl + U */
    CTRL_V: 22, /* Ctrl + V */
    CTRL_W: 23, /* Ctrl + W */
    CTRL_X: 24, /* Ctrl + X */
    CTRL_Y: 25, /* Ctrl + Y */
    CTRL_Z: 26, /* Ctrl + Z */
    ESC: 27, /* ␛ */
    CTRL_BACKSLASH: 28, /* Ctrl + \ */
    CTRL_BRACKETRIGHT: 29, /* Ctrl + [ */
    CTRL_ASCIICIRCUM: 30, /* Ctrl + ^ */
    CTRL_UNDERSCORE: 31, /* Ctrl + _ */
    SPACE: 32, /* ⎵ */
    ESCLAM: 33, /* ! */
    DBLQUOTE: 34, /* " */
    NUMBERSIGN: 35, /* # */
    DOLLAR: 36, /* $ */
    PERCENT: 37, /* % */
    AMPERSAND: 38, /* & */
    APOSTROPHE: 39, /* ' */
    PARENLEFT: 40, /* ( */
    PARENRIGHT: 41, /* ) */
    ASTERISK: 42, /* * */
    PLUS: 43, /* + */
    COMMA: 44, /* , */
    MINUS: 45, /* - */
    PERIOD: 46, /* . */
    SLASH: 47, /* / */
    /*$0*/ZERO: 48, /* 0 */
    /*$1*/ONE: 49, /* 1 */
    /*$2*/TWO: 50, /* 2 */
    /*$3*/THREE: 51, /* 3 */
    /*$4*/FOUR: 52, /* 4 */
    /*$5*/FIVE: 53, /* 5 */
    /*$6*/SIX: 54, /* 6 */
    /*$7*/SEVEN: 55, /* 7 */
    /*$8*/EIGHT: 56, /* 8 */
    /*$9*/NINE: 57, /* 9 */
    COLON: 58, /* , */
    SEMICOLON: 59, /* ; */
    LESS: 60, /* < */
    EQUAL: 61, /*: */
    GREATER: 62, /* > */
    QUESTION: 63, /* ? */
    AT: 64, /* @ */
    A: 65, /* A */
    B: 66, /* B */
    C: 67, /* C */
    D: 68, /* D */
    E: 69, /* E */
    F: 70, /* F */
    G: 71, /* G */
    H: 72, /* H */
    I: 73, /* I */
    J: 74, /* J */
    K: 75, /* K */
    L: 76, /* L */
    M: 77, /* M */
    N: 78, /* N */
    O: 79, /* O */
    P: 80, /* P */
    Q: 81, /* Q */
    R: 82, /* R */
    S: 83, /* S */
    T: 84, /* T */
    U: 85, /* U */
    V: 86, /* V */
    W: 87, /* W */
    X: 88, /* X */
    Y: 89, /* Y */
    Z: 90, /* Z */
    BRACKETLEFT: 91, /* [ */
    BACKSLASH: 92, /* \ */
    BRACKETRIGHT: 93, /* ] */
    ASCIICIRCUM: 94, /* ^ */
    UNDERSCORE: 95, /* _ */
    GRAVE: 96, /* `  */
    a: 97, /* a */
    b: 98, /* b */
    c: 99, /* c */
    d: 100, /* d */
    e: 101, /* e */
    f: 102, /* f */
    g: 103, /* g */
    h: 104, /* h */
    i: 105, /* i */
    j: 106, /* j */
    k: 107, /* k */
    l: 108, /* l */
    m: 109, /* m */
    n: 110, /* n */
    o: 111, /* o */
    p: 112, /* p */
    q: 113, /* q */
    r: 114, /* r */
    s: 115, /* s */
    t: 116, /* t */
    u: 117, /* u */
    v: 118, /* v */
    w: 119, /* w */
    x: 120, /* x */
    y: 121, /* y */
    z: 122, /* z */
    BRACELEFT: 123, /* { */
    BAR: 124, /* | */
    BRACERIGHT: 125, /* } */
    ASCIITILDE: 126, /* ~ */
    DEconstE: 127, /* ␡ */
    // generally from now on the values will differ in most charsets, the one's before only differ one's like cyrillic, greek, etc.
    EMPTY_1: 128, // in ISO-8859-* (latin-*) charsets chars 128-159 are invisable control chars, so they don't represent any key
    EMPTY_2: 129, // we include them here to so that they don't get tured into Key::Enum::HOLE when using Key::ToEnum('') with them
    EMPTY_3: 130,
    EMPTY_4: 131,
    EMPTY_5: 132,
    EMPTY_6: 133,
    EMPTY_7: 134,
    EMPTY_8: 135,
    EMPTY_9: 136,
    EMPTY_10: 137,
    EMPTY_11: 138,
    EMPTY_12: 139,
    EMPTY_13: 140,
    EMPTY_14: 141,
    EMPTY_15: 142,
    EMPTY_16: 143,
    EMPTY_17: 144,
    EMPTY_18: 145,
    EMPTY_19: 146,
    EMPTY_20: 147,
    EMPTY_21: 148,
    EMPTY_22: 149,
    EMPTY_23: 150,
    EMPTY_24: 151,
    EMPTY_25: 153,
    EMPTY_26: 153,
    EMPTY_27: 154,
    EMPTY_28: 155,
    EMPTY_29: 156,
    EMPTY_30: 157,
    EMPTY_31: 158,
    EMPTY_32: 159,
    NOBREAKSPACE: 160, /* ⍽ */
    EXCLAMDOWN: 161, /* ¡ */
    CENT: 162, /* ¢ */
    STERLING: 163, /* £ */
    CURRENCY: 164, /* ¤ */
    YEN: 165, /* ¥ */
    BROKENBAR: 166, /* ¦ */
    SECTION: 167, /* § */
    DIAERESIS: 168, /* ¨ */
    COPYRIGHT: 169, /* © */
    ORDFEMININE: 170, /* ª */
    GUILLEMOTLEFT: 171, /* « */
    NOTSIGN: 172, /* ¬ */
    HYPHEN: 173, /* - */
    REGISTERED: 174, /* ® */
    MACRON: 175, /* ¯ */
    DEGREE: 176, /* ° */
    PLUSMINUS: 177, /* ± */
    TWOSUPERIOR: 178, /* ² */
    THREESUPERIOR: 179, /* ³ */
    ACUTE: 180, /* ´ */
    MU: 181, /* µ */
    PARAGRAPH: 182, /* ¶ */
    PERIODCENTERED: 183, /* · */
    CEDILLA: 184, /* ç */
    ONESUPERIOR: 185, /* ¹ */
    MASCULINE: 186, /* ♂ */
    GUILLEMOTRIGHT: 187, /* » */
    ONEQUARTER: 188, /* ¼ */
    ONEHALF: 189, /* ½ */
    THREEQUARTERS: 190, /* ¾ */
    QUESTIONDOWN: 191, /* ¿ */
    A_GRAVE: 192, /* À */
    A_ACUTE: 193, /* Á */
    A_CIRCUMFLEX: 194, /* Â */
    A_TILDE: 195, /* Ã */
    A_DIAERESIS: 196, /* Ä */
    A_RING: 197, /* Å */
    AE: 198, /* Æ */
    C_CEDILLA: 199, /* Ç */
    E_GRAVE: 200, /* È */
    E_ACUTE: 201, /* É */
    E_CIRCUMFLEX: 202, /* Ê */
    E_DIAERESIS: 203, /* Ë */
    I_GRAVE: 204, /* Ì */
    I_ACUTE: 205, /* Í */
    I_CIRCUMFLEX: 206, /* Î */
    I_DIAERESIS: 207, /* Ï */
    ETH: 208, /* Ð */
    N_TILDE: 209, /* Ñ */
    O_GRAVE: 210, /* Ò */
    O_ACUTE: 211, /* Ó */
    O_CIRCUMFLEX: 212, /* Ô */
    O_TILDE: 213, /* Õ */
    O_DIAERESIS: 214, /* Ö */
    MULTIPLY: 215, /* × */
    O_SLASH: 216, /* Ø */
    U_GRAVE: 217, /* Ù */
    U_ACUTE: 218, /* Ú */
    U_CIRCUMFLEX: 219, /* Û */
    U_DIAERESIS: 220, /* Ü */
    Y_ACUTE: 221, /* Ý */
    THORN: 222, /* Þ */
    SHARP_S: 223, /* ß */
    a_grave: 224, /* à */
    a_acute: 225, /* á */
    a_circumflex: 226, /* â */
    a_tilde: 227, /* ã */
    a_diaeresis: 228, /* ä */
    a_ring: 229, /* å */
    ae: 230, /* æ */
    c_cedilla: 231, /* ç */
    e_grave: 232, /* è */
    e_acute: 233, /* é */
    e_circumflex: 234, /* ê */
    e_diaeresis: 235, /* ë */
    i_grave: 236, /* ì */
    i_acute: 237, /* í */
    i_circumflex: 238, /* î */
    i_diaeresis: 239, /* ï */
    eth: 240, /* ð */
    n_tilde: 241, /* ñ */
    o_grave: 242, /* ò */
    o_acute: 243, /* ó */
    o_circumflex: 244, /* ô */
    o_tilde: 245, /* õ */
    o_diaeresis: 246, /* ö */
    DIVISION: 247, /* ÷ */
    o_slash: 248, /* ø */
    u_grave: 249, /* ù */
    u_acute: 250, /* ú */
    u_circumflex: 251, /* û */
    u_diaeresis: 252, /* ü */
    y_acute: 253, /* ý */
    thorn: 254, /* þ */
    y_diaeresis: 255, /* ÿ */

    F1: 256, /* F1 */
    F2: 257, /* F2 */
    F3: 258, /* F3 */
    F4: 259, /* F4 */
    F5: 260, /* F5 */
    F6: 261, /* F6 */
    F7: 262, /* F7 */
    F8: 263, /* F8 */
    F9: 264, /* F9 */
    F10: 265, /* F10 */
    F11: 266, /* F11 */
    F12: 267, /* F12 */
    F13: 268, /* F13 */
    F14: 269, /* F14 */
    F15: 270, /* F15 */
    F16: 271, /* F16 */
    F17: 272, /* F17 */
    F18: 273, /* F18 */
    F19: 274, /* F19 */
    F20: 275, /* F20 */
    HOME: 276, /* Find [Home] */
    INSERT: 277, /* Insert */
    REMOVE: 278, /* Remove */
    END: 279, /* Select [End] */
    PGUP: 280, /* Prior [PageUp] */
    PGDN: 281, /* Next [PageDown] */
    MACRO: K_MACRO, /* Macro */
    HELP: 283, /* Help */
    DO: 284, /* Do */
    PAUSE: K_PAUSE, /* Pause */
    F21: 286, /* F21 */
    F22: 287, /* F22 */
    F23: 288, /* F23 */
    F24: 289, /* F24 */
    F25: 290, /* F25 */
    F26: 291, /* F26 */
    F27: 292, /* F27 */
    F28: 293, /* F28 */
    F29: 294, /* F29 */
    F30: 295, /* F30 */
    F31: 296, /* F31 */
    F32: 297, /* F32 */
    F33: 298, /* F33 */
    F34: 299, /* F34 */
    F35: 300, /* F35 */
    F36: 301, /* F36 */
    F37: 302, /* F37 */
    F38: 303, /* F38 */
    F39: 304, /* F39 */
    F40: 305, /* F40 */
    F41: 306, /* F41 */
    F42: 307, /* F42 */
    F43: 308, /* F43 */
    F44: 309, /* F44 */
    F45: 310, /* F45 */
    F46: 311, /* F46 */
    F47: 312, /* F47 */
    F48: 313, /* F48 */
    F49: 314, /* F49 */
    F50: 315, /* F50 */
    F51: 316, /* F51 */
    F52: 317, /* F52 */
    F53: 318, /* F53 */
    F54: 319, /* F54 */
    F55: 320, /* F55 */
    F56: 321, /* F56 */
    F57: 322, /* F57 */
    F58: 323, /* F58 */
    F59: 324, /* F59 */
    F60: 325, /* F60 */
    F61: 326, /* F61 */
    F62: 327, /* F62 */
    F63: 328, /* F63 */
    F64: 329, /* F64 */
    F65: 330, /* F65 */
    F66: 331, /* F66 */
    F67: 332, /* F67 */
    F68: 333, /* F68 */
    F69: 334, /* F69 */
    F70: 335, /* F70 */
    F71: 336, /* F71 */
    F72: 337, /* F72 */
    F73: 338, /* F73 */
    F74: 339, /* F74 */
    F75: 340, /* F75 */
    F76: 341, /* F76 */
    F77: 342, /* F77 */
    F78: 343, /* F78 */
    F79: 344, /* F79 */
    F80: 345, /* F80 */
    F81: 346, /* F81 */
    F82: 347, /* F82 */
    F83: 348, /* F83 */
    F84: 349, /* F84 */
    F85: 350, /* F85 */
    F86: 351, /* F86 */
    F87: 352, /* F87 */
    F88: 353, /* F88 */
    F89: 354, /* F89 */
    F90: 355, /* F90 */
    F91: 356, /* F91 */
    F92: 357, /* F92 */
    F93: 358, /* F93 */
    F94: 359, /* F94 */
    F95: 360, /* F95 */
    F96: 361, /* F96 */
    F97: 362, /* F97 */
    F98: 363, /* F98 */
    F99: 364, /* F99 */
    F100: 365, /* F100 */
    F101: 366, /* F101 */
    F102: 367, /* F102 */
    F103: 368, /* F103 */
    F104: 369, /* F104 */
    F105: 370, /* F105 */
    F106: 371, /* F106 */
    F107: 372, /* F107 */
    F108: 373, /* F108 */
    F109: 374, /* F109 */
    F110: 375, /* F110 */
    F111: 376, /* F111 */
    F112: 377, /* F112 */
    F113: 378, /* F113 */
    F114: 379, /* F114 */
    F115: 380, /* F115 */
    F116: 381, /* F116 */
    F117: 382, /* F117 */
    F118: 383, /* F118 */
    F119: 384, /* F119 */
    F120: 385, /* F120 */
    F121: 386, /* F121 */
    F122: 387, /* F122 */
    F123: 388, /* F123 */
    F124: 389, /* F124 */
    F125: 390, /* F125 */
    F126: 391, /* F126 */
    F127: 392, /* F127 */
    F128: 393, /* F128 */
    F129: 394, /* F129 */
    F130: 395, /* F130 */
    F131: 396, /* F131 */
    F132: 397, /* F132 */
    F133: 398, /* F133 */
    F134: 399, /* F134 */
    F135: 400, /* F135 */
    F136: 401, /* F136 */
    F137: 402, /* F137 */
    F138: 403, /* F138 */
    F139: 404, /* F139 */
    F140: 405, /* F140 */
    F141: 406, /* F141 */
    F142: 407, /* F142 */
    F143: 408, /* F143 */
    F144: 409, /* F144 */
    F145: 410, /* F145 */
    F146: 411, /* F146 */
    F147: 412, /* F147 */
    F148: 413, /* F148 */
    F149: 414, /* F149 */
    F150: 415, /* F150 */
    F151: 416, /* F151 */
    F152: 417, /* F152 */
    F153: 418, /* F153 */
    F154: 419, /* F154 */
    F155: 420, /* F155 */
    F156: 421, /* F156 */
    F157: 422, /* F157 */
    F158: 423, /* F158 */
    F159: 424, /* F159 */
    F160: 425, /* F160 */
    F161: 426, /* F161 */
    F162: 427, /* F162 */
    F163: 428, /* F163 */
    F164: 429, /* F164 */
    F165: 430, /* F165 */
    F166: 431, /* F166 */
    F167: 432, /* F167 */
    F168: 433, /* F168 */
    F169: 434, /* F169 */
    F170: 435, /* F170 */
    F171: 436, /* F171 */
    F172: 437, /* F172 */
    F173: 438, /* F173 */
    F174: 439, /* F174 */
    F175: 440, /* F175 */
    F176: 441, /* F176 */
    F177: 442, /* F177 */
    F178: 443, /* F178 */
    F179: 444, /* F179 */
    F180: 445, /* F180 */
    F181: 446, /* F181 */
    F182: 447, /* F182 */
    F183: 448, /* F183 */
    F184: 449, /* F184 */
    F185: 450, /* F185 */
    F186: 451, /* F186 */
    F187: 452, /* F187 */
    F188: 453, /* F188 */
    F189: 454, /* F189 */
    F190: 455, /* F190 */
    F191: 456, /* F191 */
    F192: 457, /* F192 */
    F193: 458, /* F193 */
    F194: 459, /* F194 */
    F195: 460, /* F195 */
    F196: 461, /* F196 */
    F197: 462, /* F197 */
    F198: 463, /* F198 */
    F199: 464, /* F199 */
    F200: 465, /* F200 */
    F201: 466, /* F201 */
    F202: 467, /* F202 */
    F203: 468, /* F203 */
    F204: 469, /* F204 */
    F205: 470, /* F205 */
    F206: 471, /* F206 */
    F207: 472, /* F207 */
    F208: 473, /* F208 */
    F209: 474, /* F209 */
    F210: 475, /* F210 */
    F211: 476, /* F211 */
    F212: 477, /* F212 */
    F213: 478, /* F213 */
    F214: 479, /* F214 */
    F215: 480, /* F215 */
    F216: 481, /* F216 */
    F217: 482, /* F217 */
    F218: 483, /* F218 */
    F219: 484, /* F219 */
    F220: 485, /* F220 */
    F221: 486, /* F221 */
    F222: 487, /* F222 */
    F223: 488, /* F223 */
    F224: 489, /* F224 */
    F225: 490, /* F225 */
    F226: 491, /* F226 */
    F227: 492, /* F227 */
    F228: 493, /* F228 */
    F229: 494, /* F229 */
    F230: 495, /* F230 */
    F231: 496, /* F231 */
    F232: 497, /* F232 */
    F233: 498, /* F233 */
    F234: 499, /* F234 */
    F235: 500, /* F235 */
    F236: 501, /* F236 */
    F237: 502, /* F237 */
    F238: 503, /* F238 */
    F239: 504, /* F239 */
    F240: 505, /* F240 */
    F241: 506, /* F241 */
    F242: 507, /* F242 */
    F243: 508, /* F243 */
    F244: 509, /* F244 */
    F245: 510, /* F245 */
    UNDO: 511, /* Undo */

    HOLE: 512, /* VoidSymbol */
    ENTER: 513, /* Return */
    SH_REGS: 514, /* Show Registers */
    SH_MEM: 515, /* Show Memory */
    SH_STAT: 516, /* Show State */
    BREAK: 517, /* Break */
    CONS: 518, /* Last Console */
    CAPS: 519, /* Caps Lock */
    NUM: 520, /* Num Lock */
    HOLD: 521, /* Scroll Lock */
    SCROLLFORW: 522, /* Scroll Forward */
    SCROLLBACK: 523, /* Scroll Backward */
    BOOT: 524, /* Boot */
    CAPSON: 525, /* Caps On */
    COMPOSE: 526, /* Compose */
    SAK: 527, /* SAK */
    DECRCONSOLE: 528, /* Decrease Console */
    INCRCONSOLE: 529, /* Increase Console */
    SPAWNCONSOLE: 530, /* EnumboardSignal */
    BARENUMLOCK: 531, /* Bare Num Lock */

    KP0: 768, /* numpad 0 */
    KP1: 769, /* numpad 1 */
    KP2: 770, /* numpad 2 */
    KP3: 771, /* numpad 3 */
    KP4: 772, /* numpad 4 */
    KP5: 773, /* numpad 5 */
    KP6: 774, /* numpad 6 */
    KP7: 775, /* numpad 7 */
    KP8: 776, /* numpad 8 */
    KP9: 777, /* numpad 9 */
    KPPLUS: 778, /* numpad + */
    KPMINUS: 779, /* numpad - */
    KPSTAR: 780, /* numpad * */
    KPSLASH: 781, /* numpad / */
    KPENTER: 782, /* numpad Enter */
    KPCOMMA: 783, /* numpad , */
    KPDOT: 784, /* numpad . */
    KPPLUSMINUS: 785, /* numpad ± */
    KPPARENL: 786, /* numpad ( */
    KPPARENR: 787, /* numpad ) */

    DGRAVE: 1024, /* [Dead] Grave */
    DACUTE: 1025, /* [Dead] Acute */
    DCIRCM: 1026, /* [Dead] CircumFlex */
    DTILDE: 1027, /* [Dead] Tilde */
    DDIERE: 1028, /* [Dead] Diaeresis */
    DCEDIL: 1029, /* [Dead] Cedilla */
    DMACRON: 1030, /* [Dead] Macron */
    DBREVE: 1031, /* [Dead] Breve (an alias for [Dead] Tilde) */
    DABDOT: 1032, /* [Dead] Abovedot */
    DABRING: 1033, /* [Dead] Abovering */
    DDBACUTE: 1034, /* [Dead] DoubleAcute (an alias for [Dead] Tilde) */
    DCARON: 1035, /* [Dead] Caron (an alias for [Dead] Circumflex) */
    DOGONEK: 1036, /* [Dead] Ogonek (an alias for [Dead] Cedilla) */
    DIOTA: 1037, /* [Dead] Iota */
    DVOICED: 1038, /* [Dead] Voiced sound */
    DSEMVOICED: 1039, /* [Dead] Semivoiced sound */
    DBEDOT: 1040, /* [Dead] BelowDot */
    DHOOK: 1041, /* [Dead] Hook */
    DHORN: 1042, /* [Dead] Horn */
    DSTROKE: 1043, /* [Dead] Stroke */
    DABCOMMA: 1044, /* [Dead] Abovecomma */
    DABREVCOMMA: 1045, /* [Dead] Abovereversedcomma */
    DDBGRAVE: 1046, /* [Dead] Doublegrave */
    DINVBREVE: 1047, /* [Dead] Inverted breve */
    DBECOMMA: 1048, /* [Dead] Belowcomma */
    DCURRENCY: 1049, /* [Dead] Currency */
    DGREEK: 1050, /* [Dead] Greek */

    ARROW_DOWN: 1536, /* Down Arrow */
    ARROW_LEFT: 1537, /* Left Arrow */
    ARROW_RIGHT: 1538, /* Right Arrow */
    ARROW_UP: 1539, /* Up Arrow */

    SHIFT: 1792, /* Shift */
    CTRL: 1794, /* AltGramar */
    ALT: 1795, /* Control */
    ALTGR: 1793, /* Alt */
    SHIFTL: 1796, /* ShiftLeft */
    SHIFTR: 1797, /* ShiftRight */
    CTRLL: K_CTRLL, /* CtrlLeft */
    CTRLR: K_CTRLR, /* CtrlRight */
    CAPSSHIFT: 1800, /* CapsShift */

    ASC0: 2304, /* Ascii_0 */
    ASC1: 2305, /* Ascii_1 */
    ASC2: 2306, /* Ascii_2 */
    ASC3: 2307, /* Ascii_3 */
    ASC4: 2308, /* Ascii_4 */
    ASC5: 2309, /* Ascii_5 */
    ASC6: 2310, /* Ascii_6 */
    ASC7: 2311, /* Ascii_7 */
    ASC8: 2312, /* Ascii_8 */
    ASC9: 2313, /* Ascii_9 */
    HEX0: 2314, /* Hex_0 */
    HEX1: 2315, /* Hex_1 */
    HEX2: 2316, /* Hex_2 */
    HEX3: 2317, /* Hex_3 */
    HEX4: 2318, /* Hex_4 */
    HEX5: 2319, /* Hex_5 */
    HEX6: 2320, /* Hex_6 */
    HEX7: 2321, /* Hex_7 */
    HEX8: 2322, /* Hex_8 */
    HEX9: 2323, /* Hex_9 */
    HEXa: 2324, /* Hex_A */
    HEXb: 2325, /* Hex_B */
    HEXc: 2326, /* Hex_C */
    HEXd: 2327, /* Hex_D */
    HEXe: 2328, /* Hex_E */
    HEXf: 2329, /* Hex_F */
    SHIFTLOCK: 2560, /* Shift Lock */
    CTRLLOCK: 2562, /* AltGr Lock */
    ALTLOCK: 2563, /* Control Lock */
    ALTGRLOCK: 2561, /* Alt Lock */
    SHIFTLLOCK: 2564, /* ShiftL Lock */
    SHIFTRLOCK: 2565, /* ShiftR Lock */
    CTRLLLOCK: 2566, /* CtrlL Lock */
    CTRLRLOCK: 2567, /* CtrlR Lock */
    CAPSSHIFTLOCK: 2568, /* CapsShift Lock */
    
    SHIFT_SLOCK: 3072, /* Sticky Shift */
    CTRL_SLOCK: 3074, /* Sticky Control */
    ALT_SLOCK: 3075, /* Sticky Alt */
    ALTGR_SLOCK: 3073, /* Sticky AltGr */
    SHIFTL_SLOCK: 3076, /* Sticky ShiftLeft */
    SHIFTR_SLOCK: 3077, /* Sticky ShiftRight */
    CTRLL_SLOCK: 3078, /* Sticky CtrlLeft */
    CTRLR_SLOCK: 3079, /* Sticky CtrlRight */
    CAPSSHIFT_SLOCK: 3080, /* Sticky CapsShift */

    BRL_BLANK: 3584, /* Brl_blank */
    BRL_DOT1: 3585, /* Brl_dot1 */
    BRL_DOT2: 3586, /* Brl_dot2 */
    BRL_DOT3: 3587, /* Brl_dot3 */
    BRL_DOT4: 3588, /* Brl_dot4 */
    BRL_DOT5: 3589, /* Brl_dot5 */
    BRL_DOT6: 3590, /* Brl_dot6 */
    BRL_DOT7: 3591, /* Brl_dot7 */
    BRL_DOT8: 3592, /* Brl_dot8 */
    BRL_DOT9: 3593, /* Brl_dot9 */
    BRL_DOT10: 3594, /* Brl_dot10 */

    CONSOLE1: 1280, /* Console_1 */
    CONSOLE2: 1281, /* Console_2 */
    CONSOLE3: 1282, /* Console_3 */
    CONSOLE4: 1283, /* Console_4 */
    CONSOLE5: 1284, /* Console_5 */
    CONSOLE6: 1285, /* Console_6 */
    CONSOLE7: 1286, /* Console_7 */
    CONSOLE8: 1287, /* Console_8 */
    CONSOLE9: 1288, /* Console_9 */
    CONSOLE10: 1289, /* Console_10 */
    CONSOLE11: 1290, /* Console_11 */
    CONSOLE12: 1291, /* Console_12 */
    CONSOLE13: 1292, /* Console_13 */
    CONSOLE14: 1293, /* Console_14 */
    CONSOLE15: 1294, /* Console_15 */
    CONSOLE16: 1295, /* Console_16 */
    CONSOLE17: 1296, /* Console_17 */
    CONSOLE18: 1297, /* Console_18 */
    CONSOLE19: 1298, /* Console_19 */
    CONSOLE20: 1299, /* Console_20 */
    CONSOLE21: 1300, /* Console_21 */
    CONSOLE22: 1301, /* Console_22 */
    CONSOLE23: 1302, /* Console_23 */
    CONSOLE24: 1303, /* Console_24 */
    CONSOLE25: 1304, /* Console_25 */
    CONSOLE26: 1305, /* Console_26 */
    CONSOLE27: 1306, /* Console_27 */
    CONSOLE28: 1307, /* Console_28 */
    CONSOLE29: 1308, /* Console_29 */
    CONSOLE30: 1309, /* Console_30 */
    CONSOLE31: 1310, /* Console_31 */
    CONSOLE32: 1311, /* Console_32 */
    CONSOLE33: 1312, /* Console_33 */
    CONSOLE34: 1313, /* Console_34 */
    CONSOLE35: 1314, /* Console_35 */
    CONSOLE36: 1315, /* Console_36 */
    CONSOLE37: 1316, /* Console_37 */
    CONSOLE38: 1317, /* Console_38 */
    CONSOLE39: 1318, /* Console_39 */
    CONSOLE40: 1319, /* Console_40 */
    CONSOLE41: 1320, /* Console_41 */
    CONSOLE42: 1321, /* Console_42 */
    CONSOLE43: 1322, /* Console_43 */
    CONSOLE44: 1323, /* Console_44 */
    CONSOLE45: 1324, /* Console_45 */
    CONSOLE46: 1325, /* Console_46 */
    CONSOLE47: 1326, /* Console_47 */
    CONSOLE48: 1327, /* Console_48 */
    CONSOLE49: 1328, /* Console_49 */
    CONSOLE50: 1329, /* Console_50 */
    CONSOLE51: 1330, /* Console_51 */
    CONSOLE52: 1331, /* Console_52 */
    CONSOLE53: 1332, /* Console_53 */
    CONSOLE54: 1333, /* Console_54 */
    CONSOLE55: 1334, /* Console_55 */
    CONSOLE56: 1335, /* Console_56 */
    CONSOLE57: 1336, /* Console_57 */
    CONSOLE58: 1337, /* Console_58 */
    CONSOLE59: 1338, /* Console_59 */
    CONSOLE60: 1339, /* Console_60 */
    CONSOLE61: 1340, /* Console_61 */
    CONSOLE62: 1341, /* Console_62 */
    CONSOLE63: 1342, /* Console_63 */

    SELECT: 3595, /* Select [End] */
    CANCEL: 3596, /* Cancel */
    KPCLEAR: 3597, /* Empty Keypad Key */
    KANA: 3598, /* IME Kana mode */
    HANGUL: 3599, /* IME Hangul mode */
    IME_ON: 3600, /* IME On */
    JUNJA: 3601, /* IME Junja mode */
    FINAL: 3602, /* IME Final mode */
    HANJA: 3603, /* IME Hanja mode */
    KANJI: 3604, /* IME Kanji mode */
    IME_OFF: 3605, /* IME Off */
    CONVERT: 3606, /* IME Convert */
    NONCONVERT: 3607, /* IME NonConvert */
    ACCEPT: 3608, /* IME Accept */
    MODECHANGE: 3609, /* IME ModeChange */
    PRINT: 3610, /* Print Key */
    EXECUTE: 3611, /* Execute Key */
    SNAPSHOT: 3612, /* Print Screen Key */
    SUPERL: 3613, /* Left Super[Windows/Command] key */
    SUPERR: 3614, /* Right Super[Windows/Command] key */
    MENU: 3615, /* Applications Key */
    SLEEP: 3616, /* Computer Sleep Key */
    AALT: 3617, /* Any Alt */
    BROWSER_BACK: 3618, /* Browser Back */
    BROWSER_FORWARD: 3619, /* Browser Forward */
    BROWSER_REFRESH: 3620, /* Browser Refresh */
    BROWSER_STOP: 3621, /* Browser Stop */
    BROWSER_SEARCH: 3622, /* Browser Search */
    BROWSER_FAVORITES: 3623, /* Browser Favorites */
    BROWSER_HOME: 3624, /* Browser Home */
    VOLUME_MUTE: 3625, /* Volume Mute */
    VOLUME_DOWN: 3626, /* Volume Down */
    VOLUME_UP: 3627, /* Volume Up */
    NEXT_TRACK: 3628, /* Next Track */
    PREV_TRACK: 3629, /* Previous Track */
    STOP: 3630, /* Stop */
    PLAY_PAUSE: 3631, /* Play/Pause */
    LAUNCH_MAIL: 3632, /* Launch Mail */
    LAUNCH_MEDIA_SELECT: 3633, /* Select Media */
    LAUNCH_APP1: 3634, /* Launch Application 1 */
    LAUNCH_APP2: 3635, /* Launch Application 2 */
    MISC: 3636, /* Unknown Miscellaneous Character [VK_OEM_8] */
    PROCCESS: 3637, /* Process Key */
    ATTN: 3638, /* Attn Key */
    CRSEL: 3639, /* CrSel Key */
    EXSEL: 3640, /* ExSel Key */
    EREOF: 3641, /* Erase EOF Key */
    PLAY: 3642, /* Play key */
    ZOOM: 3643, /* Zoom key */
    PA1: 3644, /* PA1 key */
    CLEAR: 3645, /* OEM Clear */

    // Other (Not documented)

    KPEQUAL: 3646, /* numpad , */
    DICTIONARY: 3647, /* Dictionary key */
    UNREGISTER: 3648, /* Unregister word key */
    REGISTERE: 3649, /* Register word key */
    OYAYUBIL: 3650, /* Left OYAYUBI key */
    OYAYUBIR: 3651, /* Right OYAYUBI key */

    // Various extended or enhanced keyboards
    AX: 3652, /* Japanese AX key */
    // MISC2 , , //  "<>" or "\|" on RT 102-key kbd.
    HELP_ICO: 3653, /* Help key on ICO */
    _00_ICO: 3654, /* 00 key on ICO */
    CLEAR_ICO: 3655, /* Empty key on ICO (i think) */

    // Nokia/Ericsson definitions

    RESET: 3656,
    JUMP: 3657,
    PA1_2: 3658, // OEM PA1 key
    PA2: 3659,
    PA3: 3660,
    WSCTRL: 3661,
    CUSEL: 3662,
    ATTN2: 3663, // OEM Attn key
    FINISH: 3664,
    COPY: 3665,
    AUTO: 3666,
    ENLW: 3667,
    BACKTAB: 3668,

    EISU: 3669, /* Eisu (on JIS keyboards) */
    FN: 3670, /* Function key */
};

const Toggle = {
    CapsLock: 0,
    NumLock: 1,
    ScrollLock: 2,
}

class ToggledKeys {
    constructor() {
        this.CapsLock = false;
        this.NumLock = navigator && navigator.platform && navigator.platform.startsWith("Mac");
        this.ScrollLock = false;
    }
    update(from) {
        this.CapsLock = from.CapsLock;
        this.NumLock = from.NumLock; // [TODO] - check if remorts true or false on macOS and if the latter force `true`
        this.ScrollLock = from.ScrollLock;
    }
};

// Linux Chart [TODO] - fix the platform-dependent ones on Windows and MacOS
const KeyChart = {
    "": Key.NONE,
    "Unidentified": Key.NONE,

    "Escape": Key.ESC,
    "Digit1": Key.ONE,
    "Digit2": Key.TWO,
    "Digit3": Key.THREE,
    "Digit4": Key.FOUR,
    "Digit5": Key.FIVE,
    "Digit6": Key.SIX,
    "Digit7": Key.SEVEN,
    "Digit8": Key.EIGHT,
    "Digit9": Key.NINE,
    "Digit0": Key.ZERO,
    "Minus": Key.MINUS,
    "Equal": Key.EQUAL,
    "Backspace": Key.BACKSPACE,
    "Tab": Key.TAB,
    "KeyQ": Key.q,
    "KeyW": Key.w,
    "KeyE": Key.e,
    "KeyR": Key.r,
    "KeyT": Key.t,
    "KeyY": Key.y,
    "KeyU": Key.u,
    "KeyI": Key.i,
    "KeyO": Key.o,
    "KeyP": Key.p,
    "BracketLeft": Key.BRACKETLEFT,
    "BracketRight": Key.BRACKETRIGHT,
    "Enter": Key.ENTER,
    "ControlLeft": Key.CTRLL,
    "KeyA": Key.a,
    "KeyS": Key.s,
    "KeyD": Key.d,
    "KeyF": Key.f,
    "KeyG": Key.g,
    "KeyH": Key.h,
    "KeyJ": Key.j,
    "KeyK": Key.k,
    "KeyL": Key.l,
    "Semicolon": Key.SEMICOLON,
    "Quote": Key.APOSTROPHE,
    "Backquote": Key.GRAVE,
    "ShiftLeft": Key.SHIFTL,
    "Backslash": Key.BACKSLASH,
    "KeyZ": Key.z,
    "KeyX": Key.x,
    "KeyC": Key.c,
    "KeyV": Key.v,
    "KeyB": Key.b,
    "KeyN": Key.n,
    "KeyM": Key.m,
    "Comma": Key.COMMA,
    "Period": Key.PERIOD,
    "Slash": Key.SLASH,
    "ShiftRight": Key.SHIFTR,
    "NumpadMultiply": Key.KPSTAR,
    "AltLeft": Key.ALT,
    "Space": Key.SPACE,
    "CapsLock": Key.CAPS,
    "F1": Key.F1,
    "F2": Key.F2,
    "F3": Key.F3,
    "F4": Key.F4,
    "F5": Key.F5,
    "F6": Key.F6,
    "F7": Key.F7,
    "F8": Key.F8,
    "F9": Key.F9,
    "F10": Key.F10,
    "NumLock": Key.NUM,
    "ScrollLock": Key.HOLD,
    "Numpad7": Key.KP7,
    "Numpad8": Key.KP8,
    "Numpad9": Key.KP9,
    "NumpadSubtract": Key.KPMINUS,
    "Numpad4": Key.KP4,
    "Numpad5": Key.KP5,
    "Numpad6": Key.KP6,
    "NumpadAdd": Key.KPPLUS,
    "Numpad1": Key.KP1,
    "Numpad2": Key.KP2,
    "Numpad3": Key.KP3,
    "Numpad0": Key.KP0,
    "NumpadDecimal": Key.KPDOT,
    "IntlBackslash": Key.BACKSLASH, // idk
    "F11": Key.F11,
    "F12": Key.F12,
    "IntlRo": Key.SLASH, // not sure
    "Convert": Key.CONVERT,
    "KanaMode": Key.KANA,
    "NonConvert": Key.NONCONVERT,
    "NumpadEnter": Key.KPENTER,
    "ControlRight": Key.CTRLR,
    "NumpadDivide": Key.KPSLASH,
    "PrintScreen": Key.SNAPSHOT,
    "AltRight": Key.ALTGR,
    "Home": Key.HOME,
    "ArrowUp": Key.ARROW_UP,
    "PageUp": Key.PGUP,
    "ArrowLeft": Key.ARROW_LEFT,
    "ArrowRight": Key.ARROW_RIGHT,
    "End": Key.END,
    "ArrowDown": Key.ARROW_DOWN,
    "PageDown": Key.PGDN,
    "Insert": Key.INSERT,
    "Deconste": Key.DEconstE,
    "VolumeMute": Key.VOLUME_MUTE, // Firefox + Chromium <52
    "VolumeDown": Key.VOLUME_DOWN, // Firefox + Chromium <52
    "VolumeUp": Key.VOLUME_UP, // Firefox + Chromium <52
    "AudioVolumeMute": Key.VOLUME_MUTE, // since Chromuim 52
    "AudioVolumeDown": Key.VOLUME_DOWN, // since Chromuim 52
    "AudioVolumeUp": Key.VOLUME_UP, // since Chromuim 52
    "NumpadEqual": Key.KPEQUAL,
    "Pause": Key.PAUSE,
    "NumpadComma": Key.KPCOMMA,
    "Lang1": Key.HANGUL, // Wild guess on linux, windows maybe // Kana on macOS
    "Lang2": Key.HANJA, // Wild guess on linux, windows quite sure // Eisu on macOS
    "IntlYen": Key.YEN, //i think on russian keyboards its \/
    "OSLeft": Key.SUPERL,
    "OSRight": Key.SUPERR,
    "MetaLeft": Key.SUPERL,
    "MetaRight": Key.SUPERR,
    "ContextMenu": Key.MENU,
    "BrowserStop": Key.BROWSER_STOP, // Firefox + Chromium 48+
    "Abort": Key.BROWSER_STOP, // prior to Chromium 48
    "Again": Key.NONE, // no match
    "Props": Key.NONE, // no match // idk if it even exists https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values says no os suppots it
    "Undo": Key.UNDO,
    "Select": Key.SELECT,
    "Copy": Key.COPY,
    "Open": Key.NONE, // no match
    "Paste": Key.NONE, // no match
    "Find": Key.NONE, // maybe Key.HOME
    "Cut": Key.NONE, // no match
    "Help": Key.HELP,
    "LaunchApp2": Key.LAUNCH_APP2,
    "Sleep": Key.SLEEP,
    "WakeUp": Key.NONE, // no match
    "LaunchApp1": Key.LAUNCH_APP1,
    "LaunchMail": Key.LAUNCH_MAIL,
    "BrowserFAV": Key.BROWSER_FAVORITES,
    "BrowserBack": Key.BROWSER_BACK,
    "BrowserForward": Key.BROWSER_FORWARD,
    "Eject": Key.NONE, // no match
    "MediaTrackNext": Key.NEXT_TRACK,
    "MediaPlayPause": Key.PLAY_PAUSE,
    "MediaPlayPrevious": Key.PREV_TRACK,
    "MediaStop": Key.STOP,
    "MediaSelect": Key.LAUNCH_MEDIA_SELECT,
    "BrowserHome": Key.BROWSER_HOME,
    "BrowserRefresh": Key.BROWSER_REFRESH,
    "NupadParenLeft": Key.KPPARENL,
    "NupadParenRight": Key.KPPARENR,
    "F13": Key.F13,
    "F14": Key.F14,
    "F15": Key.F15,
    "F16": Key.F16,
    "F17": Key.F17,
    "F18": Key.F18,
    "F19": Key.F19,
    "F20": Key.F20,
    "F21": Key.F21,
    "F22": Key.F22,
    "F23": Key.F23,
    "F24": Key.F24,
    "BrowserSearch": Key.BROWSER_SEARCH, // Firefox + Chromium 48+
    "BrightnessUp": Key.BROWSER_SEARCH, // prior to Chromium 48
};