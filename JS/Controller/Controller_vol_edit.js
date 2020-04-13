class Controller_vol_edit{

   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }

   apply_ve(){
      for (let i = 0; i < TOTAL_TRACKS; i++){
         this.m.vols_base[i] += this.m.vols_ve_amounts[i];
         if(this.m.vols_base[i] < MIN_DB){
            this.m.vols_base[i] = MIN_DB;
         }else if(this.m.vols_base[i] > 0){
            this.m.vols_base[i] = 0;
         }
      }
   }
   

   on_ve_shape_change = (editor_shape) => {
      this.m.ve_shape = editor_shape;
      this.c.update_view();
   }

   on_ve_amount_change = (amount) => {
      this.m.ve_amount = amount;
      this.c.update_view();
   }
   on_ve_center_change = (center) => {
      this.m.ve_center = center;
      this.c.update_view();
   }
   on_ve_width_change = (width) => {
      this.m.ve_width = width;
      this.c.update_view();
   }

   on_ve_random_click = () => {
      this.m.ve_random = !this.m.ve_random;
      this.c.update_view();
   }
   on_ve_mirror_click = () => {
      if(this.m.ve_random){
         this.m.ve_mirror = !this.m.ve_mirror;
         this.c.update_view();
      }
   }
   on_ve_randomize_click = () => {
      this.m.randomize_ve_values();
      this.c.update_view();
   }

   on_ve_apply_click = () => {
      this.apply_ve();
      this.on_ve_reset_click();
   }
   on_ve_reset_click = () => {
      this.c.vol_edit.on_ve_amount_change(0);
      this.c.update_view();
   }


}
