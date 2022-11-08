# buffer-noise
[![npm](https://img.shields.io/npm/v/buffer-noise.svg)](https://npmjs.com/package/buffer-noise)
[![GitHub Actions Status](https://img.shields.io/github/workflow/status/ExodusMovement/buffer-noise/CI/master)](https://github.com/ExodusMovement/buffer-noise/actions/workflows/ci.yml?query=branch%3Amaster)

Expand a buffer to a specified length. If the buffer is smaller than the specified length, the remaining space is filled with random bytes. A 32-bit Unsigned Big-Endian Integer containing the length of the data is always prepended to the buffer.

This module can be used for obfuscating an encrypted file's size for plausible deniability.

## Installation

    npm install buffer-noise

## Usage

```js
const size = 25
const { expand, shrink } = require('buffer-noise')(size)

const data = Buffer.from('Hello World!')
const newData = expand(data)
console.log(data, newData)
// Prints:
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
// <Buffer 00 00 00 0c 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 91 5c d3 2f>
assert(newData.length === size)
assert(shrink(newData).equals(data))
```

## License

MIT
