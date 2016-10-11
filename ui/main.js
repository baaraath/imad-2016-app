var button=0;
var counter=document.getElementById("counter");
button.onclick = function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};