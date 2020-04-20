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
		}

		this.vf_main_bars = $(".vf_main_bar");

	}

	////////////////////
	update_values = (base, fe, dadj) => {
		for (let i = 0; i < TOTAL_TRACKS; i++) {
			let tot = base[i] + fe[i] + dadj[i];
			tot = (tot > MAX_MIN_CENTS) ? MAX_MIN_CENTS : tot;
			tot = (tot < -MAX_MIN_CENTS) ? -MAX_MIN_CENTS : tot;


			this.vf_main_bars[i].style.height = Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			if(tot >= 0){
				this.vf_main_bars[i].style.top = 50 - Math.abs(tot/MAX_MIN_CENTS/2*100) + "%";
			}else{
				this.vf_main_bars[i].style.top = "50%";
			}

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
