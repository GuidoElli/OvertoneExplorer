class Controller_chroma_edit{

	constructor(controller, model){
		this.c = controller;
		this.m = model;
	}

	on_chroma_freq_range_change = (value) => {
		this.m.chroma_freq_range = value;
		this.c.update_audio();
	}
	on_chroma_freq_coeff_change = (value) => {
		this.m.chroma_freq_coeff = value;
		this.c.update_audio();
	}
	on_chroma_vol_range_change = (value) => {
		this.m.chroma_vol_range = value;
		this.c.update_audio();
	}
	on_chroma_vol_coeff_change = (value) => {
		this.m.chroma_vol_coeff = value;
		this.c.update_audio();
	}
	on_chroma_vol_amount_change = (value) => {
		this.m.chroma_vol_amount = value;
		this.c.update_audio();
	}


}
