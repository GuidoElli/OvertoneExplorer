class View {
   constructor(){

      //View
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
      this.on_zoom_slider_set = null;
      this.on_zoom_slider_wheel = null;
      this.on_visual_wheel = null;
      this.on_zoom_plus_button_click = null;
      this.on_zoom_minus_button_click = null;
      this.on_zoom_left_button_click = null;
      this.on_zoom_right_button_click = null;

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
