class View_vol_visual {
	constructor(view) {
		this.v = view;
		this.first_visible_item = null;
		this.last_visible_item = null;

		this.vv_box = $(".visual_vol_box")[0];

		//Cloning
		let first_vv_item = $(".visual_vol_item_section")[0];
		let content = first_vv_item.innerHTML;
		this.vv_box.innerHTML = "";
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			let clone = first_vv_item.cloneNode();
			clone.innerHTML = content;
			this.vv_box.append(clone);
		}

		this.sections = $(".visual_vol_item_section");
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			this.sections[i].addEventListener("mousewheel", (e) => {
				this.v.on_visual_wheel(i, e.wheelDelta > 0);
			})
			this.sections[i].addEventListener("mousedown", (e) => {
				this.v.on_vol_visual_mousedown(i, e.pageY);
			})
		}

		this.vv_main_bars = $(".vv_main_bar");
		this.vv_ve_side_bars = $(".vv_ve_side_bar");
		this.vv_dadj_side_bars = $(".vv_dadj_side_bar");
		this.vv_values = $(".visual_vol_value_box");

		this.vol_scale_canvas = $(".vol_scale_canvas")[0];
		this.vol_scale = new Vol_scale(this.vol_scale_canvas);

	}

	update_values = (base, ve, dadj) => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {

			//main bar
			let tot = base[i] + ve[i] + dadj[i];
			tot = (tot > MAX_DB) ? MAX_DB : tot;
			tot = (tot < MIN_DB) ? MIN_DB : tot;
			this.vv_main_bars[i].style.top = Math.abs((MAX_DB - tot) / (MAX_DB - MIN_DB)) * 100 + "%";
			this.vv_main_bars[i].style.height = Math.abs((MIN_DB - tot) / (MAX_DB - MIN_DB)) * 100 + "%";

			if(this.last_visible_item - this.first_visible_item + 1 > MAX_TRACKS_TO_SHOW_LABELS){
				this.vv_values[i].innerHTML = "";
			}else{
				this.vv_values[i].innerHTML = tot.toFixed(1);
			}

			//ve side bar
			this.vv_ve_side_bars[i].style.top = "";
			this.vv_ve_side_bars[i].style.bottom = "";
			if(ve[i] > 0){
				this.vv_ve_side_bars[i].style.bottom = Math.abs((MIN_DB - base[i]) / (MAX_DB - MIN_DB)) * 100 + "%";
			}else{
				this.vv_ve_side_bars[i].style.top = Math.abs((MAX_DB - base[i]) / (MAX_DB - MIN_DB)) * 100 + "%";
			}
			if(base[i] + ve[i] > MAX_DB){
				this.vv_ve_side_bars[i].style.height = Math.abs((MAX_DB - base[i]) / (MAX_DB - MIN_DB)) * 100 + "%";
			}else if(base[i] + ve[i] < MIN_DB){
				this.vv_ve_side_bars[i].style.height = Math.abs((MIN_DB - base[i]) / (MAX_DB - MIN_DB)) * 100 + "%";
			}else{
				this.vv_ve_side_bars[i].style.height = Math.abs(ve[i] / (MAX_DB - MIN_DB)) * 100 + "%";
			}

			//dadj side bar
			let dadj_begin = base[i] + ve[i];
			let dadj_end = dadj_begin + dadj[i];
			let max = 0;
			let min = 0;
			this.vv_dadj_side_bars[i].style.bottom = "";
			this.vv_dadj_side_bars[i].style.top = "";

			min = (dadj_begin < MIN_DB) ? MIN_DB : dadj_begin;
			min = (dadj_begin > MAX_DB) ? MAX_DB : min;
			max = (dadj_end < MIN_DB) ? MIN_DB : dadj_end;
			max = (dadj_end > MAX_DB) ? MAX_DB : max;

			if(dadj[i] < 0){
				let temp = min;
				min = max;
				max = temp;
			}

			this.vv_dadj_side_bars[i].style.top = Math.abs((MAX_DB - max) / (MAX_DB - MIN_DB)) * 100 + "%";
			this.vv_dadj_side_bars[i].style.height = Math.abs((min - max) / (MAX_DB - MIN_DB)) * 100 + "%";

		}
	}

	update_zoom(first, last) {

		this.first_visible_item = first;
		this.last_visible_item = last;
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			if (i < first || i > last) {
				this.sections[i].classList.toggle("hidden", true);
			} else {
				this.sections[i].classList.toggle("hidden", false);
				this.sections[i].style.width = 100 / (last - first + 1) + "%";
			}
		}
	}
}
