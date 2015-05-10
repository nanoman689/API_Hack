$(document).ready(function(){


});

var result = $.ajax({
	url: "https://api.twitter.com/1.1/search/tweets.json?q=%23jasonnumber",
	type: "GET",
	dataType: "jsonp",
	data: {
		url:"https://api.twitter.com/oauth/request_nanoman689",
		oauth_consumer_key: "Fpwz4eefOKdWtuyGgIT3zpXWn",
		oauth_nonce: "78139a4d1d909cbdf2a5a9ee5853b83d", 
		oauth_signature: "uLyX70nUl6lQ6OOZrRXQjrzD5kA%3D", 
		oauth_signature_method: "HMAC-SHA1", 
		oauth_timestamp: "1431290178", 
		oauth_token: "2284161180-IQwuvuszBDw7dGGVIe5mii7sh5Yjf4f2A9hSqYN", 
		oauth_version: "1.0"
	},
});

/* url:"https://api.twitter.com/1.1/search/tweets.json?q=%23jasonnumber", */