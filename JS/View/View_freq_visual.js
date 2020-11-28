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
			this.sections[i].addEventListener("dblclick", (e) => {
				this.v.on_freq_visual_doubleclick(i);
			})
		}

		this.vf_main_bars = $(".vf_main_bar");
		this.vf_fe_side_bars = $(".vf_fe_side_bar");
		this.vf_chroma_side_bars = $(".vf_chroma_side_bar");
		this.vf_values = $(".visual_freq_value_box");

		this.freq_scale_canvas = $(".freq_scale_canvas")[0];
		this.freq_scale = new Freq_scale(this.freq_scale_canvas);

	}

	update_values = (base, fe, chroma) => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {

			//main bar
			let tot = base[i] + fe[i] + chroma[i];
			tot = (tot > MAX_MIN_CENTS) ? MAX_MIN_CENTS : tot;
			tot = (tot < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : tot;
			this.vf_main_bars[i].style.height = Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			if(tot >= 0){
				this.vf_main_bars[i].style.top = 50 - Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			}else{
				this.vf_main_bars[i].style.top = "50%";
			}

			if(this.last_visible_item - this.first_visible_item + 1 > MAX_TRACKS_TO_SHOW_LABELS){
				this.vf_values[i].innerHTML = "";
			}else{
				let str = (tot>0) ? "+" : "";
				str += tot.toFixed(0);
				this.vf_values[i].innerHTML = str;
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

			//chroma side bar
			let chroma_begin = base[i] + fe[i];
			let chroma_end = chroma_begin + chroma[i];
			let max = 0;
			let min = 0;
			this.vf_chroma_side_bars[i].style.bottom = "";
			this.vf_chroma_side_bars[i].style.top = "";

			min = (chroma_begin < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : chroma_begin;
			min = (chroma_begin > MAX_MIN_CENTS) ? MAX_MIN_CENTS : min;
			max = (chroma_end < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : chroma_end;
			max = (chroma_end > MAX_MIN_CENTS) ? MAX_MIN_CENTS : max;

			if(chroma[i] < 0){
				let temp = min;
				min = max;
				max = temp;
			}

			this.vf_chroma_side_bars[i].style.top = Math.abs((MAX_MIN_CENTS - max) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";
			this.vf_chroma_side_bars[i].style.height = Math.abs((min - max) / (MAX_MIN_CENTS - -MAX_MIN_CENTS)) * 100 + "%";

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
