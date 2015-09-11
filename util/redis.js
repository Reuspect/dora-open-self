/*!
 * redis client
 */
'use strict';

var settings = require('../models/db/settings');
var redis = require('redis');
var client = redis.createClient(settings.redis_port, settings.redis_host);

module.exports = client;