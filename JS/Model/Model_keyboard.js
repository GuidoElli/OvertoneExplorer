class Model_keyboard {
   constructor(){
      this._ctrl_pressed = false;
      this._shift_pressed = false;
   }

   get ctrl_pressed(){
      return this._ctrl_pressed;
   }
   set ctrl_pressed(value){
      this._ctrl_pressed = value;
   }

   get shift_pressed(){
      return this._shift_pressed;
   }
   set shift_pressed(value){
      this._shift_pressed = value;
   }
}
