class Controller_midi {

   split_midi_note = 72;
   octave_shift = 0;

   constructor(controller, model) {
      this.c = controller;
      this.m = model;


      if (navigator.requestMIDIAccess) {
         navigator.requestMIDIAccess({
            sysex: false
         }).then(this.onMIDISuccess, this.onMIDIFailure);
      } else {
         console.warn("No MIDI support in your browser")
      }

   }

   onMIDISuccess = (midiData) => {
      for (let input of midiData.inputs.values()){
         input.onmidimessage = this.getMIDImessage;
      }
   }
   onMIDIFailure = () => {
      console.warn("Not recognising MIDI controller")
   }
   getMIDImessage = (message) => {
      let command = message.data[0];
      let note = message.data[1];
      let velocity = (message.data.length > 2) ? message.data[2] : 0;

      switch (command) {
         case 144: // noteOn
            if (velocity > 0) {
               if(note >= this.split_midi_note){
                  this.c.add_bass_note(note + 12*this.octave_shift);
               }else{
                  this.c.add_note(note + 12*this.octave_shift);
               }
            }
            break;
         case 128: // noteOff
            if(note >= this.split_midi_note){
               this.c.remove_bass_note(note + 12*this.octave_shift);
            }else{
               this.c.remove_note(note + 12*this.octave_shift);
            }
            break;

         default: break;
      }
   }

}
