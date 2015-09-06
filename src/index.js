/**
 * Declarative promise
 */

class DeclarativePromise {
  constructor (action, root) {
    action.meta = action.meta || {}
    action.meta.steps = action.meta.steps || []

    this.action = action
    this.root = root || this
  }

  step (success, failure) {
    const q = new DeclarativePromise({success, failure}, this.root)
    this.action.meta.steps.push(q)
    return q
  }

  toJSON (_recurse) {
    // Always toJSON starting at the root
    // of the promise tree
    if (!_recurse) {
      return this.root.toJSON(true)
    }

    return {
      ...this.action,
      meta: {
        ...this.action.meta,
        steps: this.action.meta.steps.map(step => step.toJSON(true))
      }
    }
  }
}

/**
 * Exports
 */

export default DeclarativePromise
