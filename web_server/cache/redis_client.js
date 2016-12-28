var redis = require("redis"),
    client = redis.createClient();

var axios = require("axios");

client.on("error", function(err) {
    console.log("Redis client error " + err);
});

/************call redis service running on local**********
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

function redis_set(key, property) {
    var str_property = JSON.stringify(property);
    client.set(key, str_property);
}
*/

//call redis service running on docker
function redis_get(key, callback) {
    axios.get('http://localhost:6060/property', {
        params: {
            key: key
        }
    }).then(function(res) {
        var obj_res = JSON.parse(res.data.property);
        callback(obj_res);
    }).catch(function(err) {
        console.log(err);
    });
}

function redis_set(key, property) {
    axios.post('http://localhost:6060/property', {
        key: key,
        property: property
    }).then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });
}


module.exports = {
    redis_get: redis_get,
    redis_set: redis_set
}