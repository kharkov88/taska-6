let 
    http = require( 'http' ),
    express = require('express'),
    bodyParser = require("body-parser"),
    jsonParse = bodyParser.json(),
    fs =require('fs'),
    app = express(),
    count = 0,
    ppls_list = [],
    server = http.createServer(app);

app.use( express.static( __dirname + '/build' ));

app.get( '/', function ( request, response ) { 
response.redirect( '/' );
}); 
app.get('/get-data',(req,res)=>{
    file = 'back/data.json';
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){}
        else{
            res.end(data)
        }
    })
})
app.post('/add',jsonParse,(req,res)=>{
    let file='back/data.json'
    fs.readFile(file,'utf-8',(error,data)=>{
        if(error)console.log('error:',error)
        else{
            let obj = JSON.parse(data)
            obj.products.push({
                id:String(obj.products.length),
                name:req.body.name,
                author:req.body.author,
                year:req.body.year,
                except:req.body.except,
                image_url:req.body.image_url,
                content:req.body.content,
            })
            fs.writeFile(file,JSON.stringify(obj))
            res.json(JSON.stringify(obj))
        }
    })
})
app.post('/delete',jsonParse,(req,res)=>{
    let file='back/data.json'
    fs.readFile(file,'utf-8',(error,data)=>{
        if(error)console.log('error:',error)
        else{
            let obj = JSON.parse(data)
            obj.products=obj.products.filter(item=>{
                return item.id!=req.body.id
            })
            fs.writeFile(file,JSON.stringify(obj))
            res.json(JSON.stringify(obj))
        }
    })
})

let port = process.env.PORT || 5000;
server.listen(port);
console.log(
    'Express-сервер прослушивает порт %d в режиме %s',
    server.address().port, app.settings.env);
