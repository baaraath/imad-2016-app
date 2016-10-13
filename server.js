var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={ 
'article-one' :{
     title:'Article-One|barath',
     heading:'Article One',
     date:'3rd oct 2016',
     content:`
    <p>
     this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first article this is the content of the first articlethis is the content of the first article this is the content of the first article
</p>
 first articlethis is the content of the first article this is the content of the first article
</p>
</div>
</div>
</body>
</html>
`
},
'article-two' :{ title:'Article-Two|barath',
     heading:'Article Two',
     date:'13rd oct 2016',
     content:`
    <p>
     this is the content of the second article 
</p>`
    
},
'article-three' :{ title:'Article-Three|barath',
     heading:'Article Three',
     date:'3rd oct 2016',
     content:`
    <p>
     this is the content of the third article 
</p>`
}
    
};    

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =` 
    <html>
 <head>
    <title>
         ${title}
     </title>

<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
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

var counter=0;
app.get('/counter',function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
    

app.get('/:articleName',function (req,res){
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get(`/submit-name:/name`, function (req ,res){
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
