class Controller {
	constructor(model, view){
		this.model = model;
		this.view = view;


		//Controller
		this.layout = new Controller_layout(this, model);
		this.rows = new Controller_rows(this, model);
		this.keyboard = new Controller_keyboard(this, model);
		this.zoom = new Controller_zoom(this, model);
		this.vol_edit = new Controller_vol_edit(this, model);
		this.freq_edit = new Controller_freq_edit(this, model);





		view.on_home_button_click = this.layout.on_home_button_click;
		view.on_settings_button_click = this.layout.on_settings_button_click;
		view.on_help_button_click = this.layout.on_help_button_click;
		view.on_vol_edit_button_click = this.layout.on_vol_edit_button_click;
		view.on_freq_edit_button_click = this.layout.on_freq_edit_button_click;
		view.on_dadj_edit_button_click = this.layout.on_dadj_edit_button_click;

		//Rows
		view.on_playback_change_enter = this.rows.on_playback_change_enter;
		view.on_playback_change = this.rows.on_playback_change;
		view.on_playback_click = this.rows.on_playback_click;

		view.on_vol_edit_change_enter = this.rows.on_vol_edit_change_enter;
		view.on_vol_edit_change = this.rows.on_vol_edit_change;
		view.on_vol_edit_click = this.rows.on_vol_edit_click;

		view.on_freq_edit_change_enter = this.rows.on_freq_edit_change_enter;
		view.on_freq_edit_change = this.rows.on_freq_edit_change;
		view.on_freq_edit_click = this.rows.on_freq_edit_click;

		view.on_dadj_edit_change_enter = this.rows.on_dadj_edit_change_enter;
		view.on_dadj_edit_change = this.rows.on_dadj_edit_change;
		view.on_dadj_edit_click = this.rows.on_dadj_edit_click;


		view.on_playback_all_button_click = this.rows.on_playback_all_button_click;
		view.on_vol_edit_all_button_click = this.rows.on_vol_edit_all_button_click;
		view.on_freq_edit_all_button_click = this.rows.on_freq_edit_all_button_click;
		view.on_dadj_edit_all_button_click = this.rows.on_dadj_edit_all_button_click;

		view.on_custom_selection_button_click = this.layout.on_custom_selection_button_click;

		//Zoom
		view.on_zoom_slider_set = this.zoom.on_zoom_slider_set;
		view.on_zoom_slider_wheel = this.zoom.on_zoom_slider_wheel;
		view.on_visual_wheel = this.zoom.on_visual_wheel;
		view.on_zoom_plus_button_click = this.zoom.on_zoom_plus_button_click;
		view.on_zoom_minus_button_click = this.zoom.on_zoom_minus_button_click;
		view.on_zoom_left_button_click = this.zoom.on_zoom_left_button_click;
		view.on_zoom_right_button_click = this.zoom.on_zoom_right_button_click;


		//Vol edit
		view.on_ve_shape_change = this.vol_edit.on_ve_shape_change;

		view.on_ve_amount_change = this.vol_edit.on_ve_amount_change;
		view.on_ve_center_change = this.vol_edit.on_ve_center_change;
		view.on_ve_width_change = this.vol_edit.on_ve_width_change;

		view.on_ve_random_click = this.vol_edit.on_ve_random_click;
		view.on_ve_mirror_click = this.vol_edit.on_ve_mirror_click;
		view.on_ve_randomize_click = this.vol_edit.on_ve_randomize_click;

		view.on_ve_apply_click = this.vol_edit.on_ve_apply_click;
		view.on_ve_reset_click = this.vol_edit.on_ve_reset_click;


		//Freq edit
		view.on_fe_shape_change = this.freq_edit.on_fe_shape_change;

		view.on_fe_amount_change = this.freq_edit.on_fe_amount_change;
		view.on_fe_center_change = this.freq_edit.on_fe_center_change;
		view.on_fe_width_change = this.freq_edit.on_fe_width_change;

		view.on_fe_random_click = this.freq_edit.on_fe_random_click;
		view.on_fe_mirror_click = this.freq_edit.on_fe_mirror_click;
		view.on_fe_randomize_click = this.freq_edit.on_fe_randomize_click;

		view.on_fe_apply_click = this.freq_edit.on_fe_apply_click;
		view.on_fe_reset_click = this.freq_edit.on_fe_reset_click;





		this.update_view();
	}



	selection_answer = (previous_value) => {
		switch(this.model.selection_mode){
			case SELECTION_MODE.ADD:
				return true;
			case SELECTION_MODE.REMOVE:
				return false;
			case SELECTION_MODE.TOGGLE:
				return !previous_value;
		}
	}




	//View ALL
	update_view(){

		this.view.update_layout(this.model.layout_left, this.model.layout_right, this.model.custom_selection);
		this.view.update_zoom(this.model.first_visible_track, this.model.last_visible_track);

		this.view.update_playback_tracks(this.model.playback_tracks);
		this.view.update_vol_edit_tracks(this.model.vol_edit_tracks);
		this.view.update_freq_edit_tracks(this.model.freq_edit_tracks);
		this.view.update_dadj_edit_tracks(this.model.dadj_edit_tracks);

		this.view.update_ve_shape(this.model.ve_shape);
		this.view.update_ve_random(this.model.ve_random, this.model.ve_mirror);
		this.view.update_ve_amount(this.model.ve_amount);
		this.view.update_ve_center(this.model.ve_center);
		this.view.update_ve_width(this.model.ve_width);
		this.view.update_ve_visual(this.model.ve_random, this.model.ve_mirror, this.model.vols_ve_shape_amounts, this.model.vols_ve_amounts, this.model.vol_edit_tracks);


		this.view.update_fe_shape(this.model.fe_shape);
		this.view.update_fe_random(this.model.fe_random, this.model.fe_mirror);
		this.view.update_fe_amount(this.model.fe_amount);
		this.view.update_fe_center(this.model.fe_center);
		this.view.update_fe_width(this.model.fe_width);
		this.view.update_fe_visual(this.model.fe_random, this.model.fe_mirror, this.model.freqs_fe_shape_amounts, this.model.freqs_fe_amounts, this.model.freq_edit_tracks);


		this.view.update_vol_visual(this.model.vols_base, this.model.vols_ve_amounts, this.model._last_played_note_dadj_vols);
		this.view.update_freq_visual(this.model.freqs_base, this.model.freqs_fe_amounts, this.model._last_played_note_dadj_freqs);

	}
}
