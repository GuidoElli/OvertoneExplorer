class View_keyboard {
   constructor(view){

      this.v = view;

      document.addEventListener("keydown", (e) => {
         switch(e.key){
            case 'Control':
               this.v.on_ctrl_press();
               break;
            case 'Shift':
               this.v.on_shift_press();
               break;
         }
      })

      document.addEventListener("keyup", (e) => {
         switch(e.key){
            case 'Control':
               this.v.on_ctrl_release();
               break;
            case 'Shift':
               this.v.on_shift_release();
               break;
         }
      })

      
   }
}
