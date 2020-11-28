class View {
    constructor() {

        //View
        this.layout = new View_layout(this);
        this.rows = new View_rows(this);
        this.selection = new View_selection(this);
        this.zoom = new View_zoom(this);
        this.vol_visual = new View_vol_visual(this);
        this.freq_visual = new View_freq_visual(this);
        this.vol_edit = new View_vol_edit(this);
        this.freq_edit = new View_freq_edit(this);
        this.chroma_edit = new View_chroma_edit(this);
        this.settings = new View_settings(this);


        //Layout
        this.on_home_button_click = null;
        this.on_settings_button_click = null;
        this.on_vol_edit_button_click = null;
        this.on_freq_edit_button_click = null;
        this.on_chroma_edit_button_click = null;
        this.on_selection_button_click = null;
        this.on_help_button_click = null;

        //Rows
        this.on_playback_change_enter = null;
        this.on_playback_change = null;
        this.on_playback_click = null;

        this.on_vol_edit_change_enter = null;
        this.on_vol_edit_change = null;
        this.on_vol_edit_click = null;

        this.on_freq_edit_change_enter = null;
        this.on_freq_edit_change = null;
        this.on_freq_edit_click = null;

        this.on_chroma_edit_change_enter = null;
        this.on_chroma_edit_change = null;
        this.on_chroma_edit_click = null;


        this.on_playback_all_button_click = null;
        this.on_vol_edit_all_button_click = null;
        this.on_freq_edit_all_button_click = null;
        this.on_chroma_edit_all_button_click = null;

        this.on_custom_selection_button_click = null;


        //Selection
        this.on_selection_mode_change = null;
        this.on_selection_group_click = null;

        //Zoom
        this.on_zoom_slider_set = null;
        this.on_zoom_slider_wheel = null;
        this.on_visual_wheel = null;
        this.on_zoom_plus_button_click = null;
        this.on_zoom_minus_button_click = null;
        this.on_zoom_left_button_click = null;
        this.on_zoom_right_button_click = null;


        //Vol edit
        this.on_vol_visual_mousedown = null;

        this.on_ve_shape_change = null;

        this.on_ve_amount_change = null;
        this.on_ve_center_change = null;
        this.on_ve_width_change = null;

        this.on_ve_random_click = null;
        this.on_ve_mirror_click = null;
        this.on_ve_randomize_click = null;

        this.on_ve_apply_click = null;
        this.on_ve_reset_click = null;


        //Freq edit
        this.on_freq_visual_mousedown = null;
        this.on_freq_visual_doubleclick = null;

        this.on_fe_shape_change = null;

        this.on_fe_amount_change = null;
        this.on_fe_center_change = null;
        this.on_fe_width_change = null;

        this.on_fe_random_click = null;
        this.on_fe_mirror_click = null;
        this.on_fe_randomize_click = null;

        this.on_fe_apply_click = null;
        this.on_fe_reset_click = null;


        //Chroma
        this.on_chroma_freq_range_change = null;
        this.on_chroma_freq_coeff_change = null;
        this.on_chroma_vol_range_change = null;
        this.on_chroma_vol_coeff_change = null;
        this.on_chroma_freq_coeff_change = null;


        //settings
        this.on_settings_env_attack_change = null;
        this.on_settings_env_decay_time_change = null;
        this.on_settings_env_decay_vol_change = null;
        this.on_settings_env_release_change = null;

        this.on_settings_midi_split_note_change = null;
        this.on_settings_midi_octave_shift_change = null;
        this.on_settings_midi_a4_tuning_change = null;

        window.addEventListener("resize", () => {
            this.update_canvases();
        })

    }


    //UPDATE

    update_layout(layout_left, layout_right, custom_selection) {
        this.layout.set_layout(layout_left, layout_right, custom_selection);
    }

    update_zoom(first, last) {
        this.rows.update_zoom(first, last);
        this.zoom.update_zoom(first, last);
        this.vol_visual.update_zoom(first, last);
        this.freq_visual.update_zoom(first, last);
    }



    update_playback_tracks(values) {
        this.rows.update_playback_tracks(values);
        this.zoom.update_playback_tracks(values);
    }

    update_vol_edit_tracks(values) {
        this.rows.update_vol_edit_tracks(values);
        this.zoom.update_vol_edit_tracks(values);
    }

    update_freq_edit_tracks(values) {
        this.rows.update_freq_edit_tracks(values);
        this.zoom.update_freq_edit_tracks(values);
    }

    update_chroma_edit_tracks(values) {
        this.rows.update_chroma_edit_tracks(values);
        this.zoom.update_chroma_edit_tracks(values);
    }


    //Vol edit
    update_vol_edit(shape, amount, center, width, random, mirror, shape_amounts, amounts, vol_edit_tracks) {
        this.vol_edit.update_shape(shape);
        this.vol_edit.update_amount(amount);
        this.vol_edit.update_center(center);
        this.vol_edit.update_width(width);
        this.vol_edit.update_random(random, mirror);
        this.vol_edit.update_ve_visual(random, mirror, shape_amounts, amounts, vol_edit_tracks);
    }


    update_freq_edit(shape, amount, center, width, random, mirror, shape_amounts, amounts, freq_edit_tracks) {
        this.freq_edit.update_shape(shape);
        this.freq_edit.update_amount(amount);
        this.freq_edit.update_center(center);
        this.freq_edit.update_width(width);
        this.freq_edit.update_random(random, mirror);
        this.freq_edit.update_fe_visual(random, mirror, shape_amounts, amounts, freq_edit_tracks);
    }


    update_chroma(freq_range, freq_coeff, vol_range, vol_coeff, vol_amount){
        this.chroma_edit.update_freq_range(freq_range);
        this.chroma_edit.update_freq_coeff(freq_coeff);
        this.chroma_edit.update_vol_range(vol_range);
        this.chroma_edit.update_vol_coeff(vol_coeff);
        this.chroma_edit.update_vol_amount(vol_amount);
    }



    update_selection(mode, selected_group){
        this.selection.update_selection_mode(mode);
        this.selection.update_selected_group(selected_group);
    }





    update_vol_visual(base, ve, chroma) {
        this.vol_visual.update_values(base, ve, chroma);
    }

    update_freq_visual(base, ve, chroma) {
        this.freq_visual.update_values(base, ve, chroma);
    }

    update_settings_env(attack, decay_time, decay_vol, release){
        this.settings.update_env_attack(attack);
        this.settings.update_env_decay_time(decay_time);
        this.settings.update_env_decay_vol(decay_vol);
        this.settings.update_env_release(release);
    }
    update_settings_midi(split_note, octave_shift, a4_tuning){
        this.settings.update_midi_split_note(split_note);
        this.settings.update_midi_octave_shift(octave_shift);
        this.settings.update_midi_a4_tuning(a4_tuning);
    }

    update_canvases() {
        this.vol_edit.update_canvases();
        this.freq_edit.update_canvases();
        this.chroma_edit.update_canvases();
        this.vol_visual.vol_scale.update();
        this.freq_visual.freq_scale.update();
    }
}
