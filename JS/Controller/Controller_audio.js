class Controller_audio{

	constructor(controller, model){
		this.c = controller;
		this.m = model;


		this.ctx = new AudioContext();
		this.merger = this.ctx.createChannelMerger();
		this.master_gain = this.ctx.createGain();
		this.master_gain.gain.value = null;
		this.merger.connect(this.master_gain);
		this.panner = this.ctx.createStereoPanner();
		this.master_gain.connect(this.panner);
		this.panner.pan.value = 0.5;
		this.panner.connect(this.ctx.destination);


		this.generators = [];

		this.update();
		this.ctx.resume().then(r => {let a=0});

	}


	db_to_lin(vols_db){
		let vols_lin = [];
		for(let i = 0; i < vols_db.length; i++){
			if(vols_db[i] <= MIN_DB){
				vols_lin.push(0);
			}else{
				vols_lin.push(Math.pow(10, vols_db[i] / 20));
			}
		}
		return vols_lin;
	}

	play_note(note){
		let g = this.find_generator(note.midi_note);
		if(!g){
			let new_gen = new Audio_generator(this.ctx, note.midi_note, note.freqs, this.db_to_lin(note.vols));
			this.generators.push(new_gen);
			new_gen.connect(this.merger);
			new_gen.play(this.m.out_attack, this.m.out_decay_time, this.m.out_decay_vol);
		}
	}
	release_note(midi_note){
		let g = this.find_generator(midi_note);
		if(g){
			g.stop(this.m.out_release);
			this.generators.splice(this.generators.indexOf(g), 1);
			setInterval(()=>{
				g.disconnect();
			}, this.m.out_release * 5)
		}
	}


	find_generator(midi_note){
		for(let i = 0; i < this.generators.length; i++){
			if(this.generators[i].midi_note === midi_note){
				return this.generators[i];
			}
		}
		return null;
	}


	update(){
		this.master_gain.gain.value = this.m.out_master;
		let notes = this.m.notes;
		for(let i = 0; i < notes.length; i++){
			let g = this.find_generator(notes[i].midi_note);
			if(g){
				g.update_vols(this.db_to_lin(notes[i].vols));
				g.update_freqs(notes[i].freqs);
			}
		}
	}

}
