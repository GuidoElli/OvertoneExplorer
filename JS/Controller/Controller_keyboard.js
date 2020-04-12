class Controller_keyboard {
   constructor(controller, model){
      this.c = controller;
      this.m = model;
      this.ctrl_pressed = false;
      this.shift_pressed = false;
   }


   update_selection_mode(){
      if(this.ctrl_pressed){
         this.m.selection_mode = SELECTION_MODE.REMOVE;
      }else if(this.shift_pressed){
         this.m.selection_mode = SELECTION_MODE.TOGGLE;
      }else{
         this.m.selection_mode = SELECTION_MODE.ADD;
      }
   }


   on_ctrl_press = () => {
      this.ctrl_pressed = true;
      document.dispatchEvent(new Event("mousemove"));
      this.update_selection_mode();
      this.c.update_view();
   }
   on_ctrl_release = () => {
      this.ctrl_pressed = false;
      document.dispatchEvent(new Event("mousemove"));
      this.update_selection_mode();
      this.c.update_view();
   }

   on_shift_press = () => {
      this.shift_pressed = true;
      document.dispatchEvent(new Event("mousemove"));
      this.update_selection_mode();
      this.c.update_view();
   }
   on_shift_release = () => {
      this.shift_pressed = false;
      document.dispatchEvent(new Event("mousemove"));
      this.update_selection_mode();
      this.c.update_view();
   }


}
