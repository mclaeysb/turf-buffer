var test = require('tape');
var buffer = require('../');
var fs = require('fs');
var helpers = require('turf-helpers');
var path = require('path');
var plot = require('../../node-test/plot.js'); // TODO

test('buffer', function(t){
  var dir = path.join(__dirname,'./fixtures-extra/');
  var files = fs.readdirSync(dir);
  console.log(files);
  for (var i = 0; i < files.length; i++){
    var filename = files[i];
    if (filename.indexOf('json') == -1) continue // filter for json files
    var fixture = JSON.parse(fs.readFileSync(path.join(dir, filename)));
    if (!(fixture.type == "Feature" || fixture.type == "FeatureCollection")) {fixture = {type: "Feature", properties: {}, geometry: fixture}}; // wrap Geometries in a Feature
    var bufferedFixture = buffer(fixture, 1, 'kilometers');
    // plot([fixture, bufferedFixture]);
    fs.writeFileSync(path.join(dir, 'out', filename), JSON.stringify(bufferedFixture));

    t.ok(bufferedFixture, 'should produce a correct buffer of '+filename);
  };
  t.end();
});
