module.exports = function(req, res, next){
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-mehods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
}

//verify that line 2 shouuld be "-origin" and not "-origins".