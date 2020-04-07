class Model_zoom {
   constructor(){
      this._first_visible_track = 10;
      this._last_visible_track = 19;

      this._center_relative_increment = 0.1;
      this._width_relative_increment = 0.2;

      this._min_visible_tracks = 10;
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

   get center_relative_increment(){
      return this._center_relative_increment;
   }
   set center_relative_increment(value){
      return this._center_relative_increment = value;
   }
   get width_relative_increment(){
      return this._width_relative_increment;
   }
   set width_relative_increment(value){
      return this._width_relative_increment = value;
   }

   get min_visible_tracks(){
      return this._min_visible_tracks;
   }
   set min_visible_tracks(value){
      return this._min_visible_tracks = value;
   }
   
}
