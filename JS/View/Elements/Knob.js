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
		
		//Customization
		this.decimals = 0;
		this.unit_of_measurement = "";
		this.display_value = true;

		//default parameters
		this.total_angle = 220;
		this.background_color = "#858585";
		this.light_lines_color = "#505050";
		this.line_color = "#111111";
		this.text_color = "#e2e2e2";
		this.interval_color = "#ececec";


		this.old_mouse_y = null;
		this.new_mouse_y = null;
		this.old_value = null;
		this.editing = false;

		canvas.addEventListener("mousedown", (e) => {
			this.editing = true;
			this.old_value = this.value;
			this.old_mouse_y = e.pageY;
		})
		document.addEventListener("mousemove", (e) => {
			if(this.editing){
				this.new_mouse_y = e.pageY;
				var pixel_diff = this.old_mouse_y - this.new_mouse_y;
				var value_diff = pixel_diff * (this.max_value - this.min_value) / KNOB_MAX_PIXEL;

				var new_value = this.old_value + value_diff;

				if(new_value < this.min_value){
					new_value = this.min_value;
				}else if(new_value > this.max_value){
					new_value = this.max_value;
				}
				
				this.on_change(new_value);
			}
		})
		document.addEventListener("mouseup", (e) => {
			if(this.editing){
				this.editing = false;
			}
		})

		canvas.addEventListener("dblclick", (e) => {
			if(this.default_value !== null){
				this.editing = false;
				this.on_change(this.default_value);
			}
		})
	}

	update() {
      var b = this.canvas.parentNode.getBoundingClientRect();
      var width = b.right - b.left;
		var height = b.bottom - b.top;
		
		var dim = Math.min(height,width);

      this.canvas.width = dim;
		this.canvas.height = dim;

		var h = this.canvas.height;
		var w = this.canvas.width;
		var ctx = this.canvas.getContext("2d");
		var radius = dim / 2;
		var external_circle_w = radius / 15;
		var pointer_w = radius / 10;
		var interval_w = radius / 7;
		var thin_lines_w = radius / 30;

		
		//useful variables
		var min_angle = (90 + (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		var max_angle = (90 - (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		var current_angle = min_angle + (this.value - this.min_value) / (this.max_value - this.min_value) * this.total_angle / 360 * 2 * Math.PI;
		
		
		ctx.clearRect(0, 0, w, h);

		//background
		ctx.fillStyle = this.background_color;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - external_circle_w / 2, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		//interval
		ctx.strokeStyle = this.interval_color;
		ctx.lineJoin = "bevel";
		ctx.beginPath();
		ctx.lineWidth = interval_w;
		if (this.central_value !== null) {
			ctx.arc(w / 2, h / 2, radius - external_circle_w - interval_w / 2, Math.min(current_angle, 1.5 * Math.PI), Math.max(current_angle, 1.5 * Math.PI), false);
		}
		else {
			ctx.arc(w / 2, h / 2, radius - external_circle_w - interval_w / 2, min_angle, current_angle, false);
		}
		ctx.stroke();
		
		//internal circle
		ctx.strokeStyle = this.light_lines_color;
		ctx.lineWidth = thin_lines_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - external_circle_w - interval_w - thin_lines_w / 2 - 1, 0, 2 * Math.PI, false);
		ctx.stroke();

		//pointer
		ctx.strokeStyle = this.line_color;
		ctx.lineJoin = "round";
		ctx.lineWidth = pointer_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - external_circle_w - interval_w - pointer_w / 2 - 1, current_angle, current_angle, false);
		ctx.lineTo(w / 2, h / 2);
		ctx.closePath();
		ctx.stroke();

		//central value point
		if (this.central_value !== null) {
			ctx.strokeStyle = this.light_lines_color;
			ctx.lineWidth = thin_lines_w;
			ctx.beginPath();
			ctx.moveTo(w / 2, h / 2 - radius + external_circle_w);
			ctx.lineTo(w / 2, h / 2 - radius + external_circle_w + interval_w + 1);
			ctx.closePath();
			ctx.stroke();
		}

		//external circle
		ctx.strokeStyle = this.line_color;
		ctx.lineWidth = external_circle_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - external_circle_w / 2 - 1, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.lineWidth = external_circle_w + interval_w + thin_lines_w;
		ctx.beginPath();
		ctx.arc(w / 2, h / 2, radius - (external_circle_w + interval_w + thin_lines_w) / 2 - 1, max_angle, min_angle, false);
		ctx.stroke();
		
   }


////////////
   get_value(){
      var value_to_return = null;
      if(this.value >= 0){
         if(Math.abs((this.value*10000) % (this.step*10000)) < (this.step / 2 * 10000)){
            value_to_return = this.step * Math.floor(this.value / this.step);
         }else{
            value_to_return = this.step * Math.ceil(this.value / this.step);
         }
      }else{
         if(Math.abs((this.value*10000) % (this.step*10000)) < (this.step / 2 * 10000)){
            value_to_return = this.step * Math.ceil(this.value / this.step);
         }else{
            value_to_return = this.step * Math.floor(this.value / this.step);
         }
      }
      return value_to_return.toFixed(this.fixed_points);
   }
}
