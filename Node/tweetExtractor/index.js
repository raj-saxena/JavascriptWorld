 var Twitter = require('twitter-node-client').Twitter;
 
 var tweets
 //Callback functions
 var error = function (err, response, body) {
 	console.log('This is wrong => [%s]', err);
 };
 var success = function (data) {
    console.log("yes")
    tweets=JSON.parse(data).statuses
    for (var i=j=0; i < tweets.length; i++) {
        if(!tweets[i].retweeted_status) {
            console.log('Tweet %s [%s]', ++j, tweets[i].text);
        }
    }
};

//Get this data from your twitter apps dashboard
var config = {
   "consumerKey": "5BL4swZmSDXJP5YKOtYQAUy4Y",
   "consumerSecret": "zqHoWwmCBNgdaYucTtKQNwdJEA1RiajbjOY1ifpjaOtkjwAk57",
   "accessToken": "",
   "accessTokenSecret": "",
   "callBackUrl": ""
}

var twitter = new Twitter(config);

// $(document).ready(function() {
    console.log("ready to fire")
    twitter.getSearch({'q':'#AwayDay', 'count':25, 'result_type':'recent', '-filter':'retweets'}, error, success)
// });
