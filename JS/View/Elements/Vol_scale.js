class Vol_scale {
	constructor(canvas) {
		this.canvas = canvas;
		this.step_px_max = 40;
		this.update();
	}

	resize = () => {
		let b = this.canvas.parentNode.getBoundingClientRect();
		let width = b.right - b.left;
		let height = b.bottom - b.top;

		this.canvas.width = width-3;
		this.canvas.height = height-3;
	}

	update = () => {

		this.resize();

		let h = this.canvas.height;
		let w = this.canvas.width;
		let ctx = this.canvas.getContext("2d");

		ctx.clearRect(0, 0, w, h);

		//lines
		let offset = 5;
		let line_width = 7;
		ctx.strokeStyle = "#bbbbbb";
		ctx.lineWidth = 0.9;
		//vertical line
		ctx.beginPath();
		ctx.moveTo(w-offset, offset);
		ctx.lineTo(w-offset, h-offset);
		ctx.stroke();
		//steps
		let n_val = Math.floor((h-2*offset) / this.step_px_max);
		let step_px = (h-offset*2) / n_val;
		for(let i = 0; i <= n_val; i++){
			ctx.beginPath();
			ctx.moveTo(w-offset-line_width, offset + i*step_px);
			ctx.lineTo(w-offset, offset + i*step_px);
			ctx.stroke();
		}

		//values
		ctx.textAlign = "right";
		ctx.font = "13px serif";
		ctx.lineWidth = 0.4;
		for(let i = 0; i <= n_val; i++){
			let val = MAX_DB - (MAX_DB-MIN_DB)/n_val * i;
			ctx.strokeText(val.toFixed(0) + "dB", w-offset-line_width-offset, offset + i*step_px + 8*(1 - i/n_val));
		}

	}
}
