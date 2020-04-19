class View {
    constructor() {

        //View
        this.layout = new View_layout(this);
        this.rows = new View_rows(this);
        this.keyboard = new View_keyboard(this);
        this.zoom = new View_zoom(this);
        this.vol_visual = new View_vol_visual(this);
        this.vol_edit = new View_vol_edit(this);


        //Layout
        this.on_home_button_click = null;
        this.on_settings_button_click = null;
        this.on_vol_edit_button_click = null;
        this.on_freq_edit_button_click = null;
        this.on_dadj_edit_button_click = null;
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

        this.on_dadj_edit_change_enter = null;
        this.on_dadj_edit_change = null;
        this.on_dadj_edit_click = null;


        this.on_playback_all_button_click = null;
        this.on_vol_edit_all_button_click = null;
        this.on_freq_edit_all_button_click = null;
        this.on_dadj_edit_all_button_click = null;

        this.on_custom_selection_button_click = null;

        //Zoom
        this.on_zoom_slider_set = null;
        this.on_zoom_slider_wheel = null;
        this.on_visual_wheel = null;
        this.on_zoom_plus_button_click = null;
        this.on_zoom_minus_button_click = null;
        this.on_zoom_left_button_click = null;
        this.on_zoom_right_button_click = null;


        //Vol edit
        this.on_ve_shape_change = null;

        this.on_ve_amount_change = null;
        this.on_ve_center_change = null;
        this.on_ve_width_change = null;

        this.on_ve_random_click = null;
        this.on_ve_mirror_click = null;
        this.on_ve_randomize_click = null;

        this.on_ve_apply_click = null;
        this.on_ve_reset_click = null;


        window.addEventListener("resize", () => {
            this.update_canvases();
        })

    }


    //UPDATE

    update_layout(layout_left, layout_right, custom_selection) {
        this.layout.set_layout(layout_left, layout_right, custom_selection);
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

    update_dadj_edit_tracks(values) {
        this.rows.update_dadj_edit_tracks(values);
        this.zoom.update_dadj_edit_tracks(values);
    }

    update_zoom(first, last) {
        this.rows.update_zoom(first, last);
        this.zoom.update_zoom(first, last);
        this.vol_visual.update_zoom(first, last);
    }


    //Vol edit
    update_ve_shape(shape) {
        this.vol_edit.update_shape(shape);
    }

    update_ve_amount(amount) {
        this.vol_edit.update_amount(amount);
    }

    update_ve_center(center) {
        this.vol_edit.update_center(center);
    }

    update_ve_width(width) {
        this.vol_edit.update_width(width);
    }

    update_ve_random(random, mirror, random_values) {
        this.vol_edit.update_random(random, mirror);
    }

    update_ve_visual(random, mirror, shape_amounts, amounts) {
        this.vol_edit.update_ve_visual(random, mirror, shape_amounts, amounts);
    }


    update_vol_visual(base, ve, dadj) {
        this.vol_visual.update_values(base, ve, dadj);
    }


    update_canvases() {
        this.vol_edit.update_canvases();
    }
}
