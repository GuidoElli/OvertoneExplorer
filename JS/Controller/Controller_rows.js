class Controller_rows {
   constructor(model, view){
      this.model = model;
      this.view = view;
   }


   on_playback_change_enter = () => {
      this.model.backup_playback_tracks();
   }
   on_playback_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.model.set_playback_track(i, this.model.playback_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.model.set_playback_track(i, true);
            }
         }
      }
      this.view.update_playback_tracks(this.model.playback_tracks);
   }
   on_playback_click = (track) => {
      //TODO selection
      this.model.set_playback_track(track, true);
      this.view.update_playback_tracks(this.model.playback_tracks);
   }

   on_vol_edit_change_enter = () => {
      this.model.backup_vol_edit_tracks();
   }
   on_vol_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.model.set_vol_edit_track(i, this.model.vol_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.model.set_vol_edit_track(i, true);
            }
         }
      }
      this.view.update_vol_edit_tracks(this.model.vol_edit_tracks);
   }
   on_vol_edit_click = (track) => {
      //TODO selection
      this.model.set_vol_edit_track(track, true);
      this.view.update_vol_edit_tracks(this.model.vol_edit_tracks);
   }

   on_freq_edit_change_enter = () => {
      this.model.backup_freq_edit_tracks();
   }
   on_freq_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.model.set_freq_edit_track(i, this.model.freq_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.model.set_freq_edit_track(i, true);
            }
         }
      }
      this.view.update_freq_edit_tracks(this.model.freq_edit_tracks);
   }
   on_freq_edit_click = (track) => {
      //TODO selection
      this.model.set_freq_edit_track(track, true);
      this.view.update_freq_edit_tracks(this.model.freq_edit_tracks);
   }

   on_dadj_edit_change_enter = () => {
      this.model.backup_dadj_edit_tracks();
   }
   on_dadj_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.model.set_dadj_edit_track(i, this.model.dadj_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.model.set_dadj_edit_track(i, true);
            }
         }
      }
      this.view.update_dadj_edit_tracks(this.model.dadj_edit_tracks);
   }
   on_dadj_edit_click = (track) => {
      //TODO selection
      this.model.set_dadj_edit_track(track, true);
      this.view.update_dadj_edit_tracks(this.model.dadj_edit_tracks);
   }



}
