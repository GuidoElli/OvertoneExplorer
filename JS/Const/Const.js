//constants and parameters
const MAX_FREQUENCY = 20000;

const TOTAL_TRACKS = 100;
const MIN_VISIBLE_TRACKS = 7;
const MAX_TRACKS_TO_SHOW_BUTTON_LABELS = 50;

//Zoom
const ZOOM_CENTER_RELATIVE_INCREMENT = 0.05;
const ZOOM_WIDTH_RELATIVE_INCREMENT = 0.12;

//Knobs
const MAX_VE_AMOUNT_LIN = 10;
const MAX_VE_AMOUNT_LOG = 20;
const KNOB_MAX_PIXEL = 300;


const EDITOR_SHAPE = {
   FLAT: "flat",
   CURVE: "curve",
   TRIANGLE: "triangle"
}
const SCALE_TYPE = {
   LIN: "lin",
   LOG: "log"
}
const SELECTION_MODE = {
   ADD: "add",
   REMOVE: "remove",
   TOGGLE: "toggle"
}
const LAYOUT = {
   SOUND: "sound",
   VOL: "vol",
   FREQ: "freq",
   DADJ: "dadj"
}




function midi_to_freq(midi_note){
   return 10; ///////--------------------
}
