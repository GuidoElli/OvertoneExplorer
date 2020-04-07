class Controller_zoom {
   constructor(controller){
      this.c = controller;
   }

   on_zoom_center_edit = (center_track) => {
      var diff = this.c.model.last_visible_track - this.c.model.first_visible_track;
      var first = center_track - Math.floor(diff/2);
      var last = center_track + Math.ceil(diff/2);


      if(first < 0){
         first = 0;
         last = diff;
      }else if(last >= TOTAL_TRACKS){
         last = TOTAL_TRACKS - 1;
         first = last - diff;
      }

      this.c.model.first_visible_track = first;
      this.c.model.last_visible_track = last;
      
      this.c.update_zoom();
   }

   on_zoom_center_up = (track) => {

      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_center_relative_increment;
      var increment = Math.floor((last - first + 1) * relative_increment);
      var center_track = (track) ? track : Math.floor((last + first) / 2);
      this.on_zoom_center_edit(center_track + increment);
   }

   on_zoom_center_down = (track) => {
      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_center_relative_increment;
      var increment = Math.floor((last - first + 1) * relative_increment);
      var center_track = (track) ? track : Math.floor((last + first) / 2);
      this.on_zoom_center_edit(center_track - increment);
   }
   
   on_zoom_width_up = (track) => {

      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_width_relative_increment;
      var increment = Math.floor((last - first) * relative_increment);
      var fixed_track = (track) ? track : Math.floor((first + last) / 2);

      var new_diff = (last - first) + increment;

      if(new_diff >= TOTAL_TRACKS){
         increment = TOTAL_TRACKS - (last - first + 1);
      }

      var temp_track = first - 1;
      var ngroups = increment + 1;
      var q = Math.floor((last - first + 1) / ngroups);
      var r = (last - first + 1) % ngroups;
      var cont = -1;
      while(temp_track < fixed_track){
         temp_track += q;
         temp_track += (r > cont) ? 1 : 0;
         cont++;
      }
      
      var new_first = first - cont;
      var new_last = last + (increment - cont);
      var diff = new_last - new_first;
      if(new_first < 0){
         new_first = 0;
         new_last = diff;
      }
      if(new_last >= TOTAL_TRACKS){
         new_last = TOTAL_TRACKS - 1;
         new_first = new_last - diff;
      }
      this.c.model.first_visible_track = new_first;
      this.c.model.last_visible_track = new_last;
      
      this.c.update_zoom();
   }

   
   on_zoom_width_down = (track) => {

      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_width_relative_increment;
      var increment = Math.floor((last - first) * (1 - 1 / (relative_increment + 1)));
      var fixed_track = (track) ? track : Math.floor((first + last) / 2);

      var new_diff = (last - first) - increment;

      if(new_diff < MIN_VISIBLE_TRACKS){
         increment = (last - first + 1) - MIN_VISIBLE_TRACKS;
      }

      var temp_track = first - 1;
      var ngroups = increment + 1;
      var q = Math.floor((last - first + 1) / ngroups);
      var r = (last - first + 1) % ngroups;
      var cont = -1;
      while(temp_track < fixed_track){
         temp_track += q;
         temp_track += (r > cont) ? 1 : 0;
         cont++;
      }
      
      var new_first = first + cont;
      var new_last = last - (increment - cont);
      var diff = new_last - new_first;
      if(new_first < 0){
         new_first = 0;
         new_last = diff;
      }
      if(new_last >= TOTAL_TRACKS){
         new_last = TOTAL_TRACKS - 1;
         new_first = new_last - diff;
      }
      this.c.model.first_visible_track = new_first;
      this.c.model.last_visible_track = new_last;
      
      this.c.update_zoom();
   }


}
