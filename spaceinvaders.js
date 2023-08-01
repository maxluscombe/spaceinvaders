;
;
var gamescreen = { xboundraryleft: 0, xboundaryrigt: 20, yboundarybottom: 20, yboundarytop: 0 };
var context;
function init() {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
}
function drawInvader(invader) {
    context.fillRect(invader.xpos, invader.ypos, 1, 1);
}
init();
var invader = { xpos: 10, ypos: 10, direction: 1 };
drawInvader(invader);
