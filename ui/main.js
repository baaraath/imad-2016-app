var button=document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readystate===XMlHttpRequest.DONE)
   if(request.readystate===200)
   {
       var counter=request.responseText;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
    }
}; 
request.open('GET',`baaraath.imad.hasura-app.io`,true);
request.send(null);
   
    };