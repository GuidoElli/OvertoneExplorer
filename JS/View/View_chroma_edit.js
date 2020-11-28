class View_chroma_edit {
	constructor(view){
		this.v = view;



		this.chroma_freq_graph_canvas = $(".chroma_freq_graph")[0];
		this.chroma_freq_graph = new Chroma_freq_graph(this.chroma_freq_graph_canvas);

		this.chroma_freq_range_canvas = $(".chroma_freq_range_knob")[0];
		this.chroma_freq_range_knob = new Knob(this.chroma_freq_range_canvas, 0, MAX_CHROMA_FREQ_RANGE, null, null);
		this.chroma_freq_range_knob.interval_color = "#bf0000";
		this.chroma_freq_range_knob.on_change = (value) => {
			this.v.on_chroma_freq_range_change(value);
		}
		this.chroma_freq_range_value = $(".chroma_freq_range_knob_param_value")[0];
		this.chroma_freq_range_label = $(".chroma_freq_range_knob_param_label")[0];


		this.chroma_freq_coeff_canvas = $(".chroma_freq_coeff_knob")[0];
		this.chroma_freq_coeff_knob = new Knob(this.chroma_freq_coeff_canvas, -1, 1, 0, 0);
		this.chroma_freq_coeff_knob.interval_color = "#bf0000";
		this.chroma_freq_coeff_knob.on_change = (value) => {
			this.v.on_chroma_freq_coeff_change(value);
		}
		this.chroma_freq_coeff_value = $(".chroma_freq_coeff_knob_param_value")[0];
		this.chroma_freq_coeff_label = $(".chroma_freq_coeff_knob_param_label")[0];



		this.chroma_vol_graph_canvas = $(".chroma_vol_graph")[0];
		this.chroma_vol_graph = new Chroma_vol_graph(this.chroma_vol_graph_canvas);

		this.chroma_vol_range_canvas = $(".chroma_vol_range_knob")[0];
		this.chroma_vol_range_knob = new Knob(this.chroma_vol_range_canvas, 0, MAX_CHROMA_VOL_RANGE, null, null);
		this.chroma_vol_range_knob.interval_color = "#bf0000";
		this.chroma_vol_range_knob.on_change = (value) => {
			this.v.on_chroma_vol_range_change(value);
		}
		this.chroma_vol_range_value = $(".chroma_vol_range_knob_param_value")[0];
		this.chroma_vol_range_label = $(".chroma_vol_range_knob_param_label")[0];


		this.chroma_vol_coeff_canvas = $(".chroma_vol_coeff_knob")[0];
		this.chroma_vol_coeff_knob = new Knob(this.chroma_vol_coeff_canvas, -1, 1, 0, 0);
		this.chroma_vol_coeff_knob.interval_color = "#bf0000";
		this.chroma_vol_coeff_knob.on_change = (value) => {
			this.v.on_chroma_vol_coeff_change(value);
		}
		this.chroma_vol_coeff_value = $(".chroma_vol_coeff_knob_param_value")[0];
		this.chroma_vol_coeff_label = $(".chroma_vol_coeff_knob_param_label")[0];


		this.chroma_vol_amount_canvas = $(".chroma_vol_amount_knob")[0];
		this.chroma_vol_amount_knob = new Knob(this.chroma_vol_amount_canvas, -MAX_MIN_CHROMA_VOL_AMOUNT, MAX_MIN_CHROMA_VOL_AMOUNT, 0, 0);
		this.chroma_vol_amount_knob.interval_color = "#bf0000";
		this.chroma_vol_amount_knob.on_change = (value) => {
			this.v.on_chroma_vol_amount_change(value);
		}
		this.chroma_vol_amount_value = $(".chroma_vol_amount_knob_param_value")[0];
		this.chroma_vol_amount_label = $(".chroma_vol_amount_knob_param_label")[0];


	}


	update_freq_range = (value) => {
		this.chroma_freq_graph.range = value;
		this.chroma_freq_graph.update();

		this.chroma_freq_range_knob.value = value;
		this.chroma_freq_range_knob.update();

		this.chroma_freq_range_value.innerHTML = String.fromCharCode(177) + " " + value.toFixed(1) + " cents";
	}

	update_freq_coeff = (value) => {
		this.chroma_freq_graph.coeff = value;
		this.chroma_freq_graph.update();

		this.chroma_freq_coeff_knob.value = value;
		this.chroma_freq_coeff_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(3);

		this.chroma_freq_coeff_value.innerHTML = string_value;
	}



	update_vol_range = (value) => {
		this.chroma_vol_graph.range = value;
		this.chroma_vol_graph.update();

		this.chroma_vol_range_knob.value = value;
		this.chroma_vol_range_knob.update();

		this.chroma_vol_range_value.innerHTML = String.fromCharCode(177) + " " + value.toFixed(1) + " cents";
	}

	update_vol_coeff = (value) => {
		this.chroma_vol_graph.coeff = value;
		this.chroma_vol_graph.update();

		this.chroma_vol_coeff_knob.value = value;
		this.chroma_vol_coeff_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(3);

		this.chroma_vol_coeff_value.innerHTML = string_value;
	}

	update_vol_amount = (value) => {
		this.chroma_vol_graph.amount = value;
		this.chroma_vol_graph.update();

		this.chroma_vol_amount_knob.value = value;
		this.chroma_vol_amount_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(2);
		string_value += " dB";

		this.chroma_vol_amount_value.innerHTML = string_value;
	}





	update_canvases = () => {
		this.chroma_freq_range_knob.update();
		this.chroma_freq_coeff_knob.update();
		this.chroma_freq_graph.update();
		this.chroma_vol_range_knob.update();
		this.chroma_vol_coeff_knob.update();
		this.chroma_vol_amount_knob.update();
		this.chroma_vol_graph.update();
	}
}
