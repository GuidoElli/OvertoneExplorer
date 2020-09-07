class Knob{
	constructor(canvas, min_value, max_value, default_value, central_value) {

		this.canvas = canvas;
		this.value = null;
      
      this.min_value = min_value ? min_value : 0;
      this.max_value = max_value ? max_value : 1;
		this.default_value = default_value;
		this.central_value = central_value;

		//Events
		this.on_change = null;
		
		//default parameters
		this.total_angle = 270;
		this.background_color = "#707070";
		this.inactive_color = "#505050";
		this.light_lines_color = "#303030";
		this.line_color = "#000000";
		this.text_color = "#e2e2e2";
		this.interval_color = "#ececec";
		
		this.canvas.style.background_color = this.background_color;

		this.old_mouse_y = null;
		this.new_mouse_y = null;
		this.old_value = null;
		this.editing = false;
		this.clickable = true;

		document.addEventListener("keydown", (e) => {
			if(e.key === "Control"){
				this.old_value = this.value;
				this.old_mouse_y = this.new_mouse_y;
			}
		}, true)
		document.addEventListener("keyup", (e) => {
			if(e.key === "Control"){
				if(this.editing){
					this.old_value = this.value;
					this.old_mouse_y = this.new_mouse_y;
				}
			}
		}, true)
		
		canvas.addEventListener("mousedown", (e) => {
			if(this.clickable){
				this.editing = true;
				this.old_value = this.value;
				this.old_mouse_y = e.pageY;
				this.new_mouse_y = e.pageY;
			}
		})

		document.addEventListener("mousemove", (e) => {
			if(this.editing){
				this.new_mouse_y = (e.pageY) ? e.pageY : this.new_mouse_y;
				let pixel_diff = this.old_mouse_y - this.new_mouse_y;
				let value_diff;
				if(CTRL_DOWN){
					value_diff = pixel_diff * (this.max_value - this.min_value) / KNOB_MAX_PIXEL_FINE;
				}else{
					value_diff = pixel_diff * (this.max_value - this.min_value) / KNOB_MAX_PIXEL;
				}

				let new_value = this.old_value + value_diff;

				if(new_value < this.min_value){
					new_value = this.min_value;
				}else if(new_value > this.max_value){
					new_value = this.max_value;
				}
				
				this.on_change(new_value);
			}
		})

		document.addEventListener("mouseup", () => {
			if(this.editing){
				this.editing = false;
			}
		})

		canvas.addEventListener("dblclick", () => {
			if(this.default_value !== null){
				this.editing = false;
				this.on_change(this.default_value);
			}
		})
	}

	resize(){
		let b = this.canvas.parentNode.getBoundingClientRect();
		let width = b.right - b.left;
		let height = b.bottom - b.top;

		let dim = Math.min(height,width);

		this.canvas.width = dim;
		this.canvas.height = dim;

	}

	update() {
      this.resize();

		let h = this.canvas.height;
		let w = this.canvas.width;
		let ctx = this.canvas.getContext("2d");
		let radius = w / 2.1;
		let pointer_w = radius / 10;
		let interval_w = radius / 3;
		let external_circle_w = radius / 20;

		
		//useful variables
		let min_angle = (90 + (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		let max_angle = (90 - (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		let current_angle = min_angle + (this.value - this.min_value) / (this.max_value - this.min_value) * this.total_angle / 360 * 2 * Math.PI;
		
		
		ctx.clearRect(0, 0, w, h);

		//background
		ctx.fillStyle = this.background_color;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		//interval
		ctx.strokeStyle = (this.clickable) ? this.interval_color : this.inactive_color;
		ctx.lineJoin = "bevel";
		ctx.beginPath();
		ctx.lineWidth = interval_w;
		if (this.central_value !== null) {
			ctx.arc(w / 2, h / 2, radius - interval_w / 2, Math.min(current_angle, 1.5 * Math.PI), Math.max(current_angle, 1.5 * Math.PI), false);
		}
		else {
			ctx.arc(w / 2, h / 2, radius - interval_w / 2, min_angle, current_angle, false);
		}
		ctx.stroke();
		
		//internal circle
		ctx.strokeStyle = this.light_lines_color;
		ctx.lineWidth = external_circle_w / 3;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - interval_w, 0, 2 * Math.PI, false);
		ctx.stroke();

		//pointer
		ctx.strokeStyle = this.line_color;
		ctx.lineJoin = "round";
		ctx.lineWidth = pointer_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - interval_w - pointer_w / 2, current_angle, current_angle, false);
		ctx.lineTo(w / 2, h / 2);
		ctx.closePath();
		ctx.stroke();

		//central value point
		if (this.central_value !== null) {
			ctx.strokeStyle = this.light_lines_color;
			ctx.lineWidth = radius / 30;
			ctx.beginPath();
			ctx.moveTo(w / 2, h / 2 - radius);
			ctx.lineTo(w / 2, h / 2 - radius + interval_w);
			ctx.closePath();
			ctx.stroke();
		}

		//external circle
		ctx.strokeStyle = this.line_color;
		ctx.lineWidth = external_circle_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - external_circle_w / 2, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.lineWidth = interval_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - interval_w / 2, max_angle, min_angle, false);
		ctx.stroke();
		
   }
}
