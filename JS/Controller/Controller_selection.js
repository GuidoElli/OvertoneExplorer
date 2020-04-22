class Controller_selection {
	constructor(controller, model) {
		this.c = controller;
		this.m = model;
	}

	on_custom_selection_button_click = () => {
		if(this.m.custom_selection){
			this.m.selected_group = null;
		}
		this.m.custom_selection = !this.m.custom_selection;
		this.c.update_view();
	}

	on_selection_mode_change = (mode) => {
		this.m.selection_mode = mode;
		this.c.update_view();
	}

	on_selection_group_click = (group) => {
		this.m.selected_group = (group === this.m.selected_group) ? null : group;
		this.c.update_view();
	}

}
