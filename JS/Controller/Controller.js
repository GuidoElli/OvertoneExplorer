class Controller {
   constructor(model, view){
      this.model = model;
      this.view = view;


      this.controller_tabs = new Controller_tabs(model, view);
      this.controller_rows = new Controller_rows(model, view);



      this.ctrl_pressed = false;
      this.shift_pressed = false;




      this.view.bind_sound_tab_button_click(this.controller_tabs.on_sound_tab_button_click);
      this.view.bind_vol_tab_button_click(this.controller_tabs.on_vol_tab_button_click);
      this.view.bind_freq_tab_button_click(this.controller_tabs.on_freq_tab_button_click);
      this.view.bind_dadj_tab_button_click(this.controller_tabs.on_dadj_tab_button_click);

      
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

      this.update_view();
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
