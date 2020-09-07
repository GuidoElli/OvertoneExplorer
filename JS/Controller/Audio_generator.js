class Audio_generator_old{
	constructor(audioCTX, midi_note, freqs, vols){
		this.midi_note = midi_note;
		this.ctx = audioCTX;
		this.merger = audioCTX.createChannelMerger();
		this.master_gain = audioCTX.createGain();
		this.master_gain.gain.value = 0;
		this.merger.connect(this.master_gain);

		this.oscillators = [];
		this.vols = [];
		for(let i = 0; freqs[i] < MAX_FREQUENCY && i < TOTAL_TRACKS; i++){
			let o = audioCTX.createOscillator();
			this.oscillators.push(o);
			let g = audioCTX.createGain();
			this.vols.push(g);
			o.connect(g).connect(this.merger);
			o.start();
		}
		for(let i = 0; i < this.oscillators.length; i++){
			this.vols[i].gain.value = vols[i];
		}
		for(let i = 0; i < this.oscillators.length; i++){
			this.oscillators[i].frequency.value = freqs[i];
		}
	}

	update_vols(values){
		for(let i = 0; i < this.oscillators.length; i++){
			this.vols[i].gain.linearRampToValueAtTime(values[i], this.ctx.currentTime + 0.04);
		}
	}
	update_freqs(values){
		for(let i = 0; i < this.oscillators.length; i++){
			this.oscillators[i].frequency.linearRampToValueAtTime(values[i], this.ctx.currentTime + 0.04);
		}
	}

	play(attack, decay_time, decay_vol){
		this.master_gain.gain.linearRampToValueAtTime(1, this.ctx.currentTime + attack);
		this.master_gain.gain.exponentialRampToValueAtTime(decay_vol, this.ctx.currentTime + attack + decay_time);
	}
	stop(release){
		this.master_gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + release);
	}

	connect(destinationNode){
		this.master_gain.connect(destinationNode);
	}
	disconnect(){
		this.master_gain.disconnect();
	}

}
