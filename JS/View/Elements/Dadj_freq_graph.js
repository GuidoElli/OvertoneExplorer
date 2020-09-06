class Dadj_freq_graph {
	constructor(canvas) {

		this.canvas = canvas;
		this.coeff = 0;
		this.range = 0;

		this.background_color = "#111111";

		this.update(500, -0.9);
	}


	resize(){
		let b = this.canvas.parentNode.getBoundingClientRect();
		let width = b.right - b.left;
		let height = b.bottom - b.top;

		this.canvas.width = width-3;
		this.canvas.height = height-3;
	}

	update(){

		this.resize();

		let h = this.canvas.height;
		let w = this.canvas.width;
		let ctx = this.canvas.getContext("2d");

		ctx.clearRect(0, 0, w, h);

		//background
		ctx.fillStyle = this.background_color;
		ctx.fillRect(0, 0, w, h);

		//axis x
		ctx.strokeStyle = "#bbbbbb";
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(0, h/2);
		ctx.lineTo(w, h/2);
		ctx.stroke();
		//arrow
		ctx.beginPath();
		ctx.moveTo(w, h/2);
		ctx.lineTo(w-10, h/2-10);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(w, h/2);
		ctx.lineTo(w-10, h/2+10);
		ctx.stroke();


		//axis y
		ctx.beginPath();
		ctx.moveTo(w/2, 0);
		ctx.lineTo(w/2, w);
		ctx.stroke();
		//arrow
		ctx.beginPath();
		ctx.moveTo(w/2, 0);
		ctx.lineTo(w/2-10, 10);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(w/2, 0);
		ctx.lineTo(w/2+10, 10);
		ctx.stroke();

		//base line
		ctx.strokeStyle = "grey";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.moveTo(w, 0);
		ctx.lineTo(0, h);
		ctx.stroke();

		//function
		let ext = 0.1;
		let pixel_range_x = w / (2 * (ext + 1)) / MAX_DADJ_FREQ_RANGE * this.range;
		let pixel_range_y = h / (2 * (ext + 1)) / MAX_DADJ_FREQ_RANGE * this.range;
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2.5;
		ctx.beginPath();
		ctx.moveTo(0, h);
		for(let x = 0; x < w; x++){
			if(x < w/2 - pixel_range_x){
				ctx.lineTo(x, h * (1 - x/w));
			}else if(x < w/2 + pixel_range_x){
				let x_01 = Math.abs(w/2 - x) / pixel_range_x;
				let exp;
				if(this.coeff >= 0) {
					exp = 1 / (1 - this.coeff + 0.0001);
				}else{
					exp = 1 + this.coeff + 0.0001;
				}
				let y_01 = (Math.pow(x_01, exp) - x_01);
				let h_final;
				if (x < w/2){
					h_final = h * (1 - x/w) + y_01 * pixel_range_y;
				}else{
					h_final = h * (1 - x/w) - y_01 * pixel_range_y;
				}
				ctx.lineTo(x, h_final);
			}else{
				ctx.lineTo(x, h * (1 - x/w));
			}
		}
		ctx.stroke();

		//ranges
		//left
		ctx.strokeStyle = "grey";
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.moveTo(w/2 - pixel_range_x, h/2);
		ctx.lineTo(w/2 - pixel_range_x, h * (1 - (w/2 - pixel_range_x)/w));
		ctx.lineTo(w/2, h * (1 - (w/2 - pixel_range_x)/w));
		ctx.stroke();
		//right
		ctx.beginPath();
		ctx.moveTo(w/2 + pixel_range_x, h/2);
		ctx.lineTo(w/2 + pixel_range_x, h * (1 - (w/2 + pixel_range_x)/w));
		ctx.lineTo(w/2, h * (1 - (w/2 + pixel_range_x)/w));
		ctx.stroke();

		//texts
		//range numbers
		ctx.font='12px sans-serif';
		ctx.fillStyle = "grey";
		ctx.textAlign = "right";
		ctx.fillText("- " + this.range.toFixed(1) + " Cents", Math.min(w/2 - 10, w/2 - pixel_range_x + 70), h/2 - 5);
		ctx.textAlign = "left";
		ctx.fillText("+ " + this.range.toFixed(1) + " Cents", Math.max(w/2 + 10, w/2 + pixel_range_x - 70), h/2 + 13);
		//axis label
		ctx.textAlign = "right";
		ctx.fillText("f-Out", w/2-15, 20);
		ctx.fillText("f-In", w-4, h/2+25);

	}
}
