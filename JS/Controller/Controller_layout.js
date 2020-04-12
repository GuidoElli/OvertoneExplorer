class Controller_layout {
   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }

   on_sound_tab_button_click = () => {
      this.m.layout = LAYOUT.SOUND;
      this.m.custom_selection = false;

      this.c.update_view();
   }
   on_vol_tab_button_click = () => {
      this.m.layout = LAYOUT.VOL;
      this.m.custom_selection = false;

      this.c.update_view();
   }
   on_freq_tab_button_click = () => {
      this.m.layout = LAYOUT.FREQ;
      this.m.custom_selection = false;

      this.c.update_view();
   }
   on_dadj_tab_button_click = () => {
      this.m.layout = LAYOUT.DADJ;
      this.m.custom_selection = false;

      this.c.update_view();
   }


}
