class Controller_freq_edit{

	constructor(controller, model){
		this.c = controller;
		this.m = model;
	}

	apply_fe(){
		for (let i = 0; i < TOTAL_TRACKS; i++){
			this.m.freqs_base[i] += this.m.freqs_fe_amounts[i];
			if(this.m.freqs_base[i] < -MAX_MIN_CENTS){
				this.m.freqs_base[i] = -MAX_MIN_CENTS;
			}else if(this.m.freqs_base[i] > MAX_MIN_CENTS){
				this.m.freqs_base[i] = MAX_MIN_CENTS;
			}
		}
	}


	on_fe_shape_change = (editor_shape) => {
		this.m.fe_shape = editor_shape;
		this.c.update_view();
	}

	on_fe_amount_change = (amount) => {
		this.m.fe_amount = amount;
		this.c.update_view();
	}
	on_fe_center_change = (center) => {
		this.m.fe_center = center;
		this.c.update_view();
	}
	on_fe_width_change = (width) => {
		this.m.fe_width = width;
		this.c.update_view();
	}

	on_fe_random_click = () => {
		this.m.fe_random = !this.m.fe_random;
		this.c.update_view();
	}
	on_fe_mirror_click = () => {
		if(this.m.fe_random){
			this.m.fe_mirror = !this.m.fe_mirror;
			this.c.update_view();
		}
	}
	on_fe_randomize_click = () => {
		this.m.randomize_fe_values();
		this.c.update_view();
	}

	on_fe_apply_click = () => {
		this.apply_fe();
		this.on_fe_reset_click();
	}
	on_fe_reset_click = () => {
		this.c.freq_edit.on_fe_amount_change(0);
		this.c.update_view();
	}


}
