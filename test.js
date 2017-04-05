const test = require('tape')
const createExpander = require('.')

const size = Math.pow(2, 15) // 32K

test('expand / shrink', t => {
  t.plan(2)
  const { expand, shrink } = createExpander(size)
  const data = Buffer.from('Hello World!')
  const expanded = expand(data)
  t.is(expanded.length, size, 'expands to correct length')
  t.assert(shrink(expanded).equals(data), 'shrink(expand(data)) === data')
})
