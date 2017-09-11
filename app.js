
var express = require("express");
var app = express();
var request = require("request");

request({
    url: "https://blockchain.info/stats?format=json",
    json: true
}, function(error, response, body){
    btcPrice = body.market_price_usd;
    hashRate = body.hash_rate;
    blockHeight = body.n_blocks_total;
    minnersRevenue = body.miners_revenue_usd;
});

app.get("/", function(req, res){

    res.send("bitcoin current price: " + btcPrice + " USD<br>block height: " + blockHeight + 
    "<br>Minners Revenue: " + minnersRevenue + " USD" + 
    "<br>Hash rate: " + hashRate);
});

app.listen(80, function(){
    console.log("go");
});
