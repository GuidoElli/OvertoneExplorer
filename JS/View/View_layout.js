class View_layout {
   constructor(view){

      this.v = view;

      this.layout_left = null;
      this.layout_right= null;

      this.title_field = $(".left_bar_title_section")[0];
      this.home_button_section = $(".home_button_section")[0];

      this.home_button = $(".home_button")[0];
      this.settings_button = $(".settings_button")[0];
      this.vol_edit_button = $(".vol_edit_button")[0];
      this.freq_edit_button = $(".freq_edit_button")[0];
      this.chroma_edit_button = $(".chroma_edit_button")[0];
      this.selection_button = $(".selection_button")[0];
      this.help_button = $(".help_button")[0];


      this.home_button.addEventListener("click", () => {
         this.v.on_home_button_click();
      })
      this.settings_button.addEventListener("click", () => {
         this.v.on_settings_button_click();
      })
      this.vol_edit_button.addEventListener("click", () => {
         this.v.on_vol_edit_button_click();
      })
      this.freq_edit_button.addEventListener("click", () => {
         this.v.on_freq_edit_button_click();
      })
      this.chroma_edit_button.addEventListener("click", () => {
         this.v.on_chroma_edit_button_click();
      })
      this.help_button.addEventListener("click", () => {
         this.v.on_help_button_click();
      })

      
      //Visual
      this.visual_vol_section = $(".visual_vol_section")[0];
      this.visual_freq_section = $(".visual_freq_section")[0];

      //Rows
      this.row_playback_box = $(".row_playback_box")[0];
      this.row_vol_edit_box = $(".row_vol_edit_box")[0];
      this.row_freq_edit_box = $(".row_freq_edit_box")[0];
      this.row_chroma_edit_box = $(".row_chroma_edit_box")[0];

      //Zoom
      this.zoom_box = $(".zoom_box")[0];

      //Boxes (left)
      this.home_box = $(".home_box")[0];
      this.vol_edit_box = $(".vol_edit_box")[0];
      this.freq_edit_box = $(".freq_edit_box")[0];
      this.chroma_edit_box = $(".chroma_edit_box")[0];
      this.settings_box = $(".settings_box")[0];
      this.selection_box = $(".selection_box")[0];
      this.help_box = $(".help_box")[0];


      //All buttons
      this.playback_all_button = $(".playback_all_button")[0];
      this.vol_edit_all_button = $(".vol_edit_all_button")[0];
      this.freq_edit_all_button = $(".freq_edit_all_button")[0];
      this.chroma_edit_all_button = $(".chroma_edit_all_button")[0];


      this.playback_all_button_section = $(".playback_all_button_section")[0];
      this.vol_edit_all_button_section = $(".vol_edit_all_button_section")[0];
      this.freq_edit_all_button_section = $(".freq_edit_all_button_section")[0];
      this.chroma_edit_all_button_section = $(".chroma_edit_all_button_section")[0];


      this.playback_all_button.addEventListener("click", () => {
         this.v.on_playback_all_button_click();
      })
      this.vol_edit_all_button.addEventListener("click", () => {
         this.v.on_vol_edit_all_button_click();
      })
      this.freq_edit_all_button.addEventListener("click", () => {
         this.v.on_freq_edit_all_button_click();
      })
      this.chroma_edit_all_button.addEventListener("click", () => {
         this.v.on_chroma_edit_all_button_click();
      })




      this.custom_selection_button = $(".custom_selection_button")[0];
      this.custom_selection_button.addEventListener("click", () => {
         this.v.on_custom_selection_button_click();
      })


      this.vol_visual_side_section = $(".vol_visual_side_section")[0];
      this.freq_visual_side_section = $(".freq_visual_side_section")[0];

   }

   set_layout(layout_left, layout_right, custom_selection){

      this.layout_left = layout_left;
      this.layout_right = layout_right;

      this.home_button_section.classList.toggle("hidden", false);
      this.home_button_section.style.width = "20%";
      this.title_field.style.width = "80%";

      this.visual_vol_section.classList.toggle("hidden", true);
      this.visual_freq_section.classList.toggle("hidden", true);
      this.vol_visual_side_section.classList.toggle("hidden", true);
      this.freq_visual_side_section.classList.toggle("hidden", true);

      this.home_box.classList.toggle("hidden", true);
      this.vol_edit_box.classList.toggle("hidden", true);
      this.freq_edit_box.classList.toggle("hidden", true);
      this.chroma_edit_box.classList.toggle("hidden", true);
      this.settings_box.classList.toggle("hidden", true);
      this.selection_box.classList.toggle("hidden", true);
      this.help_box.classList.toggle("hidden", true);



      if(custom_selection){
         this.selection_box.classList.toggle("hidden", false);
         this.custom_selection_button.classList.toggle("active", true);
         this.set_title("Custom Selection");
      }else{

         this.custom_selection_button.classList.toggle("active", false);

         this.visual_vol_section.classList.toggle("hidden", true);
         this.visual_freq_section.classList.toggle("hidden", true);

         this.row_playback_box.style.height = "100%";
         this.row_vol_edit_box.classList.toggle("hidden", true);
         this.row_freq_edit_box.classList.toggle("hidden", true);
         this.row_chroma_edit_box.classList.toggle("hidden", true);

         this.playback_all_button_section.style.height = "100%";
         this.vol_edit_all_button_section.classList.toggle("hidden", true);
         this.freq_edit_all_button_section.classList.toggle("hidden", true);
         this.chroma_edit_all_button_section.classList.toggle("hidden", true);

         switch(this.layout_left){
            case LAYOUT_LEFT.HOME:

               this.home_button_section.classList.toggle("hidden", true);
               this.title_field.style.width = "100%";

               this.home_box.classList.toggle("hidden", false);
               this.set_title("Overtone Explorer");
               break;

            case LAYOUT_LEFT.VOL:
               this.vol_edit_box.classList.toggle("hidden", false);
               this.row_vol_edit_box.classList.toggle("hidden", false);

               this.row_playback_box.style.height = "50%";
               this.row_vol_edit_box.style.height = "50%";

               this.playback_all_button_section.style.height = "50%";
               this.vol_edit_all_button_section.style.height = "50%";
               this.vol_edit_all_button_section.classList.toggle("hidden", false);

               this.set_title("Amplitude Editor");
               break;

            case LAYOUT_LEFT.FREQ:
               this.freq_edit_box.classList.toggle("hidden", false);
               this.row_freq_edit_box.classList.toggle("hidden", false);

               this.row_playback_box.style.height = "50%";
               this.row_freq_edit_box.style.height = "50%";

               this.playback_all_button_section.style.height = "50%";
               this.freq_edit_all_button_section.style.height = "50%";
               this.freq_edit_all_button_section.classList.toggle("hidden", false);

               this.set_title("Frequency Editor");
               break;

            case LAYOUT_LEFT.CHROMA:
               this.chroma_edit_box.classList.toggle("hidden", false);
               this.row_chroma_edit_box.classList.toggle("hidden", false);

               this.row_playback_box.style.height = "50%";
               this.row_chroma_edit_box.style.height = "50%";

               this.playback_all_button_section.style.height = "50%";
               this.chroma_edit_all_button_section.style.height = "50%";
               this.chroma_edit_all_button_section.classList.toggle("hidden", false);

               this.set_title("Chroma Editor");
               break;

            case LAYOUT_LEFT.SETTINGS:
               this.settings_box.classList.toggle("hidden", false);
               this.set_title("Settings");
               break;

            case LAYOUT_LEFT.HELP:
               this.help_box.classList.toggle("hidden", false);
               this.set_title("Help");
               break;
         }
      }




      switch(this.layout_right){
         case LAYOUT_RIGHT.DEFAULT:
            this.visual_vol_section.classList.toggle("hidden", false);
            this.visual_freq_section.classList.toggle("hidden", false);
            this.vol_visual_side_section.classList.toggle("hidden", false);
            this.freq_visual_side_section.classList.toggle("hidden", false);
            this.visual_vol_section.style.height = "50%";
            this.visual_freq_section.style.height = "50%";
            this.vol_visual_side_section.style.height = "50%";
            this.freq_visual_side_section.style.height = "50%";
            break;

         case LAYOUT_RIGHT.VOL_ONLY:
            this.visual_vol_section.classList.toggle("hidden", false);
            this.vol_visual_side_section.classList.toggle("hidden", false);
            this.visual_vol_section.style.height = "100%";
            this.vol_visual_side_section.style.height = "100%";
            break;

         case LAYOUT_RIGHT.FREQ_ONLY:
            this.visual_freq_section.classList.toggle("hidden", false);
            this.freq_visual_side_section.classList.toggle("hidden", false);
            this.visual_freq_section.style.height = "100%";
            this.freq_visual_side_section.style.height = "100%";
            break;

      }

   }



   set_title = (title) => {
      this.title_field.innerHTML = title;
   }

}
