type right=1;
type left=-1;
type direction=left|right;
interface screen{xboundraryleft:number,xboundaryrigt:number,yboundarytop:number,yboundarybottom:number};
interface invader{xpos:number,ypos:number,direction:direction};
const gamescreen:screen={xboundraryleft:0,xboundaryrigt:20,yboundarybottom:20,yboundarytop:0};
