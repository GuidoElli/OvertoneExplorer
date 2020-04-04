class Model_selection {
   constructor(){
      this._custom_selection = false;
   }

   get custom_selection(){
      return this._custom_selection;
   }
   set custom_selection(value){
      this._custom_selection = value;
   }
}
