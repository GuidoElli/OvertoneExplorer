class Controller {
   constructor(model, view){
      this.model = model;
      this.view = view;


      //Controller
      this.layout = new Controller_layout(this, model);
      this.rows = new Controller_rows(this, model);
      this.keyboard = new Controller_keyboard(this, model);
      this.zoom = new Controller_zoom(this, model);




      //Tabs
      this.view.on_sound_tab_button_click = this.layout.on_sound_tab_button_click;
      this.view.on_vol_tab_button_click = this.layout.on_vol_tab_button_click;
      this.view.on_freq_tab_button_click = this.layout.on_freq_tab_button_click;
      this.view.on_dadj_tab_button_click = this.layout.on_dadj_tab_button_click;

      //Rows
      this.view.on_playback_change_enter = this.rows.on_playback_change_enter;
      this.view.on_playback_change = this.rows.on_playback_change;
      this.view.on_playback_click = this.rows.on_playback_click;

      this.view.on_vol_edit_change_enter = this.rows.on_vol_edit_change_enter;
      this.view.on_vol_edit_change = this.rows.on_vol_edit_change;
      this.view.on_vol_edit_click = this.rows.on_vol_edit_click;

      this.view.on_freq_edit_change_enter = this.rows.on_freq_edit_change_enter;
      this.view.on_freq_edit_change = this.rows.on_freq_edit_change;
      this.view.on_freq_edit_click = this.rows.on_freq_edit_click;

      this.view.on_dadj_edit_change_enter = this.rows.on_dadj_edit_change_enter;
      this.view.on_dadj_edit_change = this.rows.on_dadj_edit_change;
      this.view.on_dadj_edit_click = this.rows.on_dadj_edit_click;

      //keyboard
      this.view.on_ctrl_press = this.keyboard.on_ctrl_press;
      this.view.on_ctrl_release = this.keyboard.on_ctrl_release;
      this.view.on_shift_press = this.keyboard.on_shift_press;
      this.view.on_shift_release = this.keyboard.on_shift_release;

      //Zoom
      this.view.on_zoom_slider_set = this.zoom.on_zoom_slider_set;
      this.view.on_zoom_slider_wheel = this.zoom.on_zoom_slider_wheel;
      this.view.on_visual_wheel = this.zoom.on_visual_wheel;
      this.view.on_zoom_plus_button_click = this.zoom.on_zoom_plus_button_click;
      this.view.on_zoom_minus_button_click = this.zoom.on_zoom_minus_button_click;
      this.view.on_zoom_left_button_click = this.zoom.on_zoom_left_button_click;
      this.view.on_zoom_right_button_click = this.zoom.on_zoom_right_button_click;

      this.update_view();
   }



   selection_answer = (previous_value) => {
      switch(this.model.selection_mode){
         case SELECTION_MODE.ADD:
            return true;
         case SELECTION_MODE.REMOVE:
            return false;
         case SELECTION_MODE.TOGGLE:
            return !previous_value;
      }
   }





   update_zoom(){
      this.view.update_zoom(this.model.first_visible_track, this.model.last_visible_track);
   }
   update_layout(){
      this.view.update_layout(this.model.layout);
   }
   update_custom_selection(){
      this.view.update_custom_selection(this.model.custom_selection);
   }

   update_playback_tracks(){
      this.view.update_playback_tracks(this.model.playback_tracks);
   }
   update_vol_edit_tracks(){
      this.view.update_vol_edit_tracks(this.model.vol_edit_tracks);
   }
   update_freq_edit_tracks(){
      this.view.update_freq_edit_tracks(this.model.freq_edit_tracks);
   }
   update_dadj_edit_tracks(){
      this.view.update_dadj_edit_tracks(this.model.dadj_edit_tracks);
   }


   update_view(){
      this.update_layout();
      this.update_zoom();

      this.update_custom_selection();

      this.update_playback_tracks();
      this.update_vol_edit_tracks();
      this.update_freq_edit_tracks();
      this.update_dadj_edit_tracks();

   }
}
