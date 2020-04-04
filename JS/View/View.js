class View {
   constructor(){
      this.layout_manager = new Layout_manager(this);
      this.rows_manager = new Rows_manager(this);

      this.on_sound_tab_button_click = null;
      this.on_vol_tab_button_click = null;
      this.on_freq_tab_button_click = null;
      this.on_dadj_tab_button_click = null;

      this.on_playback_change_enter = null;
      this.on_playback_change = null;
      this.on_playback_click = null;

      this.on_vol_edit_change_enter = null;
      this.on_vol_edit_change = null;
      this.on_vol_edit_click = null;

      this.on_freq_edit_change_enter = null;
      this.on_freq_edit_change = null;
      this.on_freq_edit_click = null;
      
      this.on_dadj_edit_change_enter = null;
      this.on_dadj_edit_change = null;
      this.on_dadj_edit_click = null;

   }






   //bindings

   bind_sound_tab_button_click = (f) => {
      this.on_sound_tab_button_click = f;
   }
   bind_vol_tab_button_click = (f) => {
      this.on_vol_edit_tab_button_click = f;
   }
   bind_freq_tab_button_click = (f) => {
      this.on_freq_edit_tab_button_click = f;
   }
   bind_dadj_tab_button_click = (f) => {
      this.on_dadj_edit_tab_button_click = f;
   }

   bind_playback_change_enter(f){
      this.on_playback_change_enter = f;
   }
   bind_playback_change(f){
      this.on_playback_change = f;
   }
   bind_playback_click(f){
      this.on_playback_click = f;
   }

   bind_vol_edit_change_enter(f){
      this.on_vol_edit_change_enter = f;
   }
   bind_vol_edit_change(f){
      this.on_vol_edit_change = f;
   }
   bind_vol_edit_click(f){
      this.on_vol_edit_click = f;
   }

   bind_freq_edit_change_enter(f){
      this.on_freq_edit_change_enter = f;
   }
   bind_freq_edit_change(f){
      this.on_freq_edit_change = f;
   }
   bind_freq_edit_click(f){
      this.on_freq_edit_click = f;
   }

   bind_dadj_edit_change_enter(f){
      this.on_dadj_edit_change_enter = f;
   }
   bind_dadj_edit_change(f){
      this.on_dadj_edit_change = f;
   }
   bind_dadj_edit_click(f){
      this.on_dadj_edit_click = f;
   }





   //update

   update_layout(layout){
      this.layout_manager.set_layout(layout);
   }
   update_custom_selection(value){
      this.layout_manager.set_custom_selection(value);
   }

   update_playback_tracks(values){
      this.rows_manager.update_playback_tracks(values);
   }
   update_vol_edit_tracks(values){
      this.rows_manager.update_vol_edit_tracks(values);
   }
   update_freq_edit_tracks(values){
      this.rows_manager.update_freq_edit_tracks(values);
   }
   update_dadj_edit_tracks(values){
      this.rows_manager.update_dadj_edit_tracks(values);
   }

   update_zoom(first, last){
      this.rows_manager.update_zoom(first, last);
   }

}
