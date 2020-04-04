class Model {
   constructor(){

      this._layout = new Model_layout(this);
      this._selection = new Model_selection(this);
      this._rows = new Model_rows(this);
      this._keyboard = new Model_keyboard(this);

   }

   //Layout
   get layout(){
      return this._layout.layout;
   }
   set layout(layout){
      this._layout.layout = layout;
   }

   //Selection
   get custom_selection(){
      return this._selection.custom_selection;
   }
   set custom_selection(value){
      this._selection.custom_selection = value;
   }

   get selection_mode(){
      return this._selection.selection_mode;
   }
   set selection_mode(value){
      this._selection.selection_mode = value;
   }

   //Rows
   get playback_tracks(){
      return this._rows.playback_tracks;
   }
   set_playback_track(track, value){
      this._rows.set_playback_track(track, value);
   }
   get playback_tracks_backup(){
      return this._rows.playback_tracks_backup;
   }
   backup_playback_tracks(){
      this._rows.backup_playback_tracks();
   }

   get vol_edit_tracks(){
      return this._rows.vol_edit_tracks;
   }
   set_vol_edit_track(track, value){
      this._rows.set_vol_edit_track(track, value);
   }
   get vol_edit_tracks_backup(){
      return this._rows.vol_edit_tracks_backup;
   }
   backup_vol_edit_tracks(){
      this._rows.backup_vol_edit_tracks();
   }

   get freq_edit_tracks(){
      return this._rows.freq_edit_tracks;
   }
   set_freq_edit_track(track, value){
      this._rows.set_freq_edit_track(track, value);
   }
   get freq_edit_tracks_backup(){
      return this._rows.freq_edit_tracks_backup;
   }
   backup_freq_edit_tracks(){
      this._rows.backup_freq_edit_tracks();
   }

   get dadj_edit_tracks(){
      return this._rows.dadj_edit_tracks;
   }
   set_dadj_edit_track(track, value){
      this._rows.set_dadj_edit_track(track, value);
   }
   get dadj_edit_tracks_backup(){
      return this._rows.dadj_edit_tracks_backup;
   }
   backup_dadj_edit_tracks(){
      this._rows.backup_dadj_edit_tracks();
   }


   //Zoom
   get first_visible_track(){
      return this._layout.first_visible_track;
   }
   set first_visible_track(value){
      return this._layout.first_visible_track = value;
   }
   get last_visible_track(){
      return this._layout.last_visible_track;
   }
   set last_visible_track(value){
      return this._layout.last_visible_track = value;
   }
   

   //Keyboard
   get ctrl_pressed(){
      return this._keyboard.ctrl_pressed;
   }
   set ctrl_pressed(value){
      this._keyboard.ctrl_pressed = value;
   }
   get shift_pressed(){
      return this._keyboard.shift_pressed;
   }
   set shift_pressed(value){
      this._keyboard.shift_pressed = value;
   }


   
}
