/**
 * Imports
 */

import test from 'tape'
import DeclarativePromise from '../src'

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

test('should return root from toJSON', ({deepEqual, end}) => {
  function then () {}

  const q = new DeclarativePromise({})
  const q2 = q.then(then)

  deepEqual(q.toJSON(), q2.toJSON())
  end()
})
