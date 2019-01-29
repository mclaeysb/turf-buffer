turf-buffer
===========

Code to buffer a simple feature geometry (without JSTS dependancy!).

This code was branched from the old [`turf-buffer`](https://github.com/Turfjs/turf-buffer/) (now at [`@turf/buffer`](https://github.com/Turfjs/turf/tree/master/packages/turf-buffer)) and implements a geodesic buffer. **The details are explained in [this](https://github.com/Turfjs/turf-buffer/pull/33) PR**.

![](https://cloud.githubusercontent.com/assets/2920134/15993270/8eca9a90-30e0-11e6-89dc-d95757ce8f42.png)  

### Turf buffer module

This code is not on `npm`. Therefore, you'll have to download this directory, name it `turf-buffer` and put it in the `node_modules` directory of you projected.

`turf.buffer(feature, distance, unit)`

Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.


### Parameters

| parameter  | type                       | description                                           |
| ---------- | -------------------------- | ----------------------------------------------------- |
| `feature`  | Feature\,FeatureCollection | input to be buffered                                  |
| `distance` | Number                     | distance to draw the buffer                           |
| `unit`     | String                     | 'miles', 'feet', 'kilometers', 'meters', or 'degrees' |


### Example


```js
var buffer = require('turf-buffer')

var pt = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-90.548630, 14.616599]
  }
};

var buffered = buffer(pt, 10, 'miles')

// result
``` 