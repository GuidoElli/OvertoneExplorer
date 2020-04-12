class Controller_zoom {
   constructor(controller, model){
      this.c = controller;
      this.m = model;
   }


   get center_track(){
      return Math.floor((this.m.last_visible_track + this.m.first_visible_track) / 2);
   }

   set_zoom = (track, is_zoom_in) => {

      var first = this.m.first_visible_track;
      var last = this.m.last_visible_track;
      if(!(last - first + 1 <= MIN_VISIBLE_TRACKS && is_zoom_in)){
         
         var increment = Math.ceil((last - first + 1) * ZOOM_WIDTH_RELATIVE_INCREMENT);
   
         if(is_zoom_in){
            var new_diff = (last - first) - increment;
            var increment = Math.ceil((last - first + 1) * (1 - 1 / (ZOOM_WIDTH_RELATIVE_INCREMENT + 1)));
         }else{
            var new_diff = (last - first) + increment;
            var increment = Math.ceil((last - first + 1) * ZOOM_WIDTH_RELATIVE_INCREMENT);
         }
   
         if(new_diff >= TOTAL_TRACKS){
            increment = TOTAL_TRACKS - (last - first + 1);
         }else if(new_diff + 1 < MIN_VISIBLE_TRACKS){
            increment = (last - first + 1) - MIN_VISIBLE_TRACKS;
         }
   
         var temp_track = first - 1;
         var ngroups = increment + 1;
         var q = Math.floor((last - first + 1) / ngroups);
         var r = (last - first + 1) % ngroups;
         var cont = -1;
         while(temp_track <= track){
            temp_track += q;
            temp_track += (r > cont) ? 1 : 0;
            cont++;
         }
         
   
         if(is_zoom_in){
            var new_first = first + cont;
            var new_last = last - (increment - cont);
         }else{
            var new_first = first - cont;
            var new_last = last + (increment - cont);
         }
   
         var diff = new_last - new_first;
   
         if(new_first < 0){
            new_first = 0;
            new_last = diff;
         }
         if(new_last >= TOTAL_TRACKS){
            new_last = TOTAL_TRACKS - 1;
            new_first = new_last - diff;
         }
         this.m.first_visible_track = new_first;
         this.m.last_visible_track = new_last;
         
         this.c.update_view();
      }
      
   }


   set_center = (center_track) => {
      var diff = this.m.last_visible_track - this.m.first_visible_track;
      var first = center_track - Math.floor(diff/2);
      var last = center_track + Math.ceil(diff/2);


      if(first < 0){
         first = 0;
         last = diff;
      }else if(last >= TOTAL_TRACKS){
         last = TOTAL_TRACKS - 1;
         first = last - diff;
      }

      this.m.first_visible_track = first;
      this.m.last_visible_track = last;
      
      this.c.update_view();
   }




   on_zoom_slider_set = (center_track) => {
      this.set_center(center_track);
   }

   on_zoom_slider_wheel = (is_wheel_up) => {

      var first = this.m.first_visible_track;
      var last = this.m.last_visible_track;
      var increment = Math.ceil((last - first + 1) * ZOOM_CENTER_RELATIVE_INCREMENT);
      var center_track = Math.floor((last + first) / 2);

      if(is_wheel_up){
         this.set_center(center_track - increment);
      }else{
         this.set_center(center_track + increment);
      }
   }


   on_visual_wheel = (track, is_wheel_up) => {
      this.set_zoom(track, is_wheel_up);
   }


   on_zoom_plus_button_click = () => {
      this.set_zoom(this.center_track, true);
   }
   on_zoom_minus_button_click = () => {
      this.set_zoom(this.center_track, false);
   }
   on_zoom_left_button_click = () => {
      this.on_zoom_slider_wheel(true);
   }
   on_zoom_right_button_click = () => {
      this.on_zoom_slider_wheel(false);
   }



}
