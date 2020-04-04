class Layout {
   constructor(){

      this.current_layout = null;

      //Visual
      this.visual_vol_box = $(".visual_vol_box")[0];
      this.visual_freq_box = $(".visual_freq_box")[0];

      //Rows
      this.row_playback_box = $(".row_playback_box")[0];
      this.row_vol_edit_box = $(".row_vol_edit_box")[0];
      this.row_freq_edit_box = $(".row_freq_edit_box")[0];
      this.row_dadj_edit_box = $(".row_dadj_edit_box")[0];

      //Zoom
      this.zoom_box = $(".zoom_box")[0];

      //Controls
      this.sound_box = $(".sound_box")[0];
      this.vol_edit_box = $(".vol_edit_box")[0];
      this.freq_edit_box = $(".freq_edit_box")[0];
      this.dadj_edit_box = $(".dadj_edit_box")[0];

      this.selection_box = $(".selection_box")[0];

      //Help windows
      this.help_window_sound_box = $(".help_window_sound_box")[0];
      this.help_window_freq_box = $(".help_window_freq_box")[0];
      this.help_window_vol_box = $(".help_window_vol_box")[0];
      this.help_window_dadj_box = $(".help_window_dadj_box")[0];

   }

   set_layout(layout){

      this.current_layout = layout;
      
      this.visual_vol_box.classList.toggle("hidden", true);
      this.visual_freq_box.classList.toggle("hidden", true);

      this.row_vol_edit_box.classList.toggle("hidden", true);
      this.row_freq_edit_box.classList.toggle("hidden", true);
      this.row_dadj_edit_box.classList.toggle("hidden", true);

      this.sound_box.classList.toggle("hidden", true);
      this.vol_edit_box.classList.toggle("hidden", true);
      this.freq_edit_box.classList.toggle("hidden", true);
      this.dadj_edit_box.classList.toggle("hidden", true);

      this.help_window_sound_box.classList.toggle("hidden", true);
      this.help_window_vol_box.classList.toggle("hidden", true);
      this.help_window_freq_box.classList.toggle("hidden", true);
      this.help_window_dadj_box.classList.toggle("hidden", true);


      switch(this.current_layout){
         case LAYOUT.SOUND:
            this.visual_vol_box.classList.toggle("hidden", false);
            this.visual_freq_box.classList.toggle("hidden", false);
            this.sound_box.classList.toggle("hidden", false);
            this.help_window_sound_box.classList.toggle("hidden", false);
            
            this.visual_vol_box.style.height = "50%";
            this.visual_freq_box.style.height = "50%";
            this.row_playback_box.style.height = "100%";
            break;
         case LAYOUT.VOL:
            this.visual_vol_box.classList.toggle("hidden", false);
            this.row_vol_edit_box.classList.toggle("hidden", false);
            this.vol_edit_box.classList.toggle("hidden", false);
            this.help_window_vol_box.classList.toggle("hidden", false);
            
            this.visual_vol_box.style.height = "100%";
            this.row_playback_box.style.height = "50%";
            this.row_vol_edit_box.style.height = "50%";
            break;
         case LAYOUT.FREQ:
            this.visual_freq_box.classList.toggle("hidden", false);
            this.row_freq_edit_box.classList.toggle("hidden", false);
            this.freq_edit_box.classList.toggle("hidden", false);
            this.help_window_freq_box.classList.toggle("hidden", false);
            
            this.visual_freq_box.style.height = "100%";
            this.row_playback_box.style.height = "50%";
            this.row_freq_edit_box.style.height = "50%";
            break;
         case LAYOUT.DADJ:
            this.visual_vol_box.classList.toggle("hidden", false);
            this.visual_freq_box.classList.toggle("hidden", false);
            this.row_dadj_edit_box.classList.toggle("hidden", false);
            this.dadj_edit_box.classList.toggle("hidden", false);
            this.help_window_dadj_box.classList.toggle("hidden", false);
            
            this.visual_vol_box.style.height = "50%";
            this.visual_freq_box.style.height = "50%";
            this.row_playback_box.style.height = "50%";
            this.row_dadj_edit_box.style.height = "50%";
            break;
      }

   }

   set_custom_selection(state){
      if(state){
         this.sound_box.classList.toggle("hidden", true);
         this.vol_edit_box.classList.toggle("hidden", true);
         this.freq_edit_box.classList.toggle("hidden", true);
         this.dadj_edit_box.classList.toggle("hidden", true);
         this.selection_box.classList.toggle("hidden", false);
      }else{
         this.selection_box.classList.toggle("hidden", true);
         switch(this.current_layout){
            case LAYOUT.SOUND:
               this.sound_box.classList.toggle("hidden", false);
               break;
            case LAYOUT.VOL:
               this.vol_edit_box.classList.toggle("hidden", false);
               break;
            case LAYOUT.FREQ:
               this.freq_edit_box.classList.toggle("hidden", false);
               break;
            case LAYOUT.DADJ:
               this.row_dadj_edit_box.classList.toggle("hidden", false);
               break;
         }
      }
   }

}
