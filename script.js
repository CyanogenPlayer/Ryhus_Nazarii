function body_bg_color() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function body_border() {
	if (document.body.style.border == 0 || document.body.style.border == "0px")
		document.body.style.border = "solid orange";
	else
		document.body.style.border = 0;
}

function body_outline() {
	if (document.body.style.outline == 0 || document.body.style.outline == "0px")
		document.body.style.outline = "dashed blue";
	else
		document.body.style.outline = 0;
}

function ul_style() {
	if (document.getElementById("list").style.listStyle == "square")
		document.getElementById("list").style.listStyle = "circle"
	else if (document.getElementById("list").style.listStyle == "circle")
		document.getElementById("list").style.listStyle = "disc"
	else
		document.getElementById("list").style.listStyle = "square"
}

function body_margin() {
	document.body.style.margin = "50px";
}

function body_padding() {
	document.body.style.padding = "25px";
}

function body_text_color() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	document.body.style.color = "rgb(" + r + "," + g + "," + b + ")";
}

function body_text_font() {
	document.body.style.font = "italic small-caps bold 16px/2 cursive";
}