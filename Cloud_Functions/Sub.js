const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
  var x = parseInt(req.query.X || req.body.X) 
  var y = parseInt(req.query.Y || req.body.Y) 

  let z = x - y ;
  res.send({
    "X":x,
    "Y":y,
    "Result":z
  })

});
