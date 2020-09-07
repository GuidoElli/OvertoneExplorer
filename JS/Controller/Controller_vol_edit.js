class Controller_vol_edit{

	constructor(controller, model){
		this.c = controller;
		this.m = model;

		this.editing_single_track = false;
		this.editing_track = 0;
		this.old_vol = null;
		this.new_vol = null;
		this.old_mouse_y = null;
		this.new_mouse_y = null;

		document.addEventListener("mousemove", (e) => {
			if(this.editing_single_track){
				this.new_mouse_y = (e.pageY) ? e.pageY : this.new_mouse_y;
				let pixel_diff = this.old_mouse_y - this.new_mouse_y;
				let value_diff;
				if(CTRL_DOWN){
					value_diff = pixel_diff * (MAX_DB - MIN_DB) / KNOB_MAX_PIXEL_FINE;
				}else{
					value_diff = pixel_diff * (MAX_DB - MIN_DB) / KNOB_MAX_PIXEL;
				}
				this.new_vol = this.old_vol + value_diff;
				if(this.new_vol < MIN_DB){
					this.new_vol = MIN_DB;
				}else if(this.new_vol > MAX_DB){
					this.new_vol = MAX_DB;
				}
				this.m.set_vol(this.editing_track, this.new_vol);
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
					this.old_vol = this.new_vol;
					this.old_mouse_y = this.new_mouse_y;
				}
			}
		}, true)
		document.addEventListener("keyup", (e) => {
			if(e.key === "Control"){
				if(this.editing_single_track){
					this.old_vol = this.new_vol;
					this.old_mouse_y = this.new_mouse_y;
				}
			}
		}, true)
	}

	apply_ve(){
		for (let i = 0; i < TOTAL_TRACKS; i++){
			this.m.vols_base[i] += this.m.vols_ve_amounts[i];
			if(this.m.vols_base[i] < MIN_DB){
				this.m.vols_base[i] = MIN_DB;
			}else if(this.m.vols_base[i] > MAX_DB){
				this.m.vols_base[i] = MAX_DB;
			}
		}
	}

	on_vol_visual_mousedown = (track, mouse_y) => {
		this.editing_single_track = true;
		this.editing_track = track;
		this.old_mouse_y = mouse_y;
		this.old_vol = this.m.vols_base[track];
	}

	on_ve_shape_change = (editor_shape) => {
		this.m.ve_shape = editor_shape;
		this.c.update_audio();
		this.c.update_view();
	}

	on_ve_amount_change = (amount) => {
		this.m.ve_amount = amount;
		this.c.update_audio();
		this.c.update_view();
	}
	on_ve_center_change = (center) => {
		this.m.ve_center = center;
		this.c.update_audio();
		this.c.update_view();
	}
	on_ve_width_change = (width) => {
		this.m.ve_width = width;
		this.c.update_audio();
		this.c.update_view();
	}

	on_ve_random_click = () => {
		this.m.ve_random = !this.m.ve_random;
		this.c.update_audio();
		this.c.update_view();
	}
	on_ve_mirror_click = () => {
		if(this.m.ve_random){
			this.m.ve_mirror = !this.m.ve_mirror;
			this.c.update_audio();
			this.c.update_view();
		}
	}
	on_ve_randomize_click = () => {
		this.m.randomize_ve_values();
		this.c.update_audio();
		this.c.update_view();
	}

	on_ve_apply_click = () => {
		this.apply_ve();
		this.on_ve_reset_click();
	}
	on_ve_reset_click = () => {
		this.c.vol_edit.on_ve_amount_change(0);
		this.c.update_audio();
		this.c.update_view();
	}


}
