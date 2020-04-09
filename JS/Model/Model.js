class Model {
   constructor(){

      //Layout
      this.layout = LAYOUT.VOL;

      //Selection
      this.selection_mode = SELECTION_MODE.ADD;
      this.custom_selection = false;

      //Rows
      this.playback_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.vol_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.freq_edit_tracks = new Array(TOTAL_TRACKS).fill(false);
      this.dadj_edit_tracks = new Array(TOTAL_TRACKS).fill(false);

      this.playback_tracks_backup = null;
      this.vol_edit_tracks_backup = null;
      this.freq_edit_tracks_backup = null;
      this.dadj_edit_tracks_backup = null;
      
      //Keyboard
      this.ctrl_pressed = false;
      this.shift_pressed = false;

      //Zoom
      this.first_visible_track = 0;
      this.last_visible_track = TOTAL_TRACKS-1;

      this.zoom_center_relative_increment = 0.09;
      this.zoom_width_relative_increment = 0.15;

      //Vol edit
      this.ve_scale = SCALE_TYPE.LIN;

      this.ve_shape = EDITOR_SHAPE.FLAT;
      this.ve_amount = 0; // in multiplying factor or dB
      this.ve_width = 0; // 0 to 1
      this.ve_center = 0; // 0 to 1

      this.ve_random = false;
      this.ve_mirror = false;
      this.ve_random_values = new Array(TOTAL_TRACKS);




      //Midi
      this.notes = new Array();
      this.bass_notes = new Array();

   }



   get_note_freqs = (note) => {
      return 0; ////////-----------
   }



   //Rows
   set_playback_track = (track, value) => {
      this.playback_tracks[track] = value;
   }
   set_vol_edit_track = (track, value) => {
      this.vol_edit_tracks[track] = value;
   }
   set_freq_edit_track = (track, value) => {
      this.freq_edit_tracks[track] = value;
   }
   set_dadj_edit_track = (track, value) => {
      this.dadj_edit_tracks[track] = value;
   }

   backup_playback_tracks = () => {
      this.playback_tracks_backup = this.playback_tracks.slice();
   }
   backup_vol_edit_tracks = () => {
      this.vol_edit_tracks_backup = this.vol_edit_tracks.slice();
   }
   backup_freq_edit_tracks = () => {
      this.freq_edit_tracks_backup = this.freq_edit_tracks.slice();
   }
   backup_dadj_edit_tracks = () => {
      this.dadj_edit_tracks_backup = this.dadj_edit_tracks.slice();
   }


   
}
