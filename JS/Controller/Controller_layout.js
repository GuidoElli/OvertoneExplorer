class Controller_layout {
   constructor(model, view){
      this.model = model;
      this.view = view;
   }

   on_sound_tab_button_click = () => {
      this.model.layout = LAYOUT.SOUND;
      this.model.custom_selection = false;

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_vol_tab_button_click = () => {
      this.model.layout = LAYOUT.VOL;
      this.model.custom_selection = false;

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_freq_tab_button_click = () => {
      this.model.layout = LAYOUT.FREQ;
      this.model.custom_selection = false;

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }
   on_dadj_tab_button_click = () => {
      this.model.layout = LAYOUT.DADJ;
      this.model.custom_selection = false;

      this.view.update_layout(this.model.layout);
      this.view.update_custom_selection(this.model.custom_selection);
   }


}
