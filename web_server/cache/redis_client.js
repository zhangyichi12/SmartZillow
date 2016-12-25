var redis = require("redis"),
    client = redis.createClient();

client.on("error", function(err) {
    console.log("Redis client error " + err);
});

function redis_get(key, callback) {
    client.get(key, function(err, res) {
        if(err) {
            console.log("Error key ", key);
            throw err;
        }
        var obj_res = JSON.parse(res);
        callback(obj_res);
    });
}

function redis_set(key, value) {
    var str_value = JSON.stringify(value);
    client.set(key, str_value);
}

module.exports = {
    redis_get: redis_get,
    redis_set: redis_set
}