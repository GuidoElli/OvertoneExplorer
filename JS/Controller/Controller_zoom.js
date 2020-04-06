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

      this.c.model.first_visible_track = first
      this.c.model.last_visible_track = last;
      
      this.c.update_zoom();
   }

   on_zoom_center_up = () => {

      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_center_relative_increment;
      var center_track = Math.floor((last + first) / 2);
      var increment = Math.floor((last - first) * relative_increment);
      this.on_zoom_center_edit(center_track + increment);
   }

   on_zoom_center_down = () => {
      var first = this.c.model.first_visible_track;
      var last = this.c.model.last_visible_track;
      var relative_increment = this.c.model.zoom_center_relative_increment;
      var center_track = Math.floor((last + first) / 2);
      var increment = Math.floor((last - first) * relative_increment);
      this.on_zoom_center_edit(center_track - increment);
   }
   
}
