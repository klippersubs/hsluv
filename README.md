# @klippersubs/hsluv

CSS-ready [HSLuv](http://hsluv.org) wrapper.

## Install

````bash
yarn add @klippersubs/hsluv
````

## Usage

````javascript
import { hsluv } from '@klippersubs/hsluv';

console.log(hsluv(0, 100, 50)); // '#ea0064'
console.log(hsluv(0, 100, 50, 0.5)); // 'rgba(233,0,100,0.5)'
````

## API

### `hsluv`

 *  Signature: `(h: number, s: number, l: number, a?: number) => string`.
 *  Alias: `hsl`.

### `hpluv`

 *  Signature: `(h: number, s: number, l: number, a?: number) => string`.
 *  Alias: `hpl`.
