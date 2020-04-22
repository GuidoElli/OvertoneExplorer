class View_selection {
   constructor(view){

      this.v = view;


      //selection mode
      this.sel_mode_add_button = $(".sel_mode_add_button")[0];
      this.sel_mode_remove_button = $(".sel_mode_remove_button")[0];
      this.sel_mode_toggle_button = $(".sel_mode_toggle_button")[0];

      this.sel_mode_add_button.addEventListener("click", () => {
         this.v.on_selection_mode_change(SELECTION_MODE.ADD);
      })
      this.sel_mode_remove_button.addEventListener("click", () => {
         this.v.on_selection_mode_change(SELECTION_MODE.REMOVE);
      })
      this.sel_mode_toggle_button.addEventListener("click", () => {
         this.v.on_selection_mode_change(SELECTION_MODE.TOGGLE);
      })

      //groups
      this.sel_groups_even = $(".sel_groups_item_even")[0];
      this.sel_groups_odd = $(".sel_groups_item_odd")[0];
      this.sel_groups_octaves = $(".sel_groups_item_octaves")[0];
      this.sel_groups_fifths = $(".sel_groups_item_fifths")[0];
      this.sel_groups_random = $(".sel_groups_item_random")[0];

      this.sel_groups_even.addEventListener("click", () => {
         this.v.on_selection_group_click(GROUPS.EVEN);
      })
      this.sel_groups_odd.addEventListener("click", () => {
         this.v.on_selection_group_click(GROUPS.ODD);
      })
      this.sel_groups_octaves.addEventListener("click", () => {
         this.v.on_selection_group_click(GROUPS.OCTAVES);
      })
      this.sel_groups_fifths.addEventListener("click", () => {
         this.v.on_selection_group_click(GROUPS.FIFTHS);
      })
      this.sel_groups_random.addEventListener("click", () => {
         this.v.on_selection_group_click(GROUPS.RANDOM);
      })



   }


   update_selection_mode(mode){

      this.sel_mode_add_button.classList.toggle("active", false);
      this.sel_mode_remove_button.classList.toggle("active", false);
      this.sel_mode_toggle_button.classList.toggle("active", false);

      switch (mode) {
         case SELECTION_MODE.ADD:
            this.sel_mode_add_button.classList.toggle("active", true);
            break;
         case SELECTION_MODE.REMOVE:
            this.sel_mode_remove_button.classList.toggle("active", true);
            break;
         case SELECTION_MODE.TOGGLE:
            this.sel_mode_toggle_button.classList.toggle("active", true);
            break;

      }
   }


   update_selected_group(group){
      this.sel_groups_even.classList.toggle("active", false);
      this.sel_groups_odd.classList.toggle("active", false);
      this.sel_groups_octaves.classList.toggle("active", false);
      this.sel_groups_fifths.classList.toggle("active", false);
      this.sel_groups_random.classList.toggle("active", false);

      switch (group) {
         case GROUPS.EVEN:
            this.sel_groups_even.classList.toggle("active", true);
            break;
         case GROUPS.ODD:
            this.sel_groups_odd.classList.toggle("active", true);
            break;
         case GROUPS.OCTAVES:
            this.sel_groups_octaves.classList.toggle("active", true);
            break;
         case GROUPS.FIFTHS:
            this.sel_groups_fifths.classList.toggle("active", true);
            break;
         case GROUPS.RANDOM:
            this.sel_groups_random.classList.toggle("active", true);
            break;

      }
   }
}
