class Controller_keyboard {
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
