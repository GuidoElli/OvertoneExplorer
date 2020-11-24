//constants and parameters
//Audio
const MAX_FREQUENCY = 20000;
const MAX_DB = 0;
const MIN_DB = -70;
let MAX_MIN_CENTS = 400;

//General
const TOTAL_TRACKS = 70;
const MIN_VISIBLE_TRACKS = 7;
const MAX_TRACKS_TO_SHOW_BUTTON_LABELS = 30;

//Zoom
const ZOOM_CENTER_RELATIVE_INCREMENT = 0.05;
const ZOOM_WIDTH_RELATIVE_INCREMENT = 0.12;

//Knobs
const KNOB_MAX_PIXEL = 300;
const KNOB_MAX_PIXEL_FINE = 4000;

//editors
const MAX_VE_AMOUNT = MAX_DB-MIN_DB;
const MAX_FE_AMOUNT = 400;

//dadj
const MAX_DADJ_FREQ_RANGE = 400; //cents
const MAX_DADJ_VOL_RANGE = 400; //cents
const MAX_MIN_DADJ_VOL_AMOUNT = 30; //dB




//keyboard
let CTRL_DOWN = false;
let SHIFT_DOWN = false;


//enum
const EDITOR_SHAPE = {
   FLAT: "flat",
   CURVE: "curve",
   TRIANGLE: "triangle"
}
const SELECTION_MODE = {
   ADD: "add",
   REMOVE: "remove",
   TOGGLE: "toggle"
}
const LAYOUT_LEFT = {
   HOME: "home",
   VOL: "vol",
   FREQ: "freq",
   DADJ: "dadj",
   SETTINGS: "settings",
   SELECTION: "selection",
   HELP: "help"
}
const LAYOUT_RIGHT = {
   DEFAULT: "DEFAULT",
   FREQ_ONLY: "FREQ_ONLY",
   VOL_ONLY: "VOL_ONLY"
}
const GROUPS = {
   EVEN: "EVEN",
   ODD: "ODD",
   OCTAVES: "OCTAVES",
   FIFTHS: "FIFTHS",
   RANDOM: "RANDOM"
}



//functions for .every()
const is_true = (elem) => {return elem};
const is_false = (elem) => {return !elem};

