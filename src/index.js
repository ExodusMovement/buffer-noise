// @flow
const crypto = require('crypto')

module.exports = function (size: number): Object {
  return {
    expand (data: Buffer): Buffer {
      const buffer = crypto.randomBytes(data.length < size - 4 ? size : data.length + 4)
      buffer.writeUInt32BE(data.length, 0)
      data.copy(buffer, 4, 0)
      return buffer
    },
    shrink (buffer: Buffer): Buffer {
      const dataLen = buffer.readUInt32BE(0)
      return buffer.slice(4, dataLen + 4)
    }
  }
}
