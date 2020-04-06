class Zoom_manager {
   constructor(view){
      this.v = view;

      this.zoom_playback_prevs_box = $(".zoom_playback_prevs_box")[0];
      this.zoom_vol_edit_prevs_box = $(".zoom_vol_edit_prevs_box")[0];
      this.zoom_freq_edit_prevs_box = $(".zoom_freq_edit_prevs_box")[0];
      this.zoom_dadj_edit_prevs_box = $(".zoom_dadj_edit_prevs_box")[0];

		var first_zoom_playback_prev = $(".zoom_playback_prev")[0];
		this.zoom_playback_prevs_box.innerHTML = "";
      for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone_playback = first_zoom_playback_prev.cloneNode();
         this.zoom_playback_prevs_box.append(clone_playback);
         clone_playback.style.width = 100/TOTAL_TRACKS + "%";
      }
      
		var first_zoom_vol_edit_prev = $(".zoom_vol_edit_prev")[0];
		this.zoom_vol_edit_prevs_box.innerHTML = "";
      for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone_vol_edit = first_zoom_vol_edit_prev.cloneNode();
         this.zoom_vol_edit_prevs_box.append(clone_vol_edit);
         clone_vol_edit.style.width = 100/TOTAL_TRACKS + "%";
         
      }
      
		var first_zoom_freq_edit_prev = $(".zoom_freq_edit_prev")[0];
		this.zoom_freq_edit_prevs_box.innerHTML = "";
      for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone_freq_edit = first_zoom_freq_edit_prev.cloneNode();
         this.zoom_freq_edit_prevs_box.append(clone_freq_edit);
         clone_freq_edit.style.width = 100/TOTAL_TRACKS + "%";
      }
      
      var first_zoom_dadj_edit_prev = $(".zoom_dadj_edit_prev")[0];
		this.zoom_dadj_edit_prevs_box.innerHTML = "";
      for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone_dadj_edit = first_zoom_dadj_edit_prev.cloneNode();
         this.zoom_dadj_edit_prevs_box.append(clone_dadj_edit);
         clone_dadj_edit.style.width = 100/TOTAL_TRACKS + "%";
         
      }

      this.zoom_playback_prevs = $(".zoom_playback_prev");
      this.zoom_vol_edit_prevs = $(".zoom_vol_edit_prev");
      this.zoom_freq_edit_prevs = $(".zoom_freq_edit_prev");
      this.zoom_dadj_edit_prevs = $(".zoom_dadj_edit_prev");



      this.zoom_slider = $(".zoom_slider")[0];
      
   }

   update_layout = (layout) => {

      this.zoom_playback_prevs_box.classList.toggle("hidden", true);
      this.zoom_vol_edit_prevs_box.classList.toggle("hidden", true);
      this.zoom_freq_edit_prevs_box.classList.toggle("hidden", true);
      this.zoom_dadj_edit_prevs_box.classList.toggle("hidden", true);

      switch(layout){
         case LAYOUT.SOUND:
            this.zoom_playback_prevs_box.classList.toggle("hidden", false);
            this.zoom_playback_prevs_box.style.height = "100%";
            break;
         case LAYOUT.VOL:
            this.zoom_playback_prevs_box.classList.toggle("hidden", false);
            this.zoom_vol_edit_prevs_box.classList.toggle("hidden", false);
            this.zoom_playback_prevs_box.style.height = "50%";
            this.zoom_vol_edit_prevs_box.style.height = "50%";
            break;
         case LAYOUT.FREQ:
            this.zoom_playback_prevs_box.classList.toggle("hidden", false);
            this.zoom_freq_edit_prevs_box.classList.toggle("hidden", false);
            this.zoom_playback_prevs_box.style.height = "50%";
            this.zoom_freq_edit_prevs_box.style.height = "50%";
            break;
         case LAYOUT.DADJ:
            this.zoom_playback_prevs_box.classList.toggle("hidden", false);
            this.zoom_dadj_edit_prevs_box.classList.toggle("hidden", false);
            this.zoom_playback_prevs_box.style.height = "50%";
            this.zoom_dadj_edit_prevs_box.style.height = "50%";
            break;
      }

   }


   update_playback_tracks = (values) => {
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.zoom_playback_prevs[i].classList.toggle("active", values[i]);
      }
   }
   update_vol_edit_tracks = (values) => {
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.zoom_vol_edit_prevs[i].classList.toggle("active", values[i]);
      }
   }
   update_freq_edit_tracks = (values) => {
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.zoom_freq_edit_prevs[i].classList.toggle("active", values[i]);
      }
   }
   update_dadj_edit_tracks = (values) => {
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.zoom_dadj_edit_prevs[i].classList.toggle("active", values[i]);
      }
   }


   update_zoom(first, last){

      var width = 100 * (last-first+1) / TOTAL_TRACKS + "%";
      var left = 100 * (first) / TOTAL_TRACKS + "%";

      this.zoom_slider.style.width = width;
      this.zoom_slider.style.left = left;
      
   }

}
