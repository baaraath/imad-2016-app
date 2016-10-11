var counter=0;
var counter=document.getElementById("counter");
counter.onclick = function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};