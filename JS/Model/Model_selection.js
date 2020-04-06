class Model_selection {
   constructor(){
      this._selection_mode = SELECTION_MODE.ADD;
      this._custom_selection = false;
   }

   get selection_mode(){
      return this._selection_mode;
   }
   set selection_mode(value){
      this._selection_mode = value;
   }

   get custom_selection(){
      return this._custom_selection;
   }
   set custom_selection(value){
      this._custom_selection = value;
   }

}
