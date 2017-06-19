turf-buffer
===========

Branched from the old [`turf-buffer`](https://github.com/Turfjs/turf-buffer/) (now at [`@turf/buffer`](https://github.com/Turfjs/turf/tree/master/packages/turf-buffer)). Implements a geodesic buffer, as explained in [this](https://github.com/Turfjs/turf-buffer/pull/33) PR.

turf buffer module

This code is not on `npm`. Therefore, you'll have to download this directory, name it `turf-buffer` and put it in the `node_modules` directory of you projected.

### `turf.buffer(feature, distance, unit)`

Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.


### Parameters

| parameter  | type                       | description                                           |
| ---------- | -------------------------- | ----------------------------------------------------- |
| `feature`  | Feature\,FeatureCollection | input to be buffered                                  |
| `distance` | Number                     | distance to draw the buffer                           |
| `unit`     | String                     | 'miles', 'feet', 'kilometers', 'meters', or 'degrees' |


### Example

```js
var pt = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-90.548630, 14.616599]
  }
};
var unit = 'miles';

var buffered = turf.buffer(pt, 500, unit);
var result = turf.featurecollection([buffered, pt]);

//=result
```


```js
var buffer = require('turf-buffer')

// pt = geojson point

var buffered = buffer(pt, 10, 'miles')

``` 