class Controller_rows {
   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }


   on_playback_change_enter = () => {
      this.m.backup_playback_tracks();
   }
   on_playback_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.m.set_playback_track(i, this.m.playback_tracks_backup[i]);
            }else{
               this.m.set_playback_track(i, this.c.selection_answer(this.m.playback_tracks_backup[i]));
            }
         }
      }
      this.c.update_playback_tracks();
   }
   on_playback_click = (track) => {
      
      this.m.set_playback_track(track, !this.m.playback_tracks_backup[track]);
      this.c.update_playback_tracks();
   }

   on_vol_edit_change_enter = () => {
      this.m.backup_vol_edit_tracks();
   }
   on_vol_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.m.set_vol_edit_track(i, this.m.vol_edit_tracks_backup[i]);
            }else{
               this.m.set_vol_edit_track(i, this.c.selection_answer(this.m.vol_edit_tracks_backup[i]));
            }
         }
      }
      this.c.update_vol_edit_tracks();
   }
   on_vol_edit_click = (track) => {
      
      this.m.set_vol_edit_track(track, !this.m.vol_edit_tracks_backup[track]);
      this.c.update_vol_edit_tracks();
   }

   on_freq_edit_change_enter = () => {
      this.m.backup_freq_edit_tracks();
   }
   on_freq_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.m.set_freq_edit_track(i, this.m.freq_edit_tracks_backup[i]);
            }else{
               this.m.set_freq_edit_track(i, this.c.selection_answer(this.m.freq_edit_tracks_backup[i]));
            }
         }
      }
      this.c.update_freq_edit_tracks();
   }
   on_freq_edit_click = (track) => {
      
      this.m.set_freq_edit_track(track, !this.m.freq_edit_tracks_backup[track]);
      this.c.update_freq_edit_tracks();
   }

   on_dadj_edit_change_enter = () => {
      this.m.backup_dadj_edit_tracks();
   }
   on_dadj_edit_change = (first, last) => {
      if(first !== null && last !== null){
         for(let i = 0; i < TOTAL_TRACKS; i++){
            if(i < first || i > last){
               this.m.set_dadj_edit_track(i, this.m.dadj_edit_tracks_backup[i]);
            }else{
               this.m.set_dadj_edit_track(i, this.c.selection_answer(this.m.dadj_edit_tracks_backup[i]));
            }
         }
      }
      this.c.update_dadj_edit_tracks();
   }
   on_dadj_edit_click = (track) => {
      
      this.m.set_dadj_edit_track(track, !this.m.dadj_edit_tracks_backup[track]);
      this.c.update_dadj_edit_tracks();
   }



}
