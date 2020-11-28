class Controller_layout {
   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }



   on_home_button_click = () => {
      if(this.m.custom_selection){
         this.m.selected_group = null;
      }
      this.m.layout_left = LAYOUT_LEFT.HOME;
      this.m.custom_selection = false;
      this.m.layout_right = LAYOUT_RIGHT.DEFAULT;
      this.c.update_view();
   }
   on_settings_button_click = () => {
      this.m.layout_left = LAYOUT_LEFT.SETTINGS;
      this.m.custom_selection = false;
      this.m.layout_right = LAYOUT_RIGHT.DEFAULT;
      this.c.update_view();
   }
   on_vol_edit_button_click = () => {
      this.m.layout_left = LAYOUT_LEFT.VOL;
      this.m.custom_selection = false;
      this.m.layout_right = LAYOUT_RIGHT.VOL_ONLY;
      this.c.update_view();
   }
   on_freq_edit_button_click = () => {
      this.m.layout_left = LAYOUT_LEFT.FREQ;
      this.m.custom_selection = false;
      this.m.layout_right = LAYOUT_RIGHT.FREQ_ONLY;
      this.c.update_view();
   }
   on_chroma_edit_button_click = () => {
      this.m.layout_left = LAYOUT_LEFT.CHROMA;
      this.m.custom_selection = false;
      this.m.layout_right = LAYOUT_RIGHT.DEFAULT;
      this.c.update_view();
   }
   on_help_button_click = () => {
      this.m.layout_left = LAYOUT_LEFT.HELP;
      this.m.layout_right = LAYOUT_RIGHT.DEFAULT;
      this.c.update_view();
   }


}
