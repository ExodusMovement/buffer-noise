//      
const crypto = require('crypto')

module.exports = function (size        )         {
  return {
    expand (data        )         {
      const buffer = crypto.randomBytes(data.length < size - 4 ? size : data.length + 4)
      buffer.writeUInt32BE(data.length, 0)
      data.copy(buffer, 4, 0)
      return buffer
    },
    shrink (buffer        )         {
      const dataLen = buffer.readUInt32BE(0)
      return buffer.slice(4, dataLen + 4)
    }
  }
}
