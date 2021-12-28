let level = ''
let diamond = 0
let game = prompt('В какую игру ты играешь?', 'название игры');
if ((game == 'CS:GO') || ( game == 'кс го') || ( game == 'кс') ) {
    level = confirm(' Твое звание выше чем silver?');
    if (level == true){
       alert (' Ты хорошо играешь в CS:GO');
    }
    else {
        alert('Старайся лучше играть');
    }
}
if (game == 'main'){
diamond = prompt(' Сколько у тебя алмазов?');
if (diamond >=25){
alert('ты хорош');
}
}
 function f1() {
  if(document.all) { return false; }
}
function f2(e) {
  if(document.layers || (document.getElementById &! document.all)) {
    if(e.which==2 || e.which==3) { return false; }
  }
}
if(document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = f1;
}
else {
  document.onmouseup = f2;
  document.oncontextmenu = f1;
}
document.oncontextmenu = new function("return false");