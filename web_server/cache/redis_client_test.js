var redis_client = require('./redis_client.js');

// redis_client.redis_set("abcc", {
//     apple: "1c",
//     orange: "2c"
// });


redis_client.redis_get("2096071851", function(res){
    console.log(res);
});