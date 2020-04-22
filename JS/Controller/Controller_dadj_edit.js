class Controller_dadj_edit{

	constructor(controller, model){
		this.c = controller;
		this.m = model;
	}

	on_dadj_freq_range_change = (value) => {
		this.m.dadj_freq_range = value;
		this.c.update_audio();
		this.c.update_view();
	}
	on_dadj_freq_coeff_change = (value) => {
		this.m.dadj_freq_coeff = value;
		this.c.update_audio();
		this.c.update_view();
	}
	on_dadj_vol_range_change = (value) => {
		this.m.dadj_vol_range = value;
		this.c.update_audio();
		this.c.update_view();
	}
	on_dadj_vol_coeff_change = (value) => {
		this.m.dadj_vol_coeff = value;
		this.c.update_audio();
		this.c.update_view();
	}
	on_dadj_vol_amount_change = (value) => {
		this.m.dadj_vol_amount = value;
		this.c.update_audio();
		this.c.update_view();
	}


}
