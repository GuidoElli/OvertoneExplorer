class View {
   constructor(){
      this.layout = new Layout();

      this.sound_tab_button = $(".sound_tab_button")[0];
      this.vol_tab_button = $(".vol_tab_button")[0];
      this.freq_tab_button = $(".freq_tab_button")[0];
      this.dadj_tab_button = $(".dadj_tab_button")[0];

      
      
		var first_playback_row_item_section = $(".row_playback_box .row_item_section")[0];
		$(".row_playback_box").empty();
		for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone = first_playback_row_item_section.cloneNode();
			clone.append(first_playback_row_item_section.firstElementChild.cloneNode());
			clone.firstElementChild.innerHTML = i;
			$(".row_playback_box").append(clone);
      }
      var row = $(".row_playback_box")[0];
      var sections = $(".row_playback_box .row_item_section");
      var buttons = $(".row_playback_item");
      this.playback_row = new Row(row, sections, buttons);


      var first_vol_edit_row_item_section = $(".row_vol_edit_box .row_item_section")[0];
		$(".row_vol_edit_box").empty();
		for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone = first_vol_edit_row_item_section.cloneNode();
			clone.append(first_vol_edit_row_item_section.firstElementChild.cloneNode());
			clone.firstElementChild.innerHTML = i;
			$(".row_vol_edit_box").append(clone);
      }
      var row = $(".row_vol_edit_box")[0];
      var sections = $(".row_vol_edit_box .row_item_section");
      var buttons = $(".row_vol_edit_item");
      this.vol_edit_row = new Row(row, sections, buttons);


      var first_freq_edit_row_item_section = $(".row_freq_edit_box .row_item_section")[0];
		$(".row_freq_edit_box").empty();
		for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone = first_freq_edit_row_item_section.cloneNode();
			clone.append(first_freq_edit_row_item_section.firstElementChild.cloneNode());
			clone.firstElementChild.innerHTML = i;
			$(".row_freq_edit_box").append(clone);
      }
      var row = $(".row_freq_edit_box")[0];
      var sections = $(".row_freq_edit_box .row_item_section");
      var buttons = $(".row_freq_edit_item");
      this.freq_edit_row = new Row(row, sections, buttons);


      var first_dadj_edit_row_item_section = $(".row_dadj_edit_box .row_item_section")[0];
		$(".row_dadj_edit_box").empty();
		for(let i = 0; i < TOTAL_TRACKS; i++){
			var clone = first_dadj_edit_row_item_section.cloneNode();
			clone.append(first_dadj_edit_row_item_section.firstElementChild.cloneNode());
			clone.firstElementChild.innerHTML = i;
			$(".row_dadj_edit_box").append(clone);
      }
      var row = $(".row_dadj_edit_box")[0];
      var sections = $(".row_dadj_edit_box .row_item_section");
      var buttons = $(".row_dadj_edit_item");
      this.dadj_edit_row = new Row(row, sections, buttons);


   }






   //bindings

   bind_sound_tab_button_click = (f) => {
      this.sound_tab_button.addEventListener("click", () => {
         f();
      })
   }
   bind_vol_tab_button_click = (f) => {
      this.vol_tab_button.addEventListener("click", () => {
         f();
      })
   }
   bind_freq_tab_button_click = (f) => {
      this.freq_tab_button.addEventListener("click", () => {
         f();
      })
   }
   bind_dadj_tab_button_click = (f) => {
      this.dadj_tab_button.addEventListener("click", () => {
         f();
      })
   }

   bind_playback_change_enter(f){
      this.playback_row.on_change_enter = f;
   }
   bind_playback_change(f){
      this.playback_row.on_change = f;
   }
   bind_playback_click(f){
      this.playback_row.on_click = f;
   }





   //update

   update_layout(layout){
      this.layout.set_layout(layout);
   }
   update_custom_selection(value){
      this.layout.set_custom_selection(value);
   }

   update_playback_tracks(values){
      this.playback_row.update_values(values);
   }
   update_vol_edit_tracks(values){
      this.vol_edit_row.update_values(values);
   }
   update_freq_edit_tracks(values){
      this.freq_edit_row.update_values(values);
   }
   update_dadj_edit_tracks(values){
      this.dadj_edit_row.update_values(values);
   }


   update_zoom(first_track, last_track){
      this.playback_row.update_visible_items(first_track, last_track);
      this.vol_edit_row.update_visible_items(first_track, last_track);
      this.freq_edit_row.update_visible_items(first_track, last_track);
      this.dadj_edit_row.update_visible_items(first_track, last_track);
   }
}
