[![Stories in Ready](https://badge.waffle.io/continu/outbound.js.png?label=ready)](https://waffle.io/continu/outbound.js)
# outbound.js

## Install

```shell
npm install --save outbound
```

## Options

outbound.identify(userId, traits, callback);
outbound.track(userId, event, payload, callback);

Usage:
```javascript
  var outbound = require('outbound')('YOUR API KEY');

  outbound.identify('A UNIQUE USER ID', {
    firstName: 'Oliver',
    lastName: 'Queen',
    email: oliver@queenconsolidations.com
  }, function(err, res, body){
    console.log(err, res, body)
  });

  outbound.track('A UNIQUE USER ID', 'signedUp', { }, function(err, res, body){
    console.log(err, res, body)
  });

```

