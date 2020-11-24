class Vol_scale {
	constructor(canvas) {
		this.canvas = canvas;
		this.step_px_min = 25;
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
		ctx.lineWidth = 0.6;
		//vertical line
		ctx.beginPath();
		ctx.moveTo(w-offset, offset);
		ctx.lineTo(w-offset, h-offset);
		ctx.stroke();
		//steps
		let step_db = 1;
		let step_px = step_db/(MAX_DB-MIN_DB)*(h-2*offset);
		while(true){
			if(step_px >= this.step_px_min){
				break;
			}
			step_db *= 2;
			step_px *= 2;
			if(step_px >= this.step_px_min){
				break;
			}
			step_db *= 2.5;
			step_px *= 2.5;
			if(step_px >= this.step_px_min){
				break;
			}
			step_db *= 2;
			step_px *= 2;
			if(step_px >= this.step_px_min){
				break;
			}
		}

		let current_db = MAX_DB;
		let current_px = offset;

		ctx.textAlign = "right";
		ctx.font = "13px serif";
		ctx.lineWidth = 0.4;

		while(current_db >= MIN_DB){
			ctx.beginPath();
			ctx.moveTo(w-offset-line_width, current_px);
			ctx.lineTo(w-offset, current_px);
			ctx.stroke();

			ctx.strokeText(current_db.toFixed(0) + " dB", w-offset-line_width-offset, current_px + 7*(1 - (MAX_DB-current_db)/(MAX_DB-MIN_DB)));

			current_db -= step_db;
			current_px += step_px;
		}

	}
}
