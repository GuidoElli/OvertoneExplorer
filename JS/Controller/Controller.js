class Controller {
   constructor(model, view){
      this.model = model;
      this.view = view;

      this.controller_layout = new Controller_layout(this);
      this.controller_rows = new Controller_rows(this);
      this.controller_keyboard = new Controller_keyboard(this);


      //Tabs
      this.view.bind_sound_tab_button_click(this.controller_layout.on_sound_tab_button_click);
      this.view.bind_vol_tab_button_click(this.controller_layout.on_vol_tab_button_click);
      this.view.bind_freq_tab_button_click(this.controller_layout.on_freq_tab_button_click);
      this.view.bind_dadj_tab_button_click(this.controller_layout.on_dadj_tab_button_click);

      //Rows
      this.view.bind_playback_change_enter(this.controller_rows.on_playback_change_enter);
      this.view.bind_playback_change(this.controller_rows.on_playback_change);
      this.view.bind_playback_click(this.controller_rows.on_playback_click);

      this.view.bind_vol_edit_change_enter(this.controller_rows.on_vol_edit_change_enter);
      this.view.bind_vol_edit_change(this.controller_rows.on_vol_edit_change);
      this.view.bind_vol_edit_click(this.controller_rows.on_vol_edit_click);

      this.view.bind_freq_edit_change_enter(this.controller_rows.on_freq_edit_change_enter);
      this.view.bind_freq_edit_change(this.controller_rows.on_freq_edit_change);
      this.view.bind_freq_edit_click(this.controller_rows.on_freq_edit_click);

      this.view.bind_dadj_edit_change_enter(this.controller_rows.on_dadj_edit_change_enter);
      this.view.bind_dadj_edit_change(this.controller_rows.on_dadj_edit_change);
      this.view.bind_dadj_edit_click(this.controller_rows.on_dadj_edit_click);

      //keyboard
      this.view.bind_ctrl_press(this.controller_keyboard.on_ctrl_press);
      this.view.bind_ctrl_release(this.controller_keyboard.on_ctrl_release);
      this.view.bind_shift_press(this.controller_keyboard.on_shift_press);
      this.view.bind_shift_release(this.controller_keyboard.on_shift_release);


      this.update_view();
   }



   selection_mode_answer = (previous_value) => {
      switch(this.model.selection_mode){
         case SELECTION_MODE.ADD:
            return true;
         case SELECTION_MODE.REMOVE:
            return false;
         case SELECTION_MODE.TOGGLE:
            return !previous_value;
      }
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
