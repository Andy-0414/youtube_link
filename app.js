//AIzaSyBFbhj76YtmD3_S0r_h6ntyvJNqn9QCLxQ
const express = require('express');
const app = express();

var search = require('youtube-search');

app.listen(3000,()=>{

})

var opts = {
    maxResults: 10,
    key: 'AIzaSyBFbhj76YtmD3_S0r_h6ntyvJNqn9QCLxQ'
};

search('node Js', opts, function(err, results) {
    if (err) return console.log(err);

    console.dir(results);
});