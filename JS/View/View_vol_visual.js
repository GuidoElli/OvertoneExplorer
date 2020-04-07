class View_vol_visual {
   constructor(view){
      this.v = view;
      this.first_visible_item = null;
      this.last_visible_item = null;

      this.vv_box = $(".visual_vol_box")[0];

      //Cloning
      var first_vv_item = $(".visual_vol_item_section")[0];
		var content = first_vv_item.innerHTML;
		this.vv_box.innerHTML = "";
      for(let i = 0; i < TOTAL_TRACKS; i++){
         var clone = first_vv_item.cloneNode();
         clone.innerHTML = content;
         this.vv_box.append(clone);
      }


      this.sections = $(".visual_vol_item_section");
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.sections[i].addEventListener("mousewheel", (e) => {
            this.v.on_visual_wheel(i, e.wheelDelta > 0);
         })
      }

      this.vv_main_bars = $(".vv_main_bar");
      
   }

   ////////////////////
   update_main_bars = (values) => {
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.vv_main_bars[i].style.top = 60 + "%";
         this.vv_main_bars[i].style.height = 70 + "%";
      }
   }

   update_zoom(first, last){
      this.first_visible_item = first;
      this.last_visible_item = last;
      for(let i = 0; i < TOTAL_TRACKS; i++){
         if(i < first || i > last){
            this.sections[i].classList.toggle("hidden", true);
         }else{
            this.sections[i].classList.toggle("hidden", false);
            this.sections[i].style.width = 100 / (last - first + 1) + "%";
         }
      }
   }
}
