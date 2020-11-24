class Controller_settings {

	constructor(controller, model) {
		this.c = controller;
		this.m = model;
	}

	on_settings_env_attack_change = (attack) => {
		this.m.out_attack = attack;
	}
	on_settings_env_decay_vol_change = (decay_vol) => {
		this.m.out_decay_vol = decay_vol;
	}
	on_settings_env_decay_time_change = (decay_time) => {
		this.m.out_decay_time = decay_time;
	}
	on_settings_env_release_change = (release) => {
		this.m.out_release = release;
	}


	on_settings_midi_split_note_change = (value) => {
		this.m.split_note = value;
	}
	on_settings_midi_octave_shift_change = (value) => {
		this.m.octave_shift = value;
	}
	on_settings_midi_a4_tuning_change = (value) => {
		this.m.a4_tuning = value;
	}
}
