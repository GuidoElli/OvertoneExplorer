class Controller_rows {
   constructor(controller, model) {
      this.c = controller;
      this.m = model;
   }


   group_tracks(group){
      let tracks = new Array(TOTAL_TRACKS).fill(false);
      for(let i = 0; i < TOTAL_TRACKS; i++){
         switch (group) {
            case null:
               tracks[i] = true;
               break;
            case GROUPS.EVEN:
               tracks[i] = (i % 2 === 0);
               break;
            case GROUPS.ODD:
               tracks[i] = (i % 2 === 1);
               break;
            case GROUPS.OCTAVES:
               tracks[i] = (Math.log2(i + 1) % 1 === 0);
               break;
            case GROUPS.FIFTHS:
               let a = Math.abs(Math.pow(2, Math.ceil(Math.log2(i + 1))) - (i + 1));
               let b = Math.abs(Math.pow(2, Math.floor(Math.log2(i + 1))) - (i + 1));
               tracks[i] = (a === b && a !== 0);
               break;
            case GROUPS.RANDOM:
               tracks[i] = Boolean(Math.round(Math.random()));
               break;

         }
      }
      return tracks;
   }


   is_all_group_true(all, group){
      for(let i = 0; i < TOTAL_TRACKS; i++){
         if(!all[i] && group[i]){
            return false;
         }
      }
      return true;
   }


   on_playback_all_button_click = () => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if(this.is_all_group_true(this.m.playback_tracks, group_tracks)){
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_playback_track(i, false);
            }
         }
      }else{
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_playback_track(i, this.c.selection_answer(this.m.playback_tracks[i]));
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }

   on_vol_edit_all_button_click = () => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if(this.is_all_group_true(this.m.vol_edit_tracks, group_tracks)){
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_vol_edit_track(i, false);
            }
         }
      }else{
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_vol_edit_track(i, this.c.selection_answer(this.m.vol_edit_tracks[i]));
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }

   on_freq_edit_all_button_click = () => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if(this.is_all_group_true(this.m.freq_edit_tracks, group_tracks)){
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_freq_edit_track(i, false);
            }
         }
      }else{
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_freq_edit_track(i, this.c.selection_answer(this.m.freq_edit_tracks[i]));
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }

   on_chroma_edit_all_button_click = () => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if(this.is_all_group_true(this.m.chroma_edit_tracks, group_tracks)){
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_chroma_edit_track(i, false);
            }
         }
      }else{
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               this.m.set_chroma_edit_track(i, this.c.selection_answer(this.m.chroma_edit_tracks[i]));
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }






   on_playback_change_enter = () => {
      this.m.backup_playback_tracks();
   }
   on_playback_change = (first, last) => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if (first !== null && last !== null) {
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               if (i < first || i > last) {
                  this.m.set_playback_track(i, this.m.playback_tracks_backup[i]);
               } else {
                  this.m.set_playback_track(i, this.c.selection_answer(this.m.playback_tracks_backup[i]));
               }
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }
   on_playback_click = (track) => {

      this.m.set_playback_track(track, !this.m.playback_tracks_backup[track]);
      this.c.update_view();
      this.c.update_audio();
   }

   on_vol_edit_change_enter = () => {
      this.m.backup_vol_edit_tracks();
   }
   on_vol_edit_change = (first, last) => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if (first !== null && last !== null) {
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               if (i < first || i > last) {
                  this.m.set_vol_edit_track(i, this.m.vol_edit_tracks_backup[i]);
               } else {
                  this.m.set_vol_edit_track(i, this.c.selection_answer(this.m.vol_edit_tracks_backup[i]));
               }
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }
   on_vol_edit_click = (track) => {

      this.m.set_vol_edit_track(track, !this.m.vol_edit_tracks_backup[track]);
      this.c.update_view();
      this.c.update_audio();
   }

   on_freq_edit_change_enter = () => {
      this.m.backup_freq_edit_tracks();
   }
   on_freq_edit_change = (first, last) => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if (first !== null && last !== null) {
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               if (i < first || i > last) {
                  this.m.set_freq_edit_track(i, this.m.freq_edit_tracks_backup[i]);
               } else {
                  this.m.set_freq_edit_track(i, this.c.selection_answer(this.m.freq_edit_tracks_backup[i]));
               }
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }
   on_freq_edit_click = (track) => {

      this.m.set_freq_edit_track(track, !this.m.freq_edit_tracks_backup[track]);
      this.c.update_view();
      this.c.update_audio();
   }

   on_chroma_edit_change_enter = () => {
      this.m.backup_chroma_edit_tracks();
   }
   on_chroma_edit_change = (first, last) => {
      let group_tracks = this.group_tracks(this.m.selected_group);
      if (first !== null && last !== null) {
         for (let i = 0; i < TOTAL_TRACKS; i++) {
            if(group_tracks[i]){
               if (i < first || i > last) {
                  this.m.set_chroma_edit_track(i, this.m.chroma_edit_tracks_backup[i]);
               } else {
                  this.m.set_chroma_edit_track(i, this.c.selection_answer(this.m.chroma_edit_tracks_backup[i]));
               }
            }
         }
      }
      this.c.update_view();
      this.c.update_audio();
   }
   on_chroma_edit_click = (track) => {

      this.m.set_chroma_edit_track(track, !this.m.chroma_edit_tracks_backup[track]);
      this.c.update_view();
      this.c.update_audio();
   }
}
