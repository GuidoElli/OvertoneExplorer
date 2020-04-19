//constants and parameters
const MAX_FREQUENCY = 20000;

const TOTAL_TRACKS = 80;
const MIN_VISIBLE_TRACKS = 7;
const MAX_TRACKS_TO_SHOW_BUTTON_LABELS = 50;

//Zoom
const ZOOM_CENTER_RELATIVE_INCREMENT = 0.05;
const ZOOM_WIDTH_RELATIVE_INCREMENT = 0.12;

//Knobs
const MAX_VE_AMOUNT = 50;
const KNOB_MAX_PIXEL = 300;
const KNOB_MAX_PIXEL_FINE = 4000;

//Audio
const MIN_DB = -70;
const MAX_DB = 10;





var CTRL_DOWN = false;
var SHIFT_DOWN = false;



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

function to_dB(lin_amount){
   ///
}
function to_lin(db_amount){
   if(db_amount <= MIN_DB){
      return 0;
   }else if(db_amount > 0){
      return 1;
   }else{
      return Math.pow(10, db_amount/20);
   }
}
