class Model {
	constructor() {

		//Vols
		this._vols_base = new Array(TOTAL_TRACKS).fill(-40);
		this._vols_ve_shape_amounts = new Array(TOTAL_TRACKS).fill(0);
		this._vols_ve_amounts = new Array(TOTAL_TRACKS).fill(0);
		this._last_played_note_dadj_vols = new Array(TOTAL_TRACKS).fill(0);

		//Freqs
		this._freqs_base = new Array(TOTAL_TRACKS).fill(0);
		this._freqs_fe_shape_amounts = new Array(TOTAL_TRACKS).fill(0);
		this._freqs_fe_amounts = new Array(TOTAL_TRACKS).fill(0);
		this._last_played_note_dadj_freqs = new Array(TOTAL_TRACKS).fill(0);

		//Layout
		this._layout_left = LAYOUT_LEFT.HOME;
		this._layout_right = LAYOUT_RIGHT.DEFAULT;
		this._custom_selection = false;

		//Selection
		this._selection_mode = SELECTION_MODE.ADD;
		this._selected_group = null;

		//Rows
		this._playback_tracks = new Array(TOTAL_TRACKS).fill(true);
		this._vol_edit_tracks = new Array(TOTAL_TRACKS).fill(true);
		this._freq_edit_tracks = new Array(TOTAL_TRACKS).fill(true);
		this._dadj_edit_tracks = new Array(TOTAL_TRACKS).fill(true);

		this._playback_tracks_backup = null;
		this._vol_edit_tracks_backup = null;
		this._freq_edit_tracks_backup = null;
		this._dadj_edit_tracks_backup = null;

		//Zoom
		this._first_visible_track = 0;
		this._last_visible_track = TOTAL_TRACKS - 1;


		//Vol edit
		this._ve_shape = EDITOR_SHAPE.FLAT;
		this._ve_amount = 0; // in dB
		this._ve_center = 0.7; // 0 to 1
		this._ve_width = 0.4; // 0 to 1

		this._ve_random = false;
		this._ve_mirror = false;
		this._ve_random_values = new Array(TOTAL_TRACKS).fill(1);

		//Freq edit
		this._fe_shape = EDITOR_SHAPE.FLAT;
		this._fe_amount = 0; // in Cents
		this._fe_center = 0.7; // 0 to 1
		this._fe_width = 0.4; // 0 to 1

		this._fe_random = false;
		this._fe_mirror = false;
		this._fe_random_values = new Array(TOTAL_TRACKS).fill(1);



		//Dadj
		this._dadj_freq_range = 0;
		this._dadj_freq_coeff = 0;
		this._dadj_vol_range = 0;
		this._dadj_vol_coeff = 0;
		this._dadj_vol_amount = 0;



		//Midi
		this._notes = [];
		this._bass_notes = [];
		this._bass_ovts = [];

		this._a4_tuning = 440;
		this._split_note = 60;
		this._octave_shift = 0;



		//output
		this._out_attack = 0.1;
		this._out_decay_time = 0.3;
		this._out_decay_vol = 0.7;
		this._out_release= 0.3;

		this._out_master = 1;





		this.randomize_ve_values();
		this.randomize_fe_values();


	}


	//Vol edit

	compute_vols_ve_amounts() {
		for (let i = 0; i < TOTAL_TRACKS; i++) {

			//Only shape
			switch (this._ve_shape) {
				case EDITOR_SHAPE.FLAT:
					this._vols_ve_shape_amounts[i] = this._ve_amount;
					break;
				case EDITOR_SHAPE.TRIANGLE:
					if (Math.abs(i - this._ve_center * TOTAL_TRACKS) < Math.pow(this._ve_width, 2) * TOTAL_TRACKS) {
						this._vols_ve_shape_amounts[i] = (Math.pow(this._ve_width, 2) * (TOTAL_TRACKS) - Math.abs(i - this._ve_center * (TOTAL_TRACKS))) / (Math.pow(this._ve_width, 2) * TOTAL_TRACKS / 2) * this._ve_amount / 2;
					} else {
						this._vols_ve_shape_amounts[i] = 0;
					}
					break;
				case EDITOR_SHAPE.CURVE:
					this._vols_ve_shape_amounts[i] = Math.exp(-Math.pow((i - this._ve_center * TOTAL_TRACKS) / (Math.pow(this._ve_width * 0.5 + 0.06, 1.5) * TOTAL_TRACKS), 2)) * this._ve_amount;
					break;
			}

			//Final values (with random and mirror settings)
			if (this._vol_edit_tracks[i]) {
				if (this._ve_random) {
					if (this._ve_mirror) {
						this._vols_ve_amounts[i] = this._vols_ve_shape_amounts[i] * this._ve_random_values[i];
					} else {
						this._vols_ve_amounts[i] = this._vols_ve_shape_amounts[i] * Math.abs(this._ve_random_values[i]);
					}
				} else {
					this._vols_ve_amounts[i] = this._vols_ve_shape_amounts[i];
				}
			} else {
				this._vols_ve_amounts[i] = 0;
			}

		}

	}


	//Vols
	get vols_base() {
		return this._vols_base;
	}

	set vols_base(values) {
		this._vols_base = values;
	}

	set_vol(track, vol){
		this._vols_base[track] = vol;
	}

	get vols_ve_shape_amounts() {
		return this._vols_ve_shape_amounts;
	}

	get vols_ve_amounts() {
		return this._vols_ve_amounts;
	}



	//Freqs

	compute_freqs_fe_amounts() {
		for (let i = 0; i < TOTAL_TRACKS; i++) {

			//Only shape
			switch (this._fe_shape) {
				case EDITOR_SHAPE.FLAT:
					this._freqs_fe_shape_amounts[i] = this._fe_amount;
					break;
				case EDITOR_SHAPE.TRIANGLE:
					if (Math.abs(i - this._fe_center * TOTAL_TRACKS) < Math.pow(this._fe_width, 2) * TOTAL_TRACKS) {
						this._freqs_fe_shape_amounts[i] = (Math.pow(this._fe_width, 2) * (TOTAL_TRACKS) - Math.abs(i - this._fe_center * (TOTAL_TRACKS))) / (Math.pow(this._fe_width, 2) * TOTAL_TRACKS / 2) * this._fe_amount / 2;
					} else {
						this._freqs_fe_shape_amounts[i] = 0;
					}
					break;
				case EDITOR_SHAPE.CURVE:
					this._freqs_fe_shape_amounts[i] = Math.exp(-Math.pow((i - this._fe_center * TOTAL_TRACKS) / (Math.pow(this._fe_width * 0.5 + 0.06, 1.5) * TOTAL_TRACKS), 2)) * this._fe_amount;
					break;
			}

			//Final values (with random and mirror settings)
			if (this._freq_edit_tracks[i]) {
				if (this._fe_random) {
					if (this._fe_mirror) {
						this._freqs_fe_amounts[i] = this._freqs_fe_shape_amounts[i] * this._fe_random_values[i];
					} else {
						this._freqs_fe_amounts[i] = this._freqs_fe_shape_amounts[i] * Math.abs(this._fe_random_values[i]);
					}
				} else {
					this._freqs_fe_amounts[i] = this._freqs_fe_shape_amounts[i];
				}
			} else {
				this._freqs_fe_amounts[i] = 0;
			}

		}

	}

	get freqs_base() {
		return this._freqs_base;
	}
	set freqs_base(values) {
		this._freqs_base = values;
	}
	set_freq(track, freq){
		this._freqs_base[track] = freq;
	}
	get freqs_fe_shape_amounts() {
		return this._freqs_fe_shape_amounts;
	}
	get freqs_fe_amounts() {
		return this._freqs_fe_amounts;
	}


	//Layout
	get layout_left() {
		return this._layout_left;
	}
	set layout_left(value) {
		this._layout_left = value;
	}
	get layout_right() {
		return this._layout_right;
	}
	set layout_right(value) {
		this._layout_right = value;
	}

	get custom_selection() {
		return this._custom_selection;
	}
	set custom_selection(value) {
		this._custom_selection = value;
	}

	//Selection
	get selection_mode() {
		return this._selection_mode;
	}
	set selection_mode(value) {
		this._selection_mode = value;
	}

	get selected_group(){
		return this._selected_group;
	}
	set selected_group(value) {
		this._selected_group = value;
	}


	//Rows
	get playback_tracks() {
		return this._playback_tracks;
	}
	get vol_edit_tracks() {
		return this._vol_edit_tracks;
	}
	get freq_edit_tracks() {
		return this._freq_edit_tracks;
	}
	get dadj_edit_tracks() {
		return this._dadj_edit_tracks;
	}
	get playback_tracks_backup() {
		return this._playback_tracks_backup;
	}
	get vol_edit_tracks_backup() {
		return this._vol_edit_tracks_backup;
	}
	get freq_edit_tracks_backup() {
		return this._freq_edit_tracks_backup;
	}
	get dadj_edit_tracks_backup() {
		return this._dadj_edit_tracks_backup;
	}
	set_playback_track = (track, value) => {
		this._playback_tracks[track] = value;
	}
	set_vol_edit_track = (track, value) => {
		this._vol_edit_tracks[track] = value;
		this.compute_vols_ve_amounts();
	}
	set_freq_edit_track = (track, value) => {
		this._freq_edit_tracks[track] = value;
		this.compute_freqs_fe_amounts();
	}
	set_dadj_edit_track = (track, value) => {
		this._dadj_edit_tracks[track] = value;
	}


	backup_playback_tracks = () => {
		this._playback_tracks_backup = this._playback_tracks.slice();
	}
	backup_vol_edit_tracks = () => {
		this._vol_edit_tracks_backup = this._vol_edit_tracks.slice();
	}
	backup_freq_edit_tracks = () => {
		this._freq_edit_tracks_backup = this._freq_edit_tracks.slice();
	}
	backup_dadj_edit_tracks = () => {
		this._dadj_edit_tracks_backup = this._dadj_edit_tracks.slice();
	}


	//Zoom
	get first_visible_track() {
		return this._first_visible_track;
	}
	set first_visible_track(value) {
		this._first_visible_track = value;
	}
	get last_visible_track() {
		return this._last_visible_track;
	}
	set last_visible_track(value) {
		this._last_visible_track = value;
	}


	//Vol edit
	get ve_shape() {
		return this._ve_shape;
	}
	set ve_shape(value) {
		this._ve_shape = value;
		this.compute_vols_ve_amounts();
	}
	get ve_amount() {
		return this._ve_amount;
	}
	set ve_amount(value) {
		this._ve_amount = value;
		this.compute_vols_ve_amounts();
	}
	get ve_center() {
		return this._ve_center;
	}
	set ve_center(value) {
		this._ve_center = value;
		this.compute_vols_ve_amounts();
	}
	get ve_width() {
		return this._ve_width;
	}
	set ve_width(value) {
		this._ve_width = value;
		this.compute_vols_ve_amounts();
	}
	get ve_random() {
		return this._ve_random;
	}
	set ve_random(value) {
		this._ve_random = value;
		this.compute_vols_ve_amounts();
	}
	get ve_mirror() {
		return this._ve_mirror;
	}
	set ve_mirror(value) {
		this._ve_mirror = value;
		this.compute_vols_ve_amounts();
	}
	randomize_ve_values = () => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			this._ve_random_values[i] = Math.random() * 2 - 1;
		}
		this.compute_vols_ve_amounts();
	}


	//Freq edit
	get fe_shape() {
		return this._fe_shape;
	}
	set fe_shape(value) {
		this._fe_shape = value;
		this.compute_freqs_fe_amounts();
	}
	get fe_amount() {
		return this._fe_amount;
	}
	set fe_amount(value) {
		this._fe_amount = value;
		this.compute_freqs_fe_amounts();
	}
	get fe_center() {
		return this._fe_center;
	}
	set fe_center(value) {
		this._fe_center = value;
		this.compute_freqs_fe_amounts();
	}
	get fe_width() {
		return this._fe_width;
	}
	set fe_width(value) {
		this._fe_width = value;
		this.compute_freqs_fe_amounts();
	}
	get fe_random() {
		return this._fe_random;
	}
	set fe_random(value) {
		this._fe_random = value;
		this.compute_freqs_fe_amounts();
	}
	get fe_mirror() {
		return this._fe_mirror;
	}
	set fe_mirror(value) {
		this._fe_mirror = value;
		this.compute_freqs_fe_amounts();
	}
	randomize_fe_values = () => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			this._fe_random_values[i] = Math.random() * 2 - 1;
		}
		this.compute_freqs_fe_amounts();
	}


	//Dadj
	get dadj_freq_range() {
		return this._dadj_freq_range;
	}
	get dadj_freq_coeff() {
		return this._dadj_freq_coeff;
	}
	get dadj_vol_range() {
		return this._dadj_vol_range;
	}
	get dadj_vol_coeff() {
		return this._dadj_vol_coeff;
	}
	get dadj_vol_amount() {
		return this._dadj_vol_amount;
	}
	set dadj_freq_range(value) {
		this._dadj_freq_range = value;
	}
	set dadj_freq_coeff(value) {
		this._dadj_freq_coeff = value;
	}
	set dadj_vol_range(value) {
		this._dadj_vol_range = value;
	}
	set dadj_vol_coeff(value) {
		this._dadj_vol_coeff = value;
	}
	set dadj_vol_amount(value) {
		this._dadj_vol_amount = value;
	}
	process_bass_ovts(){
		let bass_ovts = [];

		for(let i = 0; i < this._bass_notes.length; i++){
			let f_temp = this.midi_to_freq(this._bass_notes[i]);
			while(f_temp < MAX_FREQUENCY){
				bass_ovts.push(f_temp);
				f_temp *= 2;
			}
		}
		bass_ovts.sort(function(a, b){return a - b});
		this._bass_ovts = bass_ovts;
	}
	process_notes(){
		if(this._notes.length === 0 || this._bass_notes.length === 0){
			this._last_played_note_dadj_freqs.fill(0);
			this._last_played_note_dadj_vols.fill(0);
		}
		for(let i = 0; i < this._notes.length; i++){
			this.process_note(this._notes[i]);
		}
	}
	nearest_ovts(freq){
		if(freq < this._bass_ovts[0]){
			return [-1000000, this._bass_ovts[0]];
		}else if(freq >= this._bass_ovts[this._bass_ovts.length - 1]){
			return [this._bass_ovts[this._bass_ovts.length - 1], 1000000];
		}else{
			for(let i = 0; i < this._bass_ovts.length; i++){
				if(this._bass_ovts[i] <= freq && this._bass_ovts[i+1] > freq){
					return [this._bass_ovts[i], this._bass_ovts[i+1]];
				}
			}
		}
	}
	process_note(note){
		let f0 = this.midi_to_freq(note.midi_note);

		let freqs = [];
		let vols = [];

		for(let i = 0; i < TOTAL_TRACKS; i++){
			let v;
			let f;

			//freq edit
			f = f0 * (i+1);
			let cents_diff_1 = this.freqs_base[i];
			if(this.freq_edit_tracks[i]){
				cents_diff_1 += this.freqs_fe_amounts[i];
			}
			cents_diff_1 = (cents_diff_1 > MAX_MIN_CENTS) ? MAX_MIN_CENTS : cents_diff_1;
			cents_diff_1 = (cents_diff_1 < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : cents_diff_1;
			f *= Math.pow(2, cents_diff_1 / 1200);

			//vol edit
			v = this.vols_base[i];
			if(this.vol_edit_tracks[i]){
				v+= this.vols_ve_amounts[i];
			}
			v = (v> MAX_DB) ? MAX_DB : v;
			v = (v< MIN_DB) ? MIN_DB : v;


			//dadj
			if(this._bass_notes.length > 0 && this.dadj_edit_tracks[i]){

				//find nearest bass ovt
				let nearest_2 = this.nearest_ovts(f);
				let cents_diff_1 = 1200 * Math.log2(f / nearest_2[0]);
				let cents_diff_2 = 1200 * Math.log2(f / nearest_2[1]);
				let min_cents_diff;
				if(Math.abs(cents_diff_1) <= Math.abs(cents_diff_2)){
					min_cents_diff = cents_diff_1;
				}else{
					min_cents_diff = cents_diff_2;
				}

				//Freq
				let cents_to_add = 0;
				if(Math.abs(min_cents_diff) < this._dadj_freq_range){
					let x_01 = Math.abs(min_cents_diff / this._dadj_freq_range);
					let exp;
					if(this._dadj_freq_coeff >= 0){
						exp = 1 / (1 - this._dadj_freq_coeff + 0.0001)
					}else{
						exp = 1 + this._dadj_freq_coeff + 0.0001;
					}
					let y_01 = Math.sign(min_cents_diff) * (Math.pow(x_01, exp) - x_01);
					cents_to_add = y_01 * this._dadj_freq_range;

					if(this.dadj_freq_coeff < 0){
						let avg = (cents_diff_1 - cents_diff_2) / 2;
						if(min_cents_diff >= 0){
							cents_to_add = Math.min(cents_to_add, avg - cents_diff_1);
						}else{
							cents_to_add = Math.max(cents_to_add, -avg - cents_diff_2);
						}
					}

					f *= Math.pow(2, cents_to_add / 1200);
					this._last_played_note_dadj_freqs[i] = cents_to_add;
				}else{
					this._last_played_note_dadj_freqs[i] = 0;
				}


				//Vol
				min_cents_diff += cents_to_add;
				if(Math.abs(min_cents_diff) < this.dadj_vol_range){
					let x_01 = Math.abs(min_cents_diff / this.dadj_vol_range);
					let exp;
					if(this._dadj_vol_coeff >= 0){
						exp = 1 / (1 - this._dadj_vol_coeff + 0.0001)
					}else{
						exp = 1 + this._dadj_vol_coeff + 0.0001;
					}
					let y_01 = Math.pow(1 - x_01, exp);
					let y_db = this._dadj_vol_amount * y_01;

					this._last_played_note_dadj_vols[i] = y_db;
					v += y_db;
				}else{
					this._last_played_note_dadj_vols[i] = 0;
				}

			}


			if(this.playback_tracks[i]){
				vols.push(v);
			}else{
				vols.push(MIN_DB);
			}
			freqs.push(f);

		}


		note.freqs = freqs;
		note.vols = vols;

	}
	midi_to_freq(midi_note){
		return this.a4_tuning * Math.pow(2, (midi_note - 69) / 12);
	}
	note_find(midi_note){
		for(let i = 0; i < this._notes.length; i++){
			if(this._notes[i].midi_note === midi_note){
				return this._notes[i];
			}
		}
		return null;
	}
	add_note(midi_note){
		let n = this.note_find(midi_note);
		if(!n){
			let note = new Note(midi_note);
			this._notes.push(note);
			this.process_notes();
			return note;
		}
		return n;
	}
	add_bass_note(midi_note){
		if(!this._bass_notes.includes(midi_note)){
			this._bass_notes.push(midi_note);
			this.process_bass_ovts();
			this.process_notes();
		}
	}
	remove_note(midi_note){
		let n = this.note_find(midi_note);
		if(n){
			this._notes.splice(this._notes.indexOf(n), 1);
			this.process_notes();
		}
	}
	remove_bass_note(midi_note){
		if(this._bass_notes.includes(midi_note)){
			this._bass_notes.splice(this._bass_notes.indexOf(midi_note), 1);
			this.process_bass_ovts();
			this.process_notes();
		}
	}

	set_all_freq_to_zero(){
		for(let i = 0; i < TOTAL_TRACKS; i++){
			this.set_freq(i, 0);
		}
	}
	set_all_vol_to_default(){
		for(let i = 0; i < TOTAL_TRACKS; i++){
			this.set_vol(i, -40);
		}
	}


	// Getters and setters
	get notes() {
		return this._notes;
	}
	set notes(value) {
		this._notes = value;
	}
	get bass_notes() {
		return this._bass_notes;
	}
	set bass_notes(value) {
		this._bass_notes = value;
	}
	get a4_tuning() {
		return this._a4_tuning;
	}
	set a4_tuning(value) {
		this._a4_tuning = value;
	}
	get split_note() {
		return this._split_note;
	}
	set split_note(value) {
		this._split_note = value;
	}
	get octave_shift() {
		return this._octave_shift;
	}
	set octave_shift(value) {
		this._octave_shift = value;
	}
	get out_attack(){
		return this._out_attack;
	}
	get out_decay_time(){
		return this._out_decay_time;
	}
	get out_decay_vol(){
		return this._out_decay_vol;
	}
	get out_release(){
		return this._out_release;
	}
	get out_master(){
		return this._out_master;
	}
	set out_attack(value) {
		this._out_attack = value;
	}
	set out_decay_time(value) {
		this._out_decay_time = value;
	}
	set out_decay_vol(value) {
		this._out_decay_vol = value;
	}
	set out_release(value) {
		this._out_release = value;
	}
	set out_master(value) {
		this._out_master = value;
	}


}
