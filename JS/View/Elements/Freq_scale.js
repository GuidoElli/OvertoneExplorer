class Freq_scale {
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

		let step_cents = 1;
		let step_px = step_cents/(2*MAX_MIN_CENTS)*(h-2*offset);
		while(true){
			if(step_px >= this.step_px_min){
				break;
			}
			step_cents *= 2;
			step_px *= 2;
			if(step_px >= this.step_px_min){
				break;
			}
			step_cents *= 2.5;
			step_px *= 2.5;
			if(step_px >= this.step_px_min){
				break;
			}
			step_cents *= 2;
			step_px *= 2;
			if(step_px >= this.step_px_min){
				break;
			}
		}


		ctx.textAlign = "right";
		ctx.font = "13px serif";
		ctx.lineWidth = 0.4;

		let current_cents = 0;
		let current_px = h/2;

		//zero
		ctx.beginPath();
		ctx.moveTo(w-offset-line_width, h/2);
		ctx.lineTo(w-offset, h/2);
		ctx.stroke();
		ctx.strokeText("0",
			w-offset-line_width-offset,
			current_px + 7*(1 - (MAX_MIN_CENTS-current_cents)/(2*MAX_MIN_CENTS)));

		//upper part
		current_cents += step_cents;
		current_px -= step_px;
		while(current_cents <= MAX_MIN_CENTS){
			ctx.beginPath();
			ctx.moveTo(w-offset-line_width, current_px);
			ctx.lineTo(w-offset, current_px);
			ctx.stroke();
			ctx.strokeText("+" + current_cents.toFixed(0) + " cents",
				w-offset-line_width-offset,
				current_px + 8*(1 - (MAX_MIN_CENTS-current_cents)/(2*MAX_MIN_CENTS)));

			current_cents += step_cents;
			current_px -= step_px;
		}

		//lower part
		current_cents = 0;
		current_px = h/2;
		current_cents -= step_cents;
		current_px += step_px;
		while(current_cents >= -MAX_MIN_CENTS){
			ctx.beginPath();
			ctx.moveTo(w-offset-line_width, current_px);
			ctx.lineTo(w-offset, current_px);
			ctx.stroke();
			ctx.strokeText(current_cents.toFixed(0) + " cents",
				w-offset-line_width-offset,
				current_px + 7*(1 - (MAX_MIN_CENTS-current_cents)/(2*MAX_MIN_CENTS)));
			current_cents -= step_cents;
			current_px += step_px;
		}

	}
}
