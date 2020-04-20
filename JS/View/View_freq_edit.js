class View_freq_edit {
	constructor(view){
		this.v = view;



		this.fe_shape_choose_items = $(".fe_shape_choose_item");
		this.fe_shape_choose_items[0].addEventListener("click", () => {
			this.v.on_fe_shape_change(EDITOR_SHAPE.FLAT);
		})
		this.fe_shape_choose_items[1].addEventListener("click", () => {
			this.v.on_fe_shape_change(EDITOR_SHAPE.TRIANGLE);
		})
		this.fe_shape_choose_items[2].addEventListener("click", () => {
			this.v.on_fe_shape_change(EDITOR_SHAPE.CURVE);
		})

		this.fe_amount_knob_canvas = $(".fe_amount_knob")[0];
		this.fe_amount_knob = new Knob(this.fe_amount_knob_canvas, -MAX_FE_AMOUNT, MAX_FE_AMOUNT, 0, 0);
		this.fe_amount_knob.interval_color = "rgb(11, 112, 196)";
		this.fe_amount_knob.on_change = (value) => {
			this.v.on_fe_amount_change(value);
		}
		this.fe_amount_value = $(".fe_amount_knob_param_value")[0];
		this.fe_amount_label = $(".fe_amount_knob_param_label")[0];

		this.fe_center_knob_canvas = $(".fe_center_knob")[0];
		this.fe_center_knob = new Knob(this.fe_center_knob_canvas, 0, 1, null, null);
		this.fe_center_knob.interval_color = "rgb(11, 112, 196)";
		this.fe_center_knob.on_change = (value) => {
			this.v.on_fe_center_change(value);
		}
		this.fe_center_value = $(".fe_center_knob_param_value")[0];
		this.fe_center_label = $(".fe_center_knob_param_label")[0];

		this.fe_width_knob_canvas = $(".fe_width_knob")[0];
		this.fe_width_knob = new Knob(this.fe_width_knob_canvas, 0, 1, null, null);
		this.fe_width_knob.interval_color = "rgb(11, 112, 196)";
		this.fe_width_knob.on_change = (value) => {
			this.v.on_fe_width_change(value);
		}
		this.fe_width_value = $(".fe_width_knob_param_value")[0];
		this.fe_width_label = $(".fe_width_knob_param_label")[0];

		this.fe_random_button = $(".fe_random_button")[0];
		this.fe_random_button.addEventListener("click", () => {
			this.v.on_fe_random_click();
		})

		this.fe_mirror_button = $(".fe_mirror_button")[0];
		this.fe_mirror_button.addEventListener("click", () => {
			this.v.on_fe_mirror_click();
		})

		this.fe_randomize_button = $(".fe_randomize_button")[0];
		this.fe_randomize_button.addEventListener("click", () => {
			this.v.on_fe_randomize_click();
		})


		this.fe_apply_button = $(".fe_apply_button")[0];
		this.fe_apply_button.addEventListener("click", () => {
			this.v.on_fe_apply_click();
		})

		this.fe_reset_button = $(".fe_reset_button")[0];
		this.fe_reset_button.addEventListener("click", () => {
			this.v.on_fe_reset_click();
		})



		this.fe_visual_items_section = $(".fe_visual_items_section")[0];

		//Cloning
		var first_fe_visual_item = $(".fe_visual_item_section")[0];
		var content = first_fe_visual_item.innerHTML;
		this.fe_visual_items_section.innerHTML = "";
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			var clone = first_fe_visual_item.cloneNode();
			clone.innerHTML = content;
			this.fe_visual_items_section.append(clone);
			clone.style.width = 100 / TOTAL_TRACKS + "%";
		}

		this.fe_visual_shape_amounts = $(".fe_visual_shape_amount");
		this.fe_visual_amounts = $(".fe_visual_amount");


	}

	update_shape = (editor_shape) => {
		this.fe_shape_choose_items[0].classList.toggle("active", false);
		this.fe_shape_choose_items[1].classList.toggle("active", false);
		this.fe_shape_choose_items[2].classList.toggle("active", false);

		this.fe_center_value.classList.toggle("unclickable", false);
		this.fe_center_label.classList.toggle("unclickable", false);
		this.fe_center_knob.clickable = true;

		this.fe_width_value.classList.toggle("unclickable", false);
		this.fe_width_label.classList.toggle("unclickable", false);
		this.fe_width_knob.clickable = true;

		switch(editor_shape){
			case EDITOR_SHAPE.FLAT:
				this.fe_shape_choose_items[0].classList.toggle("active", true);

				this.fe_center_value.classList.toggle("unclickable", true);
				this.fe_center_label.classList.toggle("unclickable", true);
				this.fe_center_knob.clickable = false;

				this.fe_width_value.classList.toggle("unclickable", true);
				this.fe_width_label.classList.toggle("unclickable", true);
				this.fe_width_knob.clickable = false;

				break;

			case EDITOR_SHAPE.TRIANGLE:
				this.fe_shape_choose_items[1].classList.toggle("active", true);
				break;

			case EDITOR_SHAPE.CURVE:
				this.fe_shape_choose_items[2].classList.toggle("active", true);
				break;
		}
	}

	update_amount = (value) => {
		this.fe_amount_knob.value = value;
		this.fe_amount_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(1);
		string_value += " Cents";

		this.fe_amount_value.innerHTML = string_value;
	}
	update_center = (value) => {
		this.fe_center_knob.value = value;
		this.fe_center_knob.update();
		this.fe_center_value.innerHTML = "Track " + Math.round(value * (TOTAL_TRACKS));
	}
	update_width = (value) => {
		this.fe_width_knob.value = value;
		this.fe_width_knob.update();
		this.fe_width_value.innerHTML = Math.round(value * 100) + " %";
	}

	update_random = (random, mirror) => {
		this.fe_random_button.classList.toggle("active", random);
		this.fe_mirror_button.classList.toggle("active", (random && mirror));
		this.fe_mirror_button.classList.toggle("unclickable", !random);
		this.fe_randomize_button.classList.toggle("unclickable", !random);
	}



	update_fe_visual= (random, mirror, shape_amounts, amounts, freq_edit_tracks) => {

		for (let i = 0; i < TOTAL_TRACKS; i++){

			this.fe_visual_shape_amounts[i].classList.toggle("active", freq_edit_tracks[i]);

			var shape_h;
			var final_h;

			shape_h = Math.abs(shape_amounts[i]) / 2 / MAX_FE_AMOUNT;
			if(freq_edit_tracks[i]){
				final_h = Math.abs(amounts[i]) / 2 / MAX_FE_AMOUNT;
			}else{
				final_h = 0;
			}

			if(random && mirror){
				shape_h *= 2;

				this.fe_visual_shape_amounts[i].style.bottom = (1 - shape_h) / 2 * 100 + "%";
				this.fe_visual_shape_amounts[i].style.top = "";

				if(amounts[i] >= 0){
					this.fe_visual_amounts[i].style.bottom = "50%";
					this.fe_visual_amounts[i].style.top = "";
				}else{
					this.fe_visual_amounts[i].style.top = "50%";
					this.fe_visual_amounts[i].style.bottom = "";
				}
			}else{
				if(shape_amounts[i] >= 0){
					this.fe_visual_shape_amounts[i].style.bottom = "50%";
					this.fe_visual_shape_amounts[i].style.top = "";
					this.fe_visual_amounts[i].style.bottom = "50%";
					this.fe_visual_amounts[i].style.top = "";
				}else{
					this.fe_visual_shape_amounts[i].style.top = "50%";
					this.fe_visual_shape_amounts[i].style.bottom = "";
					this.fe_visual_amounts[i].style.top = "50%";
					this.fe_visual_amounts[i].style.bottom = "";
				}
			}

			this.fe_visual_shape_amounts[i].style.height = shape_h * 100 + "%";
			this.fe_visual_amounts[i].style.height = final_h * 100 + "%";

		}
	}




	update_canvases = () => {
		this.fe_amount_knob.update();
		this.fe_center_knob.update();
		this.fe_width_knob.update();
	}
}
