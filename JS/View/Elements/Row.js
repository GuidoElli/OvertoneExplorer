class Row {
   constructor(row, sections, buttons){
      
      this.on_change_enter = null;
      this.on_change = null;
      this.on_click = null;

      this.row = row;
      this.sections = sections;
      this.buttons = buttons;

      this.first_visible_button = null;
      this.last_visible_button = null;

      this.changing = false;
      this.old_mouse_x = null;
      this.new_mouse_x = null;
      this.moved = false;



      this.row.addEventListener("mousedown", (e) => {
         this.changing = true;
         this.new_mouse_x = e.pageX;
         this.old_mouse_x = e.pageX;
         this.on_change_enter();
      })

      for (let i = 0; i < TOTAL_TRACKS; i++) {
         this.buttons[i].addEventListener("mousedown", () => {
            this.first_changing = i;
            this.last_changing = i;
         })
      }

      document.addEventListener("mousemove", (e) => {
         if(this.changing){
            this.new_mouse_x = (e.pageX) ? e.pageX : this.new_mouse_x;
            var new_mouse_x = this.new_mouse_x;
            var old_mouse_x = this.old_mouse_x;
            this.first_changing = null;
            this.last_changing = null;
               if(new_mouse_x > old_mouse_x){
                  for (let i = 0; i < TOTAL_TRACKS; i++) {
                     if(i >= this.first_visible_button && i <= this.last_visible_button){
                        var left = this.buttons[i].getBoundingClientRect().left;
                        var right = this.buttons[i].getBoundingClientRect().right;
                        if (old_mouse_x < right && new_mouse_x > left && this.first_changing === null) {
                           this.first_changing = i;
                        }
                        if(new_mouse_x > left){
                           this.last_changing = i;
                        }
                     }
                  }
               }else{
                  for (let i = TOTAL_TRACKS-1; i >= 0; i--) {
                     if(i >= this.first_visible_button && i <= this.last_visible_button){
                        var left = this.buttons[i].getBoundingClientRect().left;
                        var right = this.buttons[i].getBoundingClientRect().right;
                        if (old_mouse_x > left && new_mouse_x < right && this.last_changing === null) {
                           this.last_changing = i;
                        }
                        if(new_mouse_x < right){
                           this.first_changing = i;
                        }
                     }
                  }
               }
            this.on_change(this.first_changing, this.last_changing);
         }
      });

      document.addEventListener("mouseup", () => {
         if(this.changing){
            this.changing = false;
            if(this.first_changing !== null &&
            this.last_changing !== null &&
            this.first_changing == this.last_changing){
               this.on_click(this.first_changing);
            }
            this.first_changing = null;
            this.last_changing = null;
         }
      })

   }


   update_values(values){
      for(let i = 0; i < TOTAL_TRACKS; i++){
         this.buttons[i].classList.toggle("active", values[i]);
      }
   }
   update_visible_items(first, last){
      this.first_visible_button = first;
      this.last_visible_button = last;
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
