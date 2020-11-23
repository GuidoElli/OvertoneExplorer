class View_vol_edit {
	constructor(view){
		this.v = view;



		this.ve_shape_choose_items = $(".ve_shape_choose_item");
		this.ve_shape_choose_items[0].addEventListener("click", () => {
			this.v.on_ve_shape_change(EDITOR_SHAPE.FLAT);
		})
		this.ve_shape_choose_items[1].addEventListener("click", () => {
			this.v.on_ve_shape_change(EDITOR_SHAPE.TRIANGLE);
		})
		this.ve_shape_choose_items[2].addEventListener("click", () => {
			this.v.on_ve_shape_change(EDITOR_SHAPE.CURVE);
		})

		this.ve_amount_knob_canvas = $(".ve_amount_knob")[0];
		this.ve_amount_knob = new Knob(this.ve_amount_knob_canvas, -MAX_VE_AMOUNT, MAX_VE_AMOUNT, 0, 0);
		this.ve_amount_knob.interval_color = "#0047be";
		this.ve_amount_knob.on_change = (value) => {
			this.v.on_ve_amount_change(value);
		}
		this.ve_amount_value = $(".ve_amount_knob_param_value")[0];
		this.ve_amount_label = $(".ve_amount_knob_param_label")[0];

		this.ve_center_knob_canvas = $(".ve_center_knob")[0];
		this.ve_center_knob = new Knob(this.ve_center_knob_canvas, 0, 1, null, null);
		this.ve_center_knob.interval_color = "#0047be";
		this.ve_center_knob.on_change = (value) => {
			this.v.on_ve_center_change(value);
		}
		this.ve_center_value = $(".ve_center_knob_param_value")[0];
		this.ve_center_label = $(".ve_center_knob_param_label")[0];

		this.ve_width_knob_canvas = $(".ve_width_knob")[0];
		this.ve_width_knob = new Knob(this.ve_width_knob_canvas, 0, 1, null, null);
		this.ve_width_knob.interval_color = "#0047be";
		this.ve_width_knob.on_change = (value) => {
			this.v.on_ve_width_change(value);
		}
		this.ve_width_value = $(".ve_width_knob_param_value")[0];
		this.ve_width_label = $(".ve_width_knob_param_label")[0];

		this.ve_random_button = $(".ve_random_button")[0];
		this.ve_random_button.addEventListener("click", () => {
			this.v.on_ve_random_click();
		})

		this.ve_mirror_button = $(".ve_mirror_button")[0];
		this.ve_mirror_button.addEventListener("click", () => {
			this.v.on_ve_mirror_click();
		})

		this.ve_randomize_button = $(".ve_randomize_button")[0];
		this.ve_randomize_button.addEventListener("click", () => {
			this.v.on_ve_randomize_click();
		})


		this.ve_apply_button = $(".ve_apply_button")[0];
		this.ve_apply_button.addEventListener("click", () => {
			this.v.on_ve_apply_click();
		})

		this.ve_reset_button = $(".ve_reset_button")[0];
		this.ve_reset_button.addEventListener("click", () => {
			this.v.on_ve_reset_click();
		})



		this.ve_visual_items_section = $(".ve_visual_items_section")[0];

		//Cloning
		var first_ve_visual_item = $(".ve_visual_item_section")[0];
		var content = first_ve_visual_item.innerHTML;
		this.ve_visual_items_section.innerHTML = "";
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			var clone = first_ve_visual_item.cloneNode();
			clone.innerHTML = content;
			this.ve_visual_items_section.append(clone);
			clone.style.width = 100 / TOTAL_TRACKS + "%";
		}

		this.ve_visual_shape_amounts = $(".ve_visual_shape_amount");
		this.ve_visual_amounts = $(".ve_visual_amount");


	}

	update_shape = (editor_shape) => {
		this.ve_shape_choose_items[0].classList.toggle("active", false);
		this.ve_shape_choose_items[1].classList.toggle("active", false);
		this.ve_shape_choose_items[2].classList.toggle("active", false);

		this.ve_center_value.classList.toggle("unclickable", false);
		this.ve_center_label.classList.toggle("unclickable", false);
		this.ve_center_knob.clickable = true;

		this.ve_width_value.classList.toggle("unclickable", false);
		this.ve_width_label.classList.toggle("unclickable", false);
		this.ve_width_knob.clickable = true;

		switch(editor_shape){
			case EDITOR_SHAPE.FLAT:
				this.ve_shape_choose_items[0].classList.toggle("active", true);

				this.ve_center_value.classList.toggle("unclickable", true);
				this.ve_center_label.classList.toggle("unclickable", true);
				this.ve_center_knob.clickable = false;

				this.ve_width_value.classList.toggle("unclickable", true);
				this.ve_width_label.classList.toggle("unclickable", true);
				this.ve_width_knob.clickable = false;
				
				break;

			case EDITOR_SHAPE.TRIANGLE:
				this.ve_shape_choose_items[1].classList.toggle("active", true);
				break;

			case EDITOR_SHAPE.CURVE:
				this.ve_shape_choose_items[2].classList.toggle("active", true);
				break;
		}
	}

	update_amount = (value) => {
		this.ve_amount_knob.value = value;
		this.ve_amount_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(2);
		string_value += " dB";

		this.ve_amount_value.innerHTML = string_value;
	}
	update_center = (value) => {
		this.ve_center_knob.value = value;
		this.ve_center_knob.update();
		this.ve_center_value.innerHTML = "Track " + Math.round(value * (TOTAL_TRACKS));
	}
	update_width = (value) => {
		this.ve_width_knob.value = value;
		this.ve_width_knob.update();
		this.ve_width_value.innerHTML = Math.round(value * 100) + " %";
	}

	update_random = (random, mirror) => {
		this.ve_random_button.classList.toggle("active", random);
		this.ve_mirror_button.classList.toggle("active", (random && mirror));
		this.ve_mirror_button.classList.toggle("unclickable", !random);
		this.ve_randomize_button.classList.toggle("unclickable", !random);
	}



	update_ve_visual= (random, mirror, shape_amounts, amounts, vol_edit_tracks) => {

		for (let i = 0; i < TOTAL_TRACKS; i++){

			this.ve_visual_shape_amounts[i].classList.toggle("active", vol_edit_tracks[i]);

			var shape_h;
			var final_h;

			shape_h = Math.abs(shape_amounts[i]) / 2 / MAX_VE_AMOUNT;
			if(vol_edit_tracks[i]){
				final_h = Math.abs(amounts[i]) / 2 / MAX_VE_AMOUNT;
			}else{
				final_h = 0;
			}

			this.ve_visual_shape_amounts[i].style.top = "";
			this.ve_visual_shape_amounts[i].style.bottom = "";
			this.ve_visual_amounts[i].style.top = "";
			this.ve_visual_amounts[i].style.bottom = "";
			if(random && mirror){
				shape_h *= 2;
				this.ve_visual_shape_amounts[i].style.bottom = (1 - shape_h) / 2 * 100 + "%";
				if(amounts[i] >= 0){
					this.ve_visual_amounts[i].style.bottom = "50%";
				}else{
					this.ve_visual_amounts[i].style.top = "50%";
				}
			}else{
				if(shape_amounts[i] >= 0){
					this.ve_visual_shape_amounts[i].style.bottom = "50%";
					this.ve_visual_amounts[i].style.bottom = "50%";
				}else{
					this.ve_visual_shape_amounts[i].style.top = "50%";
					this.ve_visual_amounts[i].style.top = "50%";
				}
			}

			this.ve_visual_shape_amounts[i].style.height = shape_h * 100 + "%";
			this.ve_visual_amounts[i].style.height = final_h * 100 + "%";

		}
	}




	update_canvases = () => {
		this.ve_amount_knob.update();
		this.ve_center_knob.update();
		this.ve_width_knob.update();
	}
}
