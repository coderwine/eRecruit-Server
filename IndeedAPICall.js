const request = require('request');

request('https://authenticjobs.com/api/?api_key=cf1acfdb39dea5fc2e2ea6b394c2a247&method=aj.jobs.search&perpage=100&format=json', {json: true}, (err, res, body) => {
    if (err) {return console.log(err);}
    console.log('statusCode:', res && res.statusCode)
    console.log(body.listings);
    return(body.listings)
})