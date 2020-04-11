class View_vol_edit {
   constructor(view){
      this.v = view;


      this.ve_scale_choose_items = $(".ve_scale_choose_item");
      this.ve_scale_choose_items[0].addEventListener("click", () => {
         this.v.on_ve_scale_change(SCALE_TYPE.LIN);
      })
      this.ve_scale_choose_items[1].addEventListener("click", () => {
         this.v.on_ve_scale_change(SCALE_TYPE.LOG);
      })


      this.ve_shape_choose_items = $(".ve_shape_choose_item");
      this.ve_shape_choose_items[0].addEventListener("click", () => {
         this.v.on_ve_shape_change(EDITOR_SHAPE.FLAT);
      })
      this.ve_shape_choose_items[1].addEventListener("click", () => {
         this.v.on_ve_shape_change(EDITOR_SHAPE.TRIANGLE);
      })
      this.ve_shape_choose_items[2].addEventListener("click", () => {
         this.v.on_ve_shape_change(EDITOR_SHAPE.CURVE);
      })

      this.ve_amount_knob_canvas = $(".ve_amount_knob")[0];
      this.ve_amount_knob = new Knob(this.ve_amount_knob_canvas, -MAX_VE_AMOUNT_LIN, MAX_VE_AMOUNT_LIN, 0, 0);
      this.ve_amount_knob.display_value = true;
      this.ve_amount_knob.decimals = 1;
      this.ve_amount_knob.unit_of_measurement = "x";
      this.ve_amount_knob.interval_color = "rgb(11, 112, 196)";
      this.ve_amount_knob.on_change = (pixel_diff) => {
         this.v.on_ve_amount_change(pixel_diff);
      }

      this.ve_center_knob_canvas = $(".ve_center_knob")[0];
      this.ve_center_knob = new Knob(this.ve_center_knob_canvas, 0, 1, 0.5, 0.5);
      this.ve_center_knob.display_value = false;
      this.ve_center_knob.interval_color = "rgb(11, 112, 196)";
      this.ve_center_knob.on_change = (pixel_diff) => {
         this.v.on_ve_center_change(pixel_diff);
      }

      this.ve_width_knob_canvas = $(".ve_width_knob")[0];
      this.ve_width_knob = new Knob(this.ve_width_knob_canvas, 0, 1, 0.5, 0.5);
      this.ve_width_knob.display_value = false;
      this.ve_width_knob.interval_color = "rgb(11, 112, 196)";
      this.ve_width_knob.on_change = (pixel_diff) => {
         this.v.on_ve_width_change(pixel_diff);
      }

      this.ve_random_button = $(".ve_random_button")[0];
      this.ve_random_button.addEventListener("click", () => {
         this.v.on_ve_random_click();
      })

      this.ve_mirror_button = $(".ve_mirror_button")[0];
      this.ve_mirror_button.addEventListener("click", () => {
         this.v.on_ve_mirror_click();
      })

      this.ve_randomize_button = $(".ve_randomize_button")[0];
      this.ve_randomize_button.addEventListener("click", () => {
         this.v.on_ve_randomize_click();
      })


      this.ve_apply_button = $(".ve_apply_button")[0];
      this.ve_apply_button.addEventListener("click", () => {
         this.v.on_ve_apply_click();
      })

      this.ve_reset_button = $(".ve_reset_button")[0];
      this.ve_reset_button.addEventListener("click", () => {
         this.v.on_ve_reset_click();
      })
      

   }


   update_scale = (scale_type) => {
      switch(scale_type){
         case SCALE_TYPE.LIN:
            this.ve_scale_choose_items[0].classList.toggle("active", true);
            this.ve_scale_choose_items[1].classList.toggle("active", false);

            this.ve_amount_knob.max_value = MAX_VE_AMOUNT_LIN;
            this.ve_amount_knob.min_value = -MAX_VE_AMOUNT_LIN;
            this.ve_amount_knob.unit_of_measurement = "x";
            break;

         case SCALE_TYPE.LOG:
            this.ve_scale_choose_items[0].classList.toggle("active", false);
            this.ve_scale_choose_items[1].classList.toggle("active", true);

            this.ve_amount_knob.max_value = MAX_VE_AMOUNT_LOG;
            this.ve_amount_knob.min_value = -MAX_VE_AMOUNT_LOG;
            this.ve_amount_knob.unit_of_measurement = "dB";
            break;
      }
   }
   
   update_shape = (editor_shape) => {
      switch(editor_shape){
         case EDITOR_SHAPE.FLAT:
            this.ve_shape_choose_items[0].classList.toggle("active", true);
            this.ve_shape_choose_items[1].classList.toggle("active", false);
            this.ve_shape_choose_items[2].classList.toggle("active", false);
            break;

         case EDITOR_SHAPE.TRIANGLE:
            this.ve_shape_choose_items[0].classList.toggle("active", false);
            this.ve_shape_choose_items[1].classList.toggle("active", true);
            this.ve_shape_choose_items[2].classList.toggle("active", false);
            break;

         case EDITOR_SHAPE.CURVE:
            this.ve_shape_choose_items[0].classList.toggle("active", false);
            this.ve_shape_choose_items[1].classList.toggle("active", false);
            this.ve_shape_choose_items[2].classList.toggle("active", true);
            break;
      }
   }

   update_amount = (value) => {
      this.ve_amount_knob.value = value;
      this.ve_amount_knob.update();
   }
   update_center = (value) => {
      this.ve_center_knob.value = value;
      this.ve_center_knob.update();
   }
   update_width = (value) => {
      this.ve_width_knob.value = value;
      this.ve_width_knob.update();
   }

   update_random = (value) => {
      this.ve_random_button.classList.toggle("active", value);
   }
   update_mirror = (value) => {
      this.ve_mirror_button.classList.toggle("active", value);
   }



   update_canvases = () => {
      this.ve_amount_knob.update();
      this.ve_center_knob.update();
      this.ve_width_knob.update();
   }
}
