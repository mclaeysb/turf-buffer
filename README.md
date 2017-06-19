turf-buffer
===========

Branched from the old [`turf-buffer`](https://github.com/Turfjs/turf-buffer/) (now at [`@turf/buffer`](https://github.com/Turfjs/turf/tree/master/packages/turf-buffer)). Implements a geodesic buffer, as explained in [this](https://github.com/Turfjs/turf-buffer/pull/33) PR.

###Install

This code is not on `npm`. Therefore, you'll have to download this directory, name it `turf-buffer` and put it in the `node_modules` directory of you projected.

###Parameters

|name|description|
|---|---|
|feature|A Feature or FeatureCollection of any type|
|distance|Distance to draw the buffer|
|unit|'miles' or 'kilometers'|

###Usage

```js
buffer(feature, distance, unit)
```

###Example

```js
var buffer = require('turf-buffer')

// pt = geojson point

var buffered = buffer(pt, 10, 'miles')

``` 