class View_dadj_edit {
	constructor(view){
		this.v = view;



		this.dadj_freq_graph_canvas = $(".dadj_freq_graph")[0];
		this.dadj_freq_graph = new Dadj_freq_graph(this.dadj_freq_graph_canvas);

		this.dadj_freq_range_canvas = $(".dadj_freq_range_knob")[0];
		this.dadj_freq_range_knob = new Knob(this.dadj_freq_range_canvas, 0, MAX_DADJ_FREQ_RANGE, null, null);
		this.dadj_freq_range_knob.interval_color = "rgb(11,112,196)";
		this.dadj_freq_range_knob.on_change = (value) => {
			this.v.on_dadj_freq_range_change(value);
		}
		this.dadj_freq_range_value = $(".dadj_freq_range_knob_param_value")[0];
		this.dadj_freq_range_label = $(".dadj_freq_range_knob_param_label")[0];


		this.dadj_freq_coeff_canvas = $(".dadj_freq_coeff_knob")[0];
		this.dadj_freq_coeff_knob = new Knob(this.dadj_freq_coeff_canvas, -1, 1, 0, 0);
		this.dadj_freq_coeff_knob.interval_color = "rgb(11,112,196)";
		this.dadj_freq_coeff_knob.on_change = (value) => {
			this.v.on_dadj_freq_coeff_change(value);
		}
		this.dadj_freq_coeff_value = $(".dadj_freq_coeff_knob_param_value")[0];
		this.dadj_freq_coeff_label = $(".dadj_freq_coeff_knob_param_label")[0];



		this.dadj_vol_graph_canvas = $(".dadj_vol_graph")[0];
		this.dadj_vol_graph = new Dadj_vol_graph(this.dadj_vol_graph_canvas);

		this.dadj_vol_range_canvas = $(".dadj_vol_range_knob")[0];
		this.dadj_vol_range_knob = new Knob(this.dadj_vol_range_canvas, 0, MAX_DADJ_VOL_RANGE, null, null);
		this.dadj_vol_range_knob.interval_color = "rgb(11, 112, 196)";
		this.dadj_vol_range_knob.on_change = (value) => {
			this.v.on_dadj_vol_range_change(value);
		}
		this.dadj_vol_range_value = $(".dadj_vol_range_knob_param_value")[0];
		this.dadj_vol_range_label = $(".dadj_vol_range_knob_param_label")[0];


		this.dadj_vol_coeff_canvas = $(".dadj_vol_coeff_knob")[0];
		this.dadj_vol_coeff_knob = new Knob(this.dadj_vol_coeff_canvas, -1, 1, 0, 0);
		this.dadj_vol_coeff_knob.interval_color = "rgb(11, 112, 196)";
		this.dadj_vol_coeff_knob.on_change = (value) => {
			this.v.on_dadj_vol_coeff_change(value);
		}
		this.dadj_vol_coeff_value = $(".dadj_vol_coeff_knob_param_value")[0];
		this.dadj_vol_coeff_label = $(".dadj_vol_coeff_knob_param_label")[0];


		this.dadj_vol_amount_canvas = $(".dadj_vol_amount_knob")[0];
		this.dadj_vol_amount_knob = new Knob(this.dadj_vol_amount_canvas, -MAX_MIN_DADJ_VOL_AMOUNT, MAX_MIN_DADJ_VOL_AMOUNT, 0, 0);
		this.dadj_vol_amount_knob.interval_color = "rgb(11, 112, 196)";
		this.dadj_vol_amount_knob.on_change = (value) => {
			this.v.on_dadj_vol_amount_change(value);
		}
		this.dadj_vol_amount_value = $(".dadj_vol_amount_knob_param_value")[0];
		this.dadj_vol_amount_label = $(".dadj_vol_amount_knob_param_label")[0];


	}


	update_freq_range = (value) => {
		this.dadj_freq_graph.range = value;
		this.dadj_freq_graph.update();

		this.dadj_freq_range_knob.value = value;
		this.dadj_freq_range_knob.update();

		this.dadj_freq_range_value.innerHTML = String.fromCharCode(177) + " " + value.toFixed(1) + " Cents";
	}

	update_freq_coeff = (value) => {
		this.dadj_freq_graph.coeff = value;
		this.dadj_freq_graph.update();

		this.dadj_freq_coeff_knob.value = value;
		this.dadj_freq_coeff_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(3);

		this.dadj_freq_coeff_value.innerHTML = string_value;
	}



	update_vol_range = (value) => {
		this.dadj_vol_graph.range = value;
		this.dadj_vol_graph.update();

		this.dadj_vol_range_knob.value = value;
		this.dadj_vol_range_knob.update();

		this.dadj_vol_range_value.innerHTML = String.fromCharCode(177) + " " + value.toFixed(1) + " Cents";
	}

	update_vol_coeff = (value) => {
		this.dadj_vol_graph.coeff = value;
		this.dadj_vol_graph.update();

		this.dadj_vol_coeff_knob.value = value;
		this.dadj_vol_coeff_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(3);

		this.dadj_vol_coeff_value.innerHTML = string_value;
	}

	update_vol_amount = (value) => {
		this.dadj_vol_graph.amount = value;
		this.dadj_vol_graph.update();

		this.dadj_vol_amount_knob.value = value;
		this.dadj_vol_amount_knob.update();

		var string_value = (value >= 0) ? "+ " : "- ";
		string_value = (value === 0) ? "" : string_value;
		string_value += Math.abs(value).toFixed(2);
		string_value += " dB";

		this.dadj_vol_amount_value.innerHTML = string_value;
	}





	update_canvases = () => {
		this.dadj_freq_range_knob.update();
		this.dadj_freq_coeff_knob.update();
		this.dadj_freq_graph.update();
		this.dadj_vol_range_knob.update();
		this.dadj_vol_coeff_knob.update();
		this.dadj_vol_amount_knob.update();
		this.dadj_vol_graph.update();
	}
}
