/**
* ### HOW TO CREATE A VALID ID TO USE: ###
* Go to www.twitter.com and sign in as normal, go to your settings page.
* Go to "Widgets" on the left hand side.
* Create a new widget for what you need eg "user time line" or "search" etc.
* Feel free to check "exclude replies" if you don't want replies in results.
* Now go back to settings page, and then go back to widgets page and
* you should see the widget you just created. Click edit.
* Look at the URL in your web browser, you will see a long number like this:
* 345735908357048478
* Use this as your ID below instead!
*/

/**
* How to use TwitterFetcher's fetch function:
*
* @function fetch(object) Fetches the Twitter content according to
*     the parameters specified in object.
*
* @param object {Object} An object containing case sensitive key-value pairs
*     of properties below.
*
* You may specify at minimum the following two required properties:
*
* @param object.id {string} The ID of the Twitter widget you wish
*     to grab data from (see above for how to generate this number).
* @param object.domId {string} The ID of the DOM element you want
*     to write results to.
*
* You may also specify one or more of the following optional properties
*     if you desire:
*
* @param object.maxTweets [int] The maximum number of tweets you want
*     to return. Must be a number between 1 and 20. Default value is 20.
* @param object.enableLinks [boolean] Set false if you don't want
*     urls and hashtags to be hyperlinked.
* @param object.showUser [boolean] Set false if you don't want user
*     photo / name for tweet to show.
* @param object.showTime [boolean] Set false if you don't want time of tweet
*     to show.
* @param object.dateFunction [function] A function you can specify
*     to format date/time of tweet however you like. This function takes
*     a JavaScript date as a parameter and returns a String representation
*     of that date.
* @param object.showRetweet [boolean] Set false if you don't want retweets
*     to show.
* @param object.customCallback [function] A function you can specify
*     to call when data are ready. It also passes data to this function
*     to manipulate them yourself before outputting. If you specify
*     this parameter you must output data yourself!
* @param object.showInteraction [boolean] Set false if you don't want links
*     for reply, retweet and favourite to show.
* @param object.showImages [boolean] Set true if you want images from tweet
*     to show.
* @param object.linksInNewWindow [boolean] Set false if you don't want links
*     to open in new window.
* @param object.lang [string] The abbreviation of the language you want to use
*     for Twitter phrases like "posted on" or "time ago". Default value
*     is "en" (English).
* @param object.showPermalinks [boolean] Set false if you don't want time
*     to be permalinked.
*/



// A simple example to get latest 5 tweets for #API tag and shows any images
// attached to tweets.
var config3 = {
	"id": '603401504280555522',
	"domId": 'example1',
	"maxTweets": 5,
	"enableLinks": true,
	"showImages": true
};
twitterFetcher.fetch(config3);

/*

// ##### Advanced example #####
// An advance example to get latest 5 posts using hashtag #API and write to a
// HTML element with id "tweets2" without showing user details and using a
// custom format to display the date/time of the post, and does not show
// retweets.
var config4 = {
	"id": '603401504280555522',
	"domId": 'example1',
	"maxTweets": 3,
	"enableLinks": true,
	"showUser": false,
	"showTime": true,
	"dateFunction": dateFormatter,
	"showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See http://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
	return date.toTimeString();
}

twitterFetcher.fetch(config4);


// ##### Advanced example 2 #####
// Similar as previous, except this time we pass a custom function to render the
// tweets ourself! Useful if you need to know exactly when data has returned or
// if you need full control over the output.

var config5 = {
	"id": '603401504280555522',
	"domId": '',
	"maxTweets": 3,
	"enableLinks": true,
	"showUser": true,
	"showTime": true,
	"dateFunction": '',
	"showRetweet": false,
	"customCallback": handleTweets,
	"showInteraction": false
};

function handleTweets(tweets){
	var x = tweets.length;
	var n = 0;
	var element = document.getElementById('example5');
	var html = '<ul>';
	while(n < x) {
		html += '<li>' + tweets[n] + '</li>';
		n++;
	}
	html += '</ul>';
	element.innerHTML = html;
}

twitterFetcher.fetch(config5);


// ##### Advanced example #####
// An advance example to get latest 3 posts using hashtag #API and write to a
// HTML element with id "example6" without showing user details and using an
// alternative custom format with moment.js to display the age of the post,
// and does not show retweets.
var config6 = {
	"id": '603401504280555522',
	"domId": 'example6',
	"maxTweets": 3,
	"enableLinks": true,
	"showUser": false,
	"showTime": true,
	"dateFunction": momentDateFormatter,
	"showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date and
// optional text representation of data as parameters and returns a string!
// See http://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
//
// The advantage of using the date string is that internally
// twitterFetcher discards the timezone in favor of cross-browser
// support. If you need the timezone, you can use something like
// Moment.js to parse the original date string and maintain the
// timezone.
function momentDateFormatter(date, dateString) {
	return moment(dateString).fromNow();
}

twitterFetcher.fetch(config6);


*/




/*

var auth = btoa("Fpwz4eefOKdWtuyGgIT3zpXWn:2284161180-IQwuvuszBDw7dGGVIe5mii7sh5Yjf4f2A9hSqYN");

var result = $.ajax({
	url: "https://api.twitter.com/1.1/search/tweets.json",
	async: false,
	type: "GET",
	dataType: "jsonp",
	accept: "application/json",
	data:JSON.stringify("grant_type=client_credentials"),
	headers: {
        "Authorization":"Basic " + auth,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    }
});

*/

/* url:"https://api.twitter.com/1.1/search/tweets.json?q=%23jasonnumber", */

/*
		oauth_nonce: "78139a4d1d909cbdf2a5a9ee5853b83d",
		oauth_signature: "uLyX70nUl6lQ6OOZrRXQjrzD5kA%3D",
		oauth_signature_method: "HMAC-SHA1",
		oauth_timestamp: "1431290178",
		oauth_token: "2284161180-IQwuvuszBDw7dGGVIe5mii7sh5Yjf4f2A9hSqYN",
		oauth_version: "1.0"


	data: {
		Authorization: "Basic " + auth
	},
*/

/*
//Callback functions

    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "Fpwz4eefOKdWtuyGgIT3zpXWn",
        "consumerSecret": "bEc4QuDFVkp08XT89WWYA52qPWMd3PTuM7wvfTTXbwFzlDETiQ",
        "accessToken": "2284161180-IQwuvuszBDw7dGGVIe5mii7sh5Yjf4f2A9hSqYN",
        "accessTokenSecret": "NABUXLqlwL2pgCf6ex51Jjxw0QIU7FAJPSVuOI5asMtvO",
        "callBackUrl": "https://api.twitter.com/oauth2/token"
    }


    // Get 10 tweets containing the hashtag haiku

    twitter.getSearch({'q':'#haiku','count': 10}, error, success);

    //

*/
