var http = require('http'),
    url = require('url'),
    fs = require('fs');

 var messages = ["testing"];
 var clients = [];

 http.createServer(function(req,res){
  console.log("whatsup");
  //res.end("helloworld");
  var url_parts = url.parse(req.url);
  console.log(url_parts);
  //res.end("helloworld");
  if(url_parts.pathname == '/'){
      fs.readFile('../index.html',function (err,data){
        res.end(data);
      });
    
  } 
  /*else if(url_parts.pathname.substr(0,5) == '/poll'){
     var count = (url_parts.pathname.replace(/[^0-9],'')
     console.log(count);
     messages.push("hello from server for = ="+count)
     if(messages.length > count){
       res.end(JSON.stringify({
           count:messages.length,
           append:messages.slice(count).join("\n")+"\n"
       }));
     }else{
      clients.push(res);
     }
  }*/

 }).listen(2500,'localhost');
 console.log('server running');