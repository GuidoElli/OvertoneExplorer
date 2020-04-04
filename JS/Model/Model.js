class Model {
   constructor(){
      this.layout = LAYOUT.SOUND;

      this.first_visible_track = 3;
      this.last_visible_track = 50;

      this.playback_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.vol_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.freq_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.dadj_edit_tracks = new Array(TOTAL_TRACKS).fill(false);

      this.playback_tracks_backup = null;
      this.vol_edit_tracks_backup = null;
      this.freq_edit_tracks_backup = null;
      this.dadj_edit_tracks_backup = null;

      this.custom_selection = false;

   }



   set_layout(layout){
      this.layout = layout;
   }

   set_custom_selection(value){
      this.custom_selection = value;
   }


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
