/**
 * Imports
 */

import test from 'tape'
import DeclarativePromise from '..'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  function then () {}
  const q = new DeclarativePromise({})
  q.then(then)
  deepEqual(q.toJSON(), {meta: {then: [{success: then, failure: undefined, meta: {then: []}}]}})
  end()
})