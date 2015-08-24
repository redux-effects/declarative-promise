/**
 * Declarative promise
 */

function DeclarativePromise (action) {
  action.meta = action.meta || {}
  action.meta.then = action.meta.then || []

  this.action = action
}

DeclarativePromise.prototype.then = function (success, failure) {
  var q = new DeclarativePromise({success: success, failure: failure})
  this.action.meta.then.push(q)
  return q
}

DeclarativePromise.prototype.toJSON = function () {
  this.action.meta.then = this.action.meta.then.map(function (then) { return then.toJSON() })
  return this.action
}

/**
 * Exports
 */

module.exports = DeclarativePromise
