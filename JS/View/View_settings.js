class View_settings {
	constructor(view){
		this.v = view;

		this.settings_env_attack_canvas = $(".settings_env_attack_knob")[0];
		this.settings_env_attack_knob = new Knob(this.settings_env_attack_canvas, 0, 3, null, null);
		this.settings_env_attack_knob.interval_color = "#004cd0";
		this.settings_env_attack_knob.on_change = (value) => {
			this.v.on_settings_env_attack_change(value);
		}
		this.settings_env_attack_value = $(".settings_env_attack_knob_param_value")[0];


		this.settings_env_decay_time_canvas = $(".settings_env_decay_time_knob")[0];
		this.settings_env_decay_time_knob = new Knob(this.settings_env_decay_time_canvas, 0, 3, null, null);
		this.settings_env_decay_time_knob.interval_color = "#004cd0";
		this.settings_env_decay_time_knob.on_change = (value) => {
			this.v.on_settings_env_decay_time_change(value);
		}
		this.settings_env_decay_time_value = $(".settings_env_decay_time_knob_param_value")[0];


		this.settings_env_decay_vol_canvas = $(".settings_env_decay_vol_knob")[0];
		this.settings_env_decay_vol_knob = new Knob(this.settings_env_decay_vol_canvas, 0, 3, null, null);
		this.settings_env_decay_vol_knob.interval_color = "#004cd0";
		this.settings_env_decay_vol_knob.on_change = (value) => {
			this.v.on_settings_env_decay_vol_change(value);
		}
		this.settings_env_decay_vol_value = $(".settings_env_decay_vol_knob_param_value")[0];


		this.settings_env_release_canvas = $(".settings_env_release_knob")[0];
		this.settings_env_release_knob = new Knob(this.settings_env_release_canvas, 0, 3, null, null);
		this.settings_env_release_knob.interval_color = "#004cd0";
		this.settings_env_release_knob.on_change = (value) => {
			this.v.on_settings_env_release_change(value);
		}
		this.settings_env_release_value = $(".settings_env_release_knob_param_value")[0];



		this.settings_midi_split_note_slider = $(".settings_midi_split_note_slider")[0];
		this.settings_midi_split_note_slider.addEventListener("change", (e) => {
			this.v.on_settings_midi_split_note_change(this.settings_midi_split_note_slider.value);
		})
		this.settings_midi_split_note_value = $(".settings_midi_split_note_param_value")[0];

		this.settings_midi_octave_shift_slider = $(".settings_midi_octave_shift_slider")[0];
		this.settings_midi_octave_shift_slider.addEventListener("change", (value) => {
			this.v.on_settings_midi_octave_shift_change(this.settings_midi_octave_shift_slider.value);
		})
		this.settings_midi_octave_shift_value = $(".settings_midi_octave_shift_param_value")[0];

		this.settings_midi_a4_tuning_slider = $(".settings_midi_a4_tuning_slider")[0];
		this.settings_midi_a4_tuning_slider.addEventListener("change", (value) => {
			this.v.on_settings_midi_a4_tuning_change(this.settings_midi_a4_tuning_slider.value);
		})
		this.settings_midi_a4_tuning_value = $(".settings_midi_a4_tuning_param_value")[0];
	}

	update_env_attack = (value) => {
		this.settings_env_attack_knob.value = value;
		this.settings_env_attack_knob.update();
		this.settings_env_attack_value.innerHTML = value.toFixed(2);
	}
	update_env_decay_time = (value) => {
		this.settings_env_decay_time_knob.value = value;
		this.settings_env_decay_time_knob.update();
		this.settings_env_decay_time_value.innerHTML = value.toFixed(2);
	}
	update_env_decay_vol = (value) => {
		this.settings_env_decay_vol_knob.value = value;
		this.settings_env_decay_vol_knob.update();
		this.settings_env_decay_vol_value.innerHTML = value.toFixed(2);
	}
	update_env_release = (value) => {
		this.settings_env_release_knob.value = value;
		this.settings_env_release_knob.update();
		this.settings_env_release_value.innerHTML = value.toFixed(2);
	}

	update_midi_split_note = (value) => {
		this.settings_midi_split_note_value.innerHTML = value;
	}
	update_midi_octave_shift = (value) => {
		this.settings_midi_octave_shift_value.innerHTML = value;
	}
	update_midi_a4_tuning = (value) => {
		this.settings_midi_a4_tuning_value.innerHTML = value;
	}


	update_canvases = () => {
		this.settings_env_attack_knob.update();
		this.settings_env_decay_time_knob.update();
		this.settings_env_decay_vol_knob.update();
		this.settings_env_release_knob.update();
	}
}
