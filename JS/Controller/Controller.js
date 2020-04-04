class Controller {
   constructor(model, view){
      this.model = model;
      this.view = view;


      this.view.bind_sound_tab_button_click(this.on_sound_tab_button_click);
      this.view.bind_vol_tab_button_click(this.on_vol_tab_button_click);
      this.view.bind_freq_tab_button_click(this.on_freq_tab_button_click);
      this.view.bind_dadj_tab_button_click(this.on_dadj_tab_button_click);


      this.view.bind_playback_change_enter(this.on_playback_change_enter);
      this.view.bind_playback_change(this.on_playback_change);
      this.view.bind_playback_click(this.on_playback_click);

      this.view.bind_vol_edit_change_enter(this.on_vol_edit_change_enter);
      this.view.bind_vol_edit_change(this.on_vol_edit_change);
      this.view.bind_vol_edit_click(this.on_vol_edit_click);

      this.view.bind_freq_edit_change_enter(this.on_freq_edit_change_enter);
      this.view.bind_freq_edit_change(this.on_freq_edit_change);
      this.view.bind_freq_edit_click(this.on_freq_edit_click);

      this.view.bind_dadj_edit_change_enter(this.on_dadj_edit_change_enter);
      this.view.bind_dadj_edit_change(this.on_dadj_edit_change);
      this.view.bind_dadj_edit_click(this.on_dadj_edit_click);

      this.update_view();
   }


   on_sound_tab_button_click = () => {
      this.model.set_layout(LAYOUT.SOUND);
      this.model.set_custom_selection(false);

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_vol_tab_button_click = () => {
      this.model.set_layout(LAYOUT.VOL);
      this.model.set_custom_selection(false);

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_freq_tab_button_click = () => {
      this.model.set_layout(LAYOUT.FREQ);
      this.model.set_custom_selection(false);

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_dadj_tab_button_click = () => {
      this.model.set_layout(LAYOUT.DADJ);
      this.model.set_custom_selection(false);

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }



   on_playback_change_enter = () => {
      this.model.backup_playback_tracks();
   }
   on_playback_change = (first, last) => {
      if(first !== null && last !== null){
         if(first == last){
            this.model.set_playback_track(first, true);
         }else{
            for(let i = 0; i < TOTAL_TRACKS; i++){
               if(i < first || i > last){
                  this.model.set_playback_track(i, this.model.playback_tracks_backup[i]);
               }else{
                  //TODO selection mode
                  this.model.set_playback_track(i, true);
               }
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
         if(first == last){
            this.model.set_vol_edit_track(first, true);
         }else{
            for(let i = 0; i < TOTAL_TRACKS; i++){
               if(i < first || i > last){
                  this.model.set_vol_edit_track(i, this.model.vol_edit_tracks_backup[i]);
               }else{
                  //TODO selection mode
                  this.model.set_vol_edit_track(i, true);
               }
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
         if(first == last){
            this.model.set_freq_edit_track(first, true);
         }else{
            for(let i = 0; i < TOTAL_TRACKS; i++){
               if(i < first || i > last){
                  this.model.set_freq_edit_track(i, this.model.freq_edit_tracks_backup[i]);
               }else{
                  //TODO selection mode
                  this.model.set_freq_edit_track(i, true);
               }
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
         if(first == last){
            this.model.set_dadj_edit_track(first, true);
         }else{
            for(let i = 0; i < TOTAL_TRACKS; i++){
               if(i < first || i > last){
                  this.model.set_dadj_edit_track(i, this.model.dadj_edit_tracks_backup[i]);
               }else{
                  //TODO selection mode
                  this.model.set_dadj_edit_track(i, true);
               }
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






   update_view(){
      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);

      this.view.update_playback_tracks(this.model.playback_tracks);
      this.view.update_vol_edit_tracks(this.model.vol_edit_tracks);
      this.view.update_freq_edit_tracks(this.model.freq_edit_tracks);
      this.view.update_dadj_edit_tracks(this.model.dadj_edit_tracks);

      this.view.update_zoom(this.model.first_visible_track, this.model.last_visible_track)
      //

   }
}







var app = new Controller(new Model(), new View());
