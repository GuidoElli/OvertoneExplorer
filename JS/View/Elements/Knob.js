class Knob{
	constructor(canvas, min_value, max_value, default_value) {

		this.canvas = canvas;
		this.value = null;
      
      this.min_value = min_value ? min_value : 0;
      this.max_value = max_value ? max_value : 1;
		this.default_value = default_value ? default_value : min_value;
		
		//Customization
		this.decimals = 0;
		this.unit_of_measurement = "";
		this.display_value = true;

		//default parameters
		this.total_angle = 270;
		this.external_circle_w = 1;
		this.pointer_w = this.radius / 10;
		this.interval_w = this.radius / 5;
		this.thin_lines_w = 1;
		this.background_color = "#858585";
		this.light_lines_color = "#505050";
		this.line_color = "#111111";
		this.text_color = "#e2e2e2";
		this.interval_color = "#ececec";
	}

	update() {
      var b = this.canvas.parentNode.getBoundingClientRect();
      var width = b.right - b.left;
      var height = b.bottom - b.top;

      this.canvas.width = Math.min(height,width);
		this.canvas.height = Math.min(height,width);

      /*
		this.canvas.width = Math.min(h,w);
		this.canvas.height = Math.min(h,w);
		this.h = this.canvas.height;
		this.w = this.canvas.width;
		var ctx = this.canvas.getContext("2d");
		ctx.clearRect(0, 0, this.w, this.h);
		this.radius = (this.show_values_labels) ? (this.w * 0.35) : (this.w * 0.5);
		this.external_circle_w = this.radius / 10;
		this.pointer_w = this.radius / 10;
		this.interval_w = this.radius / 5;

		//useful variables
		var min_angle = (90 + (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		var max_angle = (90 - (360 - this.total_angle) / 2) / 360 * 2 * Math.PI;
		var current_angle = min_angle + (this.value - this.min_value) / (this.max_value - this.min_value) * this.total_angle / 360 * 2 * Math.PI;
		
		//background
		ctx.fillStyle = this.background_color;
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w / 2, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		
		//interval
		ctx.strokeStyle = this.interval_color;
		ctx.lineJoin = "bevel";
		ctx.beginPath();
		ctx.lineWidth = this.interval_w;
		if (this.central_value !== null) {
			ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w - this.interval_w / 2, Math.min(current_angle, 1.5 * Math.PI), Math.max(current_angle, 1.5 * Math.PI), false);
		}
		else {
			ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w - this.interval_w / 2, min_angle, current_angle, false);
		}
		ctx.stroke();
		
		//internal circle
		ctx.strokeStyle = this.light_lines_color;
		ctx.lineWidth = this.thin_lines_w;
		ctx.beginPath();
		ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w - this.interval_w - this.thin_lines_w / 2 - 1, 0, 2 * Math.PI, false);
		ctx.stroke();

		//pointer
		ctx.strokeStyle = this.line_color;
		ctx.lineJoin = "round";
		ctx.lineWidth = this.pointer_w;
		ctx.beginPath();
		ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w - this.interval_w - this.pointer_w / 2 - 1, current_angle, current_angle, false);
		ctx.lineTo(this.w / 2, this.h / 2);
		ctx.closePath();
		ctx.stroke();

		//central value point
		if (this.central_value !== null) {
			ctx.strokeStyle = this.light_lines_color;
			ctx.lineWidth = this.thin_lines_w;
			ctx.beginPath();
			ctx.moveTo(this.w / 2, this.h / 2 - this.radius + this.external_circle_w);
			ctx.lineTo(this.w / 2, this.h / 2 - this.radius + this.external_circle_w + this.interval_w + 1);
			ctx.closePath();
			ctx.stroke();
		}

		//external circle
		ctx.strokeStyle = this.line_color;
		ctx.lineWidth = this.external_circle_w;
		ctx.beginPath();
		ctx.arc(this.w / 2, this.h / 2, this.radius - this.external_circle_w / 2 - 1, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.lineWidth = this.external_circle_w + this.interval_w + this.thin_lines_w;
		ctx.beginPath();
		ctx.arc(this.w / 2, this.h / 2, this.radius - (this.external_circle_w + this.interval_w + this.thin_lines_w) / 2 - 1, max_angle, min_angle, false);
		ctx.stroke();
*/
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
