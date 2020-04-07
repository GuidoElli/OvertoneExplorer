class View {
   constructor(){

      //Managers
      this.layout = new View_layout(this);
      this.rows = new View_rows(this);
      this.keyboard = new View_keyboard(this);
      this.zoom = new View_zoom(this);
      this.vol_visual = new View_vol_visual(this);


      //Tabs
      this.on_sound_tab_button_click = null;
      this.on_vol_tab_button_click = null;
      this.on_freq_tab_button_click = null;
      this.on_dadj_tab_button_click = null;

      //Rows
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

      //Zoom
      this.on_zoom_center_edit = null;
      this.on_zoom_center_up = null;
      this.on_zoom_center_down = null;

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

   //Zoom
   bind_zoom_center_edit = (f) => {
      this.on_zoom_center_edit = f;
   }
   bind_zoom_center_up = (f) => {
      this.on_zoom_center_up = f;
   }
   bind_zoom_center_down = (f) => {
      this.on_zoom_center_down = f;
   }

   bind_zoom_width_up = (f) => {
      this.on_zoom_width_up = f;
   }
   bind_zoom_width_down = (f) => {
      this.on_zoom_width_down = f;
   }





   //UPDATE

   update_layout(layout){
      this.layout.set_layout(layout);
      this.zoom.update_layout(layout);
   }
   update_custom_selection(value){
      this.layout.set_custom_selection(value);
   }

   update_playback_tracks(values){
      this.rows.update_playback_tracks(values);
      this.zoom.update_playback_tracks(values);
   }
   update_vol_edit_tracks(values){
      this.rows.update_vol_edit_tracks(values);
      this.zoom.update_vol_edit_tracks(values);
   }
   update_freq_edit_tracks(values){
      this.rows.update_freq_edit_tracks(values);
      this.zoom.update_freq_edit_tracks(values);
   }
   update_dadj_edit_tracks(values){
      this.rows.update_dadj_edit_tracks(values);
      this.zoom.update_dadj_edit_tracks(values);
   }

   update_zoom(first, last){
      this.rows.update_zoom(first, last);
      this.zoom.update_zoom(first, last);
      this.vol_visual.update_zoom(first, last);
   }

}
