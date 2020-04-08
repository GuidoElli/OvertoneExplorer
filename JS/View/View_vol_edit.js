class View_vol_edit {
   constructor(view){
      this.v = view;


      this.ve_scale_choose_items = $(".ve_scale_choose_item");

      this.ve_range_knob_canvas = $(".ve_range_knob")[0];
      this.ve_range_knob = new Knob(this.ve_range_knob_canvas);
      

      this.ve_shape_choose_items = $(".ve_shape_choose_item");

      this.ve_amount_knob_canvas = $(".ve_amount_knob")[0];
      this.ve_amount_knob = new Knob(this.ve_amount_knob_canvas);

      this.ve_center_knob_canvas = $(".ve_center_knob")[0];
      this.ve_center_knob = new Knob(this.ve_center_knob_canvas);

      this.ve_width_knob_canvas = $(".ve_width_knob")[0];
      this.ve_width_knob = new Knob(this.ve_width_knob_canvas);


      this.ve_random_button = $(".ve_random_button")[0];

      this.ve_mirror_button = $(".ve_mirror_button")[0];

      this.ve_mirror_button = $(".ve_random_button")[0];


      this.ve_apply_button = $(".ve_apply_button")[0];

      this.ve_reset_button = $(".ve_reset_button")[0];



   }
}
