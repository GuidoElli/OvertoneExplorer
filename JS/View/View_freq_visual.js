class View_freq_visual {
	constructor(view) {
		this.v = view;
		this.first_visible_item = null;
		this.last_visible_item = null;

		this.vf_box = $(".visual_freq_box")[0];

		//Cloning
		var first_vf_item = $(".visual_freq_item_section")[0];
		var content = first_vf_item.innerHTML;
		this.vf_box.innerHTML = "";
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			var clone = first_vf_item.cloneNode();
			clone.innerHTML = content;
			this.vf_box.append(clone);
		}


		this.sections = $(".visual_freq_item_section");
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			this.sections[i].addEventListener("mousewheel", (e) => {
				this.v.on_visual_wheel(i, e.wheelDelta > 0);
			})
			this.sections[i].addEventListener("mousedown", (e) => {
				this.v.on_freq_visual_mousedown(i, e.pageY);
			})
		}

		this.vf_main_bars = $(".vf_main_bar");
		this.vf_fe_side_bars = $(".vf_fe_side_bar");
		this.vf_dadj_side_bars = $(".vf_dadj_side_bar");

	}

	update_values = (base, fe, dadj) => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {

			//main bar
			let tot = base[i] + fe[i] + dadj[i];
			tot = (tot > MAX_MIN_CENTS) ? MAX_MIN_CENTS : tot;
			tot = (tot < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : tot;
			this.vf_main_bars[i].style.height = Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			if(tot >= 0){
				this.vf_main_bars[i].style.top = 50 - Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			}else{
				this.vf_main_bars[i].style.top = "50%";
			}

			//fe side bar
			this.vf_fe_side_bars[i].style.top = "";
			this.vf_fe_side_bars[i].style.bottom = "";
			if(fe[i] > 0){
				this.vf_fe_side_bars[i].style.bottom = Math.abs((-MAX_MIN_CENTS - base[i]) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			}else{
				this.vf_fe_side_bars[i].style.top = Math.abs((MAX_MIN_CENTS - base[i]) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			}
			if(base[i] + fe[i] > MAX_MIN_CENTS){
				this.vf_fe_side_bars[i].style.height = Math.abs((MAX_MIN_CENTS - base[i]) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			}else if(base[i] + fe[i] < -MAX_MIN_CENTS){
				this.vf_fe_side_bars[i].style.height = Math.abs((-MAX_MIN_CENTS - base[i]) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			}else{
				this.vf_fe_side_bars[i].style.height = Math.abs(fe[i] / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			}

			//dadj side bar
			let dadj_begin = base[i] + fe[i];
			let dadj_end = dadj_begin + dadj[i];
			let max = 0;
			let min = 0;
			this.vf_dadj_side_bars[i].style.bottom = "";
			this.vf_dadj_side_bars[i].style.top = "";

			min = (dadj_begin < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : dadj_begin;
			min = (dadj_begin > MAX_MIN_CENTS) ? MAX_MIN_CENTS : min;
			max = (dadj_end < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : dadj_end;
			max = (dadj_end > MAX_MIN_CENTS) ? MAX_MIN_CENTS : max;

			if(dadj[i] < 0){
				let temp = min;
				min = max;
				max = temp;
			}

			this.vf_dadj_side_bars[i].style.top = Math.abs((MAX_MIN_CENTS - max) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			this.vf_dadj_side_bars[i].style.height = Math.abs((min - max) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";

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
