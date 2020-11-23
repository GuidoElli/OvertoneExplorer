// TODO <div contenteditable="true"></div>

let start_button = $(".start_button")[0];
let start_screen = $(".start_screen")[0];
let app_screen = $(".app_section")[0];
let app = new Controller(new Model(), new View());
start_button.addEventListener("mouseup", function (){
	start_screen.style.display = "none";
	app_screen.style.display = "block";
})
