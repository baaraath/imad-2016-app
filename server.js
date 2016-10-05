var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content ={
     title:'article-one|barath',
     heading:'article one',
     date:'3rd oct 2016',
     content:`<html>
 <head>
    <title>
         Article one |barath
        </title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div>
        <a href="/">home</a>
    </div>
<hr/>
<h3>
    Article one
</h3> 
<div class="container">
    

<div>
    3rd oct 2016
</div>
<div>
    <p>
     this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article
</p>
 <p>
     this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article
</p>
 <p>
     this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article
</p>
</div>
</div>
</body>
</html>
`
     
};
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
}

var htmlTemplate = `
    <html>
 <head>
    <title>
         ${title}
         </title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div>
        <a href="/">home</a>
    </div>
<hr/>
<h3>
    ${heading}
</h3> 
<div class="container">
    

<div>
    
    ${date}
    </div>
<div>
    <p>
  ${content}
</p>
</div>
</div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res){
res.send(createTemplate(articleone));   
});

app.get('/article-two',function (req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));     
});

app.get('/article-three',function (req,res){
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
