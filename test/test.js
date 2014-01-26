var should = require('should');
var outbound = require('../index.js')('43156f098b426a326041b4764b0d1455');

describe('outbound', function(){
  it('should be able to identify a user', function(done){
    outbound.identify('uniqueUser', {
      firstName: "Oliver",
      lastName: "Queen",
      email: "greenarrow@test.com"
    },function(err, res, body){
      if(err){ throw err; }
      res.should.have.status(200);
      body.should.have.property('user_id','uniqueUser');
      done();
    });
  });
  it('should be able to track a user', function (done){
    outbound.track('uniqueUser', 'signup', {}, function(err, res, body){
      if(err){ throw err; }
      res.should.have.status(200);
      body.should.have.property('status', 'success');
      done();
    });
  });
});