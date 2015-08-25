/**
 * Declarative promise
 */

class DeclarativePromise {
  constructor (action) {
    action.meta = action.meta || {}
    action.meta.then = action.meta.then || []

    this.action = action
  }

  then (success, failure) {
    const q = new DeclarativePromise({success, failure})
    this.action.meta.then.push(q)
    return q
  }

  toJSON () {
    this.action.meta.then = this.action.meta.then.map(then => then.toJSON())
    return this.action
  }
}

/**
 * Exports
 */

export default DeclarativePromise
