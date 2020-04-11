class Controller_vol_edit{

   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }

   on_ve_scale_change = (scale_type) => {
      switch(this.m.ve_scale){
         case SCALE_TYPE.LIN:
            this.m.ve_amount = this.m.ve_amount / MAX_VE_AMOUNT_LIN;
            break;
         case SCALE_TYPE.LOG:
            this.m.ve_amount = this.m.ve_amount / MAX_VE_AMOUNT_LOG;
            break;
      }
      switch(scale_type){
         case SCALE_TYPE.LIN:
            this.m.ve_amount = this.m.ve_amount * MAX_VE_AMOUNT_LIN;
            break;
         case SCALE_TYPE.LOG:
            this.m.ve_amount = this.m.ve_amount * MAX_VE_AMOUNT_LOG;
            break;
      }


      this.m.ve_scale = scale_type;
      this.c.update_vol_edit();
   }
   on_ve_shape_change = (editor_shape) => {
      this.m.ve_shape = editor_shape;
      this.c.update_vol_edit();
   }

   on_ve_amount_change = (amount) => {
      this.m.ve_amount = amount;
      this.c.update_vol_edit();
   }
   on_ve_center_change = (center) => {
      this.m.ve_center = center;
      this.c.update_vol_edit();
   }
   on_ve_width_change = (width) => {
      this.m.ve_width = width;
      this.c.update_vol_edit();
   }

   on_ve_random_click = () => {
      this.m.ve_random = !this.m.ve_random;
      this.c.update_vol_edit();
   }
   on_ve_mirror_click = () => {
      this.m.ve_mirror = !this.m.ve_mirror;
      this.c.update_vol_edit();
   }
   on_ve_randomize_click = () => {
      this.m.randomize_ve_values();
      this.c.update_vol_edit();
   }

   on_ve_apply_click = () => {
      console.log("applied");
      this.c.update_vol_edit();
   }
   on_ve_reset_click = () => {
      console.log("reset");
      this.c.update_vol_edit();
   }


}
