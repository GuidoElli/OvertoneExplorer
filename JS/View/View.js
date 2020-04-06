class View {
   constructor(){
      this.layout_manager = new Layout_manager(this);
      this.rows_manager = new Rows_manager(this);
      this.keyboard_manager = new Keyboard_manager(this);
      this.zoom_manager = new Zoom_manager(this);

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

      this.on_ctrl_press = null;
      this.on_ctrl_release = null;
      this.on_shift_press = null;
      this.on_shift_release = null;

   }






   //BINDINGS

   //Tabs
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

   //Rows
   bind_playback_change_enter = (f) => {
      this.on_playback_change_enter = f;
   }
   bind_playback_change = (f) => {
      this.on_playback_change = f;
   }
   bind_playback_click = (f) => {
      this.on_playback_click = f;
   }

   bind_vol_edit_change_enter = (f) => {
      this.on_vol_edit_change_enter = f;
   }
   bind_vol_edit_change = (f) => {
      this.on_vol_edit_change = f;
   }
   bind_vol_edit_click = (f) => {
      this.on_vol_edit_click = f;
   }

   bind_freq_edit_change_enter = (f) => {
      this.on_freq_edit_change_enter = f;
   }
   bind_freq_edit_change = (f) => {
      this.on_freq_edit_change = f;
   }
   bind_freq_edit_click = (f) => {
      this.on_freq_edit_click = f;
   }

   bind_dadj_edit_change_enter = (f) => {
      this.on_dadj_edit_change_enter = f;
   }
   bind_dadj_edit_change = (f) => {
      this.on_dadj_edit_change = f;
   }
   bind_dadj_edit_click = (f) => {
      this.on_dadj_edit_click = f;
   }

   //Keyboard
   bind_ctrl_press = (f) => {
      this.on_ctrl_press = f;
   }
   bind_ctrl_release = (f) => {
      this.on_ctrl_release = f;
   }

   bind_shift_press = (f) => {
      this.on_shift_press = f;
   }
   bind_shift_release = (f) => {
      this.on_shift_release = f;
   }





   //UPDATE

   update_layout(layout){
      this.layout_manager.set_layout(layout);
      this.zoom_manager.update_layout(layout);
   }
   update_custom_selection(value){
      this.layout_manager.set_custom_selection(value);
   }

   update_playback_tracks(values){
      this.rows_manager.update_playback_tracks(values);
      this.zoom_manager.update_playback_tracks(values);
   }
   update_vol_edit_tracks(values){
      this.rows_manager.update_vol_edit_tracks(values);
      this.zoom_manager.update_vol_edit_tracks(values);
   }
   update_freq_edit_tracks(values){
      this.rows_manager.update_freq_edit_tracks(values);
      this.zoom_manager.update_freq_edit_tracks(values);
   }
   update_dadj_edit_tracks(values){
      this.rows_manager.update_dadj_edit_tracks(values);
      this.zoom_manager.update_dadj_edit_tracks(values);
   }

   update_zoom(first, last){
      this.rows_manager.update_zoom(first, last);
      this.zoom_manager.update_zoom(first, last);
   }

}
