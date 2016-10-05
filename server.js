var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content = {
    title:'Article one barath',
    heading:'article one',
    content:`<p>
                This is the first page of my content
                This is the first page of my content This is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my content
            </p>
        
            <p>
                This is the first page of my content
                This is the first page of my content This is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my content
            </p>
            
            <p>
                This is the first page of my content
                This is the first page of my content This is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my contentThis is the first page of my content
            </p>`
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
}
var htmlTemplate =`
<html>
<head>
    <title>
        ${title} 
   </head>
   </title>
    <meta name="viewport" content="width=device-width,  initial-sacle=1"  />
    <style>
         <link href="/ui/style.css" rel="stylesheet" />
            
        
    </style>
    <body> 
        <div>
            <a href="/">Home</a>
            </div>
        <hr/>
        <h3>
        ${heading}</h3>
        <div>
            ${date}
            
        </div>
        <div class=container>
           ${content}
        </div>
        </body>



</html>
;
return htmlTemplate;



}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one',function(req, res){
   res.sendFile(createTemplate(articleone));
});

app.get('/Article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/Article-three',function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
