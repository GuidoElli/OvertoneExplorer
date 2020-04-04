class Model {
   constructor(){

      this.model_layout = new Model_layout();
      this.model_selection = new Model_selection();
      this.model_rows = new Model_rows();

   }

   //Layout
   get layout(){
      return this.model_layout.layout;
   }
   set layout(layout){
      this.model_layout.layout = layout;
   }

   //Selection
   get custom_selection(){
      return this.model_selection.custom_selection;
   }
   set custom_selection(value){
      this.model_selection.custom_selection = value;
   }


   //Rows
   get playback_tracks(){
      return this.model_rows.playback_tracks;
   }
   set_playback_track(track, value){
      this.model_rows.set_playback_track(track, value);
   }
   get playback_tracks_backup(){
      return this.model_rows.playback_tracks_backup;
   }
   backup_playback_tracks(){
      this.model_rows.backup_playback_tracks();
   }

   get vol_edit_tracks(){
      return this.model_rows.vol_edit_tracks;
   }
   set_vol_edit_track(track, value){
      this.model_rows.set_vol_edit_track(track, value);
   }
   get vol_edit_tracks_backup(){
      return this.model_rows.vol_edit_tracks_backup;
   }
   backup_vol_edit_tracks(){
      this.model_rows.backup_vol_edit_tracks();
   }

   get freq_edit_tracks(){
      return this.model_rows.freq_edit_tracks;
   }
   set_freq_edit_track(track, value){
      this.model_rows.set_freq_edit_track(track, value);
   }
   get freq_edit_tracks_backup(){
      return this.model_rows.freq_edit_tracks_backup;
   }
   backup_freq_edit_tracks(){
      this.model_rows.backup_freq_edit_tracks();
   }

   get dadj_edit_tracks(){
      return this.model_rows.dadj_edit_tracks;
   }
   set_dadj_edit_track(track, value){
      this.model_rows.set_dadj_edit_track(track, value);
   }
   get dadj_edit_tracks_backup(){
      return this.model_rows.dadj_edit_tracks_backup;
   }
   backup_dadj_edit_tracks(){
      this.model_rows.backup_dadj_edit_tracks();
   }


   //Zoom
   get first_visible_track(){
      return this.model_layout.first_visible_track;
   }
   set first_visible_track(value){
      return this.model_layout.first_visible_track = value;
   }
   get last_visible_track(){
      return this.model_layout.last_visible_track;
   }
   set last_visible_track(value){
      return this.model_layout.last_visible_track = value;
   }
   


   
}
