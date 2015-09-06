/**
 * Imports
 */

import test from 'tape'
import DeclarativePromise from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  function step () {}
  const q = new DeclarativePromise({})
  q.step(step)
  deepEqual(q.toJSON(), {meta: {steps: [{success: step, failure: undefined, meta: {steps: []}}]}})
  end()
})

test('should return root from toJSON', ({deepEqual, end}) => {
  function step () {}

  const q = new DeclarativePromise({})
  const q2 = q.step(step)

  deepEqual(q.toJSON(), q2.toJSON())
  end()
})
