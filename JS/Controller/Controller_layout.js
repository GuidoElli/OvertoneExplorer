class Controller_layout {
   constructor(controller){
      this.c = controller;
   }

   on_sound_tab_button_click = () => {
      this.c.model.layout = LAYOUT.SOUND;
      this.c.model.custom_selection = false;

      this.c.view.update_layout(this.c.model.layout);
      this.c.view.update_custom_selection(this.c.model.custom_selection);
   }
   on_vol_tab_button_click = () => {
      this.c.model.layout = LAYOUT.VOL;
      this.c.model.custom_selection = false;

      this.c.view.update_layout(this.c.model.layout);
      this.c.view.update_custom_selection(this.c.model.custom_selection);
   }
   on_freq_tab_button_click = () => {
      this.c.model.layout = LAYOUT.FREQ;
      this.c.model.custom_selection = false;

      this.c.view.update_layout(this.c.model.layout);
      this.c.view.update_custom_selection(this.c.model.custom_selection);
   }
   on_dadj_tab_button_click = () => {
      this.c.model.layout = LAYOUT.DADJ;
      this.c.model.custom_selection = false;

      this.c.view.update_layout(this.c.model.layout);
      this.c.view.update_custom_selection(this.c.model.custom_selection);
   }


}
