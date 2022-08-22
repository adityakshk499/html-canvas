const canvas = document.querySelector("#draw")

const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height= window.innerHeight
// ctx.strokeStyle = 'rgb(255,0,0)'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = '5'
let isDrawing = false
let lastX = 0;
let lastY = 0 ;
let hue =0 
function Draw(e){
   

ctx.strokeStyle = `hsl(${hue},100%,50%)`


    if(isDrawing==false) return;
    console.log(e)
    ctx.beginPath();
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    if(hue>360){
        hue=0
    }
    hue++
 
    }


canvas.addEventListener('mousemove',Draw)
canvas.addEventListener('mouseup', () => isDrawing=false)
addEventListener('touchmove', (e) => {lastX = e.offsetX
    lastY = e.offsetY
    isDrawing=true})
canvas.addEventListener('mousedown', (e) => {
    lastX = e.offsetX
    lastY = e.offsetY
    isDrawing=true})
canvas.addEventListener('mouseout', () => isDrawing=false)

