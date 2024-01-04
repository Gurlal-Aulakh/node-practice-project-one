const http=require("http");
const fs=require('fs');

const server=http.createServer((req,res) => {
    console.log(req.url,req.method);
    res.setHeader('content-type','text/html');
    // res.write("<h1>hi Gurlal</h1>");
    // res.write("<h2>hi Gurlal</h2>");

    let path='./';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
            case '/about':
                path+='about.html';
                res.statusCode=200;
                break;
                case '/about-us':
                    res.statusCode = 301;
                    res.setHeader('Location', '/about');
                    res.end();
                    break;
                 res.statusCode=200;
                default:
                    path+='404.html';
                    res.statusCode=404;

    }
    fs.readFile(path, (err, data) => {
        if(err){
        console.log(err);
        res.end();
        }
    else{
        res.write(data);
        res.end();
    }
    });

   
});
server.listen (3000, 'localhost', () => {
console.log('listening for requests on port 3000')
});