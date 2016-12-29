import express from 'express';
import redis from 'redis';

import axios from 'axios';

let router = express.Router();
let client = redis.createClient('6379', '192.168.99.100');

client.on("error", function(err) {
    console.log("Redis client error " + err);
});

// Get property
router.get('/', (req, ajax_res) => {
    client.get(req.query.key, (err, redis_res) => {
        if(err) {
            console.log("Error key", req.query.key);
            throw err;
        }
        console.log("Get from redis!");
        ajax_res.status(200).send({property: redis_res});
    });
});

// Set property
router.post('/', (req, res) => {
    let str_property = JSON.stringify(req.body.property);
    client.set(req.body.key, str_property);
    console.log("Set to redis!");
    res.status(200);
});

export default router;