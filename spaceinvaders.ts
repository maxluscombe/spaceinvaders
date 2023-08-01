type right=1;
type left=-1;
type direction=left|right;
interface screen{xboundraryleft:number,xboundaryrigt:number,yboundarytop:number,yboundarybottom:number};
interface invader{xpos:number,ypos:number,direction:direction};
const gamescreen:screen={xboundraryleft:0,xboundaryrigt:20,yboundarybottom:20,yboundarytop:0};
var context;

function init() {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    context = canvas.getContext("2d");
}

function drawInvader(invader:invader){
    context.fillRect(invader.xpos,invader.ypos,1,1);
}

init();
var invader:invader={xpos:10,ypos:10,direction: 1};
drawInvader(invader);