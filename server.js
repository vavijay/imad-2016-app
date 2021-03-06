var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var familyDetails = {
    WIFEDETAILS: {
    title: 'My Wife | VAV family',
    heading: 'About My Wife',
    age: '39',
    content: `<p> She is my wife. </p>
    <p> She loves sleeping </p>`
    },
    SONDETAILS: {
    title: 'My Son | VAV family',
    heading: 'About My Son',
    age: '16',
    content: `<p> He is my Son. </p>
    <p> He loves playing </p>`
    },
    DAUGHTERDETAILS: {
    title: 'My Daughter | VAV family',
    heading: 'About My Daughter',
    age: '18',
    content: `<p> She is my daughter. </p>
    <p> She loves studing and sleeping </p>`
    },
    MYDETAILS: {
    title: 'Myself | VAV family',
    heading: 'About me',
    age: '46',
    content: `<p> It is me. </p>
    <p> I loves to be lazy </p>`
    }
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var age = data.age;
    var content = data.content;
    
    var htmlTemplate =
        `<html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="docstyle"> 
                    <div >
                        <a href="/">My Home</a>
                    </div>
                    <hr>
                    <h3 class="topicstyle">
                        ${heading}
                    </h3>
                    <hr>
                    <div>
                        <i>Age: ${age}</i>
                    </div>
                    <hr>
                    <div class="contentStyle">
                        ${content}
                    </div>
                    <hr>
                    <div>
                        This button <button id="btncounter">Increase Count</button> will increase visit count. The current count is <span id = "spancount">0</span>.
                    </div>
                </div>
                <script type="text/javascript" src="/ui/main.js"></script>
            </body>
    
        </html>`;
    return htmlTemplate;
}

var myCounter = 0;
app.get('/counter', function (req, res) {
    myCounter = myCounter + 1;
    res.send(myCounter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/MyArticle', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myArticle.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:mem', function (req, res) {
    var familyMem = req.params.mem.toUpperCase();
  res.send(createTemplate(familyDetails[familyMem]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
