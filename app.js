const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

canvas.width = 600;
canvas.height = 800;
ctx.strokeStyle= "#2c2c2c";
ctx.lineWidth=2.5;

let painting=false;
let filling = false;

function startPainting(){
    painting = true;
}
function stopPainting(){
    painting = false;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

/*
function onMouseDown(event){
    startPainting();
}
*/

function onMouseUp(event){
   stopPainting();
}

function onMouseLeave(event){
   stopPainting();
}

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function rangeChange(event){
    const range = event.target.value;
    ctx.lineWidth = range;

}

function fillCanvas(event){
    if(filling == true){
        filling = false;
        mode.innerText="Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
    }
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click",changeColor));

if(range){
    range.addEventListener("input", rangeChange);
}

if(mode){
    mode.addEventListener("click",fillCanvas);
}

/*
if(save){
    mode.addEventListener("click",saveCanvas);
}*/
