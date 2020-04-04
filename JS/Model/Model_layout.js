class Model_layout {
   constructor(){
      this._layout = LAYOUT.SOUND;

      this._first_visible_track = 3;
      this._last_visible_track = 50;

   }

   get layout(){
      return this._layout;
   }
   set layout(layout){
      this._layout = layout;
   }

   get first_visible_track(){
      return this._first_visible_track;
   }
   set first_visible_track(value){
      return this._first_visible_track = value;
   }
   get last_visible_track(){
      return this._last_visible_track;
   }
   set last_visible_track(value){
      return this._last_visible_track = value;
   }

}
