console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML= 'hello krishna';
var img = document.getElementById('madi');
img.onclick = function () {
var marginLeft=0;
 function moveRight()
 {
     marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
var interval=setInterval(moveRight, 40);
    
};