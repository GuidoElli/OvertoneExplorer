class Controller_keyboard {

   first_keyboard_bass_note = 12;
   keyboard_bass_notes = ['q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u', 'i', '9', 'o', '0', 'p'];
   first_keyboard_note = 12;
   keyboard_notes = ['<', 'a', 'z', 's', 'x', 'c', 'f', 'v', 'g', 'b', 'h', 'n', 'm', 'k', ',', 'l', '.', 'ò', '-'];

   hold_down = false;


   constructor(controller, model){
      this.c = controller;
      this.m = model;

      document.addEventListener("keydown", (e) => {
         if(!e.repeat){
            switch(e.key){
               case 'Control':
                  CTRL_DOWN = true;
                  this.update_selection_mode();
                  this.c.update_view();
                  document.dispatchEvent(new Event("mousemove"));
                  break;
               case 'Shift':
                  SHIFT_DOWN = true;
                  this.update_selection_mode();
                  this.c.update_view();
                  document.dispatchEvent(new Event("mousemove"));
                  break;
               case ' ':
                  this.hold_down = true;
                  break;
               case 'Backspace':
                  while(this.m.bass_notes.length > 0){
                     this.m.remove_bass_note(this.m.bass_notes[0]);
                  }
                  while(this.m.notes.length > 0){
                     this.m.remove_note(this.m.notes[0].midi_note);
                  }
                  this.c.update_view();
                  break;
            }

            if(this.keyboard_bass_notes.includes(e.key)){
               this.m.add_bass_note(this.first_keyboard_bass_note + this.keyboard_bass_notes.indexOf(e.key));
               this.c.update_view();
            }else if(this.keyboard_notes.includes(e.key)){
               this.m.add_note(this.first_keyboard_note + this.keyboard_notes.indexOf(e.key));
               this.c.update_view();
            }
         }
      })

      document.addEventListener("keyup", (e) => {
         switch(e.key){
            case 'Control':
               CTRL_DOWN = false;
               this.update_selection_mode();
               this.c.update_view();
               document.dispatchEvent(new Event("mousemove"));
               break;
            case 'Shift':
               SHIFT_DOWN = false;
               this.update_selection_mode();
               this.c.update_view();
               document.dispatchEvent(new Event("mousemove"));
               break;
            case ' ':
               this.hold_down = false;
               break;
         }
         if(this.keyboard_bass_notes.includes(e.key) && !this.hold_down){
            this.m.remove_bass_note(this.first_keyboard_bass_note + this.keyboard_bass_notes.indexOf(e.key));
            this.c.update_view();
         }else if(this.keyboard_notes.includes(e.key) && !this.hold_down){
            this.m.remove_note(this.first_keyboard_note + this.keyboard_notes.indexOf(e.key));
            this.c.update_view();
         }
      })

   }


   update_selection_mode(){
      if(CTRL_DOWN){
         this.m.selection_mode = SELECTION_MODE.REMOVE;
      }else if(SHIFT_DOWN){
         this.m.selection_mode = SELECTION_MODE.TOGGLE;
      }else{
         this.m.selection_mode = SELECTION_MODE.ADD;
      }
   }



}
