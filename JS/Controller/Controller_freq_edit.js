class Controller_freq_edit{

	constructor(controller, model){
		this.c = controller;
		this.m = model;


		this.editing_single_track = false;
		this.editing_track = 0;
		this.old_freq = null;
		this.new_freq = null;
		this.old_mouse_y = null;
		this.new_mouse_y = null;

		document.addEventListener("mousemove", (e) => {
			if(this.editing_single_track){
				this.new_mouse_y = (e.pageY) ? e.pageY : this.new_mouse_y;
				let pixel_diff = this.old_mouse_y - this.new_mouse_y;
				let value_diff;
				if(CTRL_DOWN){
					value_diff = pixel_diff * (MAX_DB - MIN_DB) / KNOB_MAX_PIXEL_FINE * 10;
				}else{
					value_diff = pixel_diff * (MAX_DB - MIN_DB) / KNOB_MAX_PIXEL * 10;
				}
				this.new_freq = this.old_freq + value_diff;
				if(this.new_freq < -MAX_MIN_CENTS){
					this.new_freq = -MAX_MIN_CENTS;
				}else if(this.new_freq > MAX_MIN_CENTS){
					this.new_freq = MAX_MIN_CENTS;
				}
				this.m.set_freq(this.editing_track, this.new_freq);
				this.c.update_audio();
				this.c.update_view();
			}
		})

		document.addEventListener("mouseup", (e) => {
			this.editing_single_track = false;
		})

		document.addEventListener("keydown", (e) => {
			if(e.key === "Control"){
				if(this.editing_single_track){
					this.old_freq = this.new_freq;
					this.old_mouse_y = this.new_mouse_y;
				}
			}
		}, true)
		document.addEventListener("keyup", (e) => {
			if(e.key === "Control"){
				if(this.editing_single_track){
					this.old_freq = this.new_freq;
					this.old_mouse_y = this.new_mouse_y;
				}
			}
		}, true)
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

	on_freq_visual_mousedown = (track, mouse_y) => {
		this.editing_single_track = true;
		this.editing_track = track;
		this.old_mouse_y = mouse_y;
		this.old_freq = this.m.freqs_base[track];
	}
	on_freq_visual_doubleclick = (track) => {
		this.m.set_freq(track, 0);
	}

	on_fe_shape_change = (editor_shape) => {
		this.m.fe_shape = editor_shape;
		this.c.update_audio();
		this.c.update_view();
	}

	on_fe_amount_change = (amount) => {
		this.m.fe_amount = amount;
		this.c.update_audio();
		this.c.update_view();
	}
	on_fe_center_change = (center) => {
		this.m.fe_center = center;
		this.c.update_audio();
		this.c.update_view();
	}
	on_fe_width_change = (width) => {
		this.m.fe_width = width;
		this.c.update_audio();
		this.c.update_view();
	}

	on_fe_random_click = () => {
		this.m.fe_random = !this.m.fe_random;
		this.c.update_audio();
		this.c.update_view();
	}
	on_fe_mirror_click = () => {
		if(this.m.fe_random){
			this.m.fe_mirror = !this.m.fe_mirror;
			this.c.update_audio();
			this.c.update_view();
		}
	}
	on_fe_randomize_click = () => {
		this.m.randomize_fe_values();
		this.c.update_audio();
		this.c.update_view();
	}

	on_fe_apply_click = () => {
		this.apply_fe();
		this.on_fe_reset_click();
	}
	on_fe_reset_click = () => {
		this.c.freq_edit.on_fe_amount_change(0);
		this.c.update_audio();
		this.c.update_view();
	}


}
