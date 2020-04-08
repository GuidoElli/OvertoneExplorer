class Model {
   constructor(){

      this.layout = LAYOUT.VOL;

      this.selection_mode = SELECTION_MODE.ADD;
      this.custom_selection = false;

      this.playback_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.vol_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.freq_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.dadj_edit_tracks = new Array(TOTAL_TRACKS).fill(false);

      this.playback_tracks_backup = null;
      this.vol_edit_tracks_backup = null;
      this.freq_edit_tracks_backup = null;
      this.dadj_edit_tracks_backup = null;
      
      this.ctrl_pressed = false;
      this.shift_pressed = false;


      this.first_visible_track = 10;
      this.last_visible_track = 19;

      this.zoom_center_relative_increment = 0.09;
      this.zoom_width_relative_increment = 0.15;

      this.min_visible_tracks = 10;


   }


   //Rows

   set_playback_track(track, value){
      this.playback_tracks[track] = value;
   }
   set_vol_edit_track(track, value){
      this.vol_edit_tracks[track] = value;
   }
   set_freq_edit_track(track, value){
      this.freq_edit_tracks[track] = value;
   }
   set_dadj_edit_track(track, value){
      this.dadj_edit_tracks[track] = value;
   }

   backup_playback_tracks(){
      this.playback_tracks_backup = this.playback_tracks.slice();
   }
   backup_vol_edit_tracks(){
      this.vol_edit_tracks_backup = this.vol_edit_tracks.slice();
   }
   backup_freq_edit_tracks(){
      this.freq_edit_tracks_backup = this.freq_edit_tracks.slice();
   }
   backup_dadj_edit_tracks(){
      this.dadj_edit_tracks_backup = this.dadj_edit_tracks.slice();
   }


   
}
