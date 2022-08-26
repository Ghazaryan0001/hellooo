const http = require("http");

const server = http.createServer(function(req,res){
    res.write('hello world');
    return res.rnd()
}

);
server.listen(3000);