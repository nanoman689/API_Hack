function loadTwitter(sLat, sLon, sRad, dFrom, dTo){
            arrayTweets = new Array();
            var sRadKm = sRad/1000;
            dFrom = dFrom/1000;
            dTo = dTo/1000;
            var twitterUrlPath = "https://api.twitter.com/1.1/search/tweets.json";
            var auth = "OAuth oauth_consumer_key='Fpwz4eefOKdWtuyGgIT3zpXWn', oauth_nonce='78139a4d1d909cbdf2a5a9ee5853b83d', oauth_signature='uLyX70nUl6lQ6OOZrRXQjrzD5kA%3D', oauth_signature_method='HMAC-SHA1', oauth_timestamp='1431290178', oauth_token='2284161180-IQwuvuszBDw7dGGVIe5mii7sh5Yjf4f2A9hSqYN', oauth_version='1.1'";
            var urlTwitter = "?geocode=" + sLat + "," + sLon + "," + sRadKm + "km&count=100"; 
            $.ajax({
                    type: "GET",
                    async: false,
                    accept: "application/json",
                    url: twitterUrlPath + urlTwitter,
                    dataType: "jsonp",
                    beforeSend : function(req) {
                        req.setRequestHeader('Authorization', auth);
                    }, 
                    success: function (resp, status, xhr) {
                       $("#message").html("STATUS: " + xhr.status + " " + xhr.statusText + "\n" + resp);
                       $("#message").hide();
                       $.each(resp, function() {
                            $.each(this, function(i, item) {
                                arrayTweets.push(item);
                            });

                        });

                        displayTweets();
                    },
                    error: function(resp, status, xhr){
                        $("#message").html("ERROR: " + xhr.status + " " + xhr.statusText + "\n" + resp.e);
                        $("#message").show();
                    }
                });
        }