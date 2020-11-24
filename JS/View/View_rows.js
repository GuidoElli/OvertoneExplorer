class View_rows {
    constructor(view) {

        this.v = view;

        let first_playback_row_item_section;
        first_playback_row_item_section = $(".row_playback_box .row_item_section")[0];
        $(".row_playback_box").empty();
        for (let i = 0; i < TOTAL_TRACKS; i++) {
            let clone = first_playback_row_item_section.cloneNode();
            clone.append(first_playback_row_item_section.firstElementChild.cloneNode());
            clone.firstElementChild.innerHTML = i;
            $(".row_playback_box").append(clone);
        }
        let row = $(".row_playback_box")[0];
        let sections = $(".row_playback_box .row_item_section");
        let buttons = $(".row_playback_item");
        this.playback_row = new Row(row, sections, buttons);
        this.playback_row.on_change_enter = () => {
            this.v.on_playback_change_enter();
        }
        this.playback_row.on_change = (first, last) => {
            this.v.on_playback_change(first, last);
        }
        this.playback_row.on_click = (value) => {
            this.v.on_playback_click(value);
        }


        let first_vol_edit_row_item_section = $(".row_vol_edit_box .row_item_section")[0];
        $(".row_vol_edit_box").empty();
        for (let i = 0; i < TOTAL_TRACKS; i++) {
            let clone = first_vol_edit_row_item_section.cloneNode();
            clone.append(first_vol_edit_row_item_section.firstElementChild.cloneNode());
            clone.firstElementChild.innerHTML = i;
            $(".row_vol_edit_box").append(clone);
        }
        row = $(".row_vol_edit_box")[0];
        sections = $(".row_vol_edit_box .row_item_section");
        buttons = $(".row_vol_edit_item");
        this.vol_edit_row = new Row(row, sections, buttons);
        this.vol_edit_row.on_change_enter = () => {
            this.v.on_vol_edit_change_enter();
        }
        this.vol_edit_row.on_change = (first, last) => {
            this.v.on_vol_edit_change(first, last);
        }
        this.vol_edit_row.on_click = (value) => {
            this.v.on_vol_edit_click(value);
        }


        let first_freq_edit_row_item_section = $(".row_freq_edit_box .row_item_section")[0];
        $(".row_freq_edit_box").empty();
        for (let i = 0; i < TOTAL_TRACKS; i++) {
            let clone = first_freq_edit_row_item_section.cloneNode();
            clone.append(first_freq_edit_row_item_section.firstElementChild.cloneNode());
            clone.firstElementChild.innerHTML = i;
            $(".row_freq_edit_box").append(clone);
        }
        row = $(".row_freq_edit_box")[0];
        sections = $(".row_freq_edit_box .row_item_section");
        buttons = $(".row_freq_edit_item");
        this.freq_edit_row = new Row(row, sections, buttons);
        this.freq_edit_row.on_change_enter = () => {
            this.v.on_freq_edit_change_enter();
        }
        this.freq_edit_row.on_change = (first, last) => {
            this.v.on_freq_edit_change(first, last);
        }
        this.freq_edit_row.on_click = (value) => {
            this.v.on_freq_edit_click(value);
        }


        let first_dadj_edit_row_item_section = $(".row_dadj_edit_box .row_item_section")[0];
        $(".row_dadj_edit_box").empty();
        for (let i = 0; i < TOTAL_TRACKS; i++) {
            let clone = first_dadj_edit_row_item_section.cloneNode();
            clone.append(first_dadj_edit_row_item_section.firstElementChild.cloneNode());
            clone.firstElementChild.innerHTML = i;
            $(".row_dadj_edit_box").append(clone);
        }
        row = $(".row_dadj_edit_box")[0];
        sections = $(".row_dadj_edit_box .row_item_section");
        buttons = $(".row_dadj_edit_item");
        this.dadj_edit_row = new Row(row, sections, buttons);
        this.dadj_edit_row.on_change_enter = () => {
            this.v.on_dadj_edit_change_enter();
        }
        this.dadj_edit_row.on_change = (first, last) => {
            this.v.on_dadj_edit_change(first, last);
        }
        this.dadj_edit_row.on_click = (value) => {
            this.v.on_dadj_edit_click(value);
        }


    }


    update_playback_tracks = (values) => {
        this.playback_row.update_values(values);
    }
    update_vol_edit_tracks = (values) => {
        this.vol_edit_row.update_values(values);
    }
    update_freq_edit_tracks = (values) => {
        this.freq_edit_row.update_values(values);
    }
    update_dadj_edit_tracks = (values) => {
        this.dadj_edit_row.update_values(values);
    }

    update_zoom = (first, last) => {
        this.playback_row.update_visible_items(first, last);
        this.vol_edit_row.update_visible_items(first, last);
        this.freq_edit_row.update_visible_items(first, last);
        this.dadj_edit_row.update_visible_items(first, last);
    }


}
