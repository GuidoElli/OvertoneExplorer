class Controller_rows {
   constructor(controller){
      this.c = controller;
   }


   on_playback_change_enter = () => {
      this.c.model.backup_playback_tracks();
   }
   on_playback_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.c.model.set_playback_track(i, this.c.model.playback_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.c.model.set_playback_track(i, true);
            }
         }
      }
      this.c.view.update_playback_tracks(this.c.model.playback_tracks);
   }
   on_playback_click = (track) => {
      //TODO selection
      this.c.model.set_playback_track(track, true);
      this.c.view.update_playback_tracks(this.c.model.playback_tracks);
   }

   on_vol_edit_change_enter = () => {
      this.c.model.backup_vol_edit_tracks();
   }
   on_vol_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.c.model.set_vol_edit_track(i, this.c.model.vol_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.c.model.set_vol_edit_track(i, true);
            }
         }
      }
      this.c.view.update_vol_edit_tracks(this.c.model.vol_edit_tracks);
   }
   on_vol_edit_click = (track) => {
      //TODO selection
      this.c.model.set_vol_edit_track(track, true);
      this.c.view.update_vol_edit_tracks(this.c.model.vol_edit_tracks);
   }

   on_freq_edit_change_enter = () => {
      this.c.model.backup_freq_edit_tracks();
   }
   on_freq_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.c.model.set_freq_edit_track(i, this.c.model.freq_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.c.model.set_freq_edit_track(i, true);
            }
         }
      }
      this.c.view.update_freq_edit_tracks(this.c.model.freq_edit_tracks);
   }
   on_freq_edit_click = (track) => {
      //TODO selection
      this.c.model.set_freq_edit_track(track, true);
      this.c.view.update_freq_edit_tracks(this.c.model.freq_edit_tracks);
   }

   on_dadj_edit_change_enter = () => {
      this.c.model.backup_dadj_edit_tracks();
   }
   on_dadj_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.c.model.set_dadj_edit_track(i, this.c.model.dadj_edit_tracks_backup[i]);
            }else{
               //TODO selection mode
               this.c.model.set_dadj_edit_track(i, true);
            }
         }
      }
      this.c.view.update_dadj_edit_tracks(this.c.model.dadj_edit_tracks);
   }
   on_dadj_edit_click = (track) => {
      //TODO selection
      this.c.model.set_dadj_edit_track(track, true);
      this.c.view.update_dadj_edit_tracks(this.c.model.dadj_edit_tracks);
   }



}
