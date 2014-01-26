'use strict';

var request = require('request');

var outbound = function (apiKey){
  return {
    identify: function(userId, traits, callback){
      var postBody = {
        api_key: apiKey,
        user_id: userId,
        traits: traits
      };
      var options = {
        url: 'http://api.outbound.io/api/v1/identify',
        method: 'POST',
        pool: false,
        strictSSL: false,
        json: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody)
      };
      request(options, function(err, res, body){
        callback(err, res, body);
      });
    },
    track: function(userId, event, payload, callback){
      var postBody = {
        api_key: apiKey,
        user_id: userId,
        event: event,
        payload: payload
      };
      var options = {
        url: 'http://api.outbound.io/api/v1/track',
        method: 'POST',
        pool: false,
        strictSSL: false,
        json: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody)
      };
      request.post(options, function(err, res, body){
        callback(err, res, body);
      });
    }
  };
};

module.exports =  outbound;