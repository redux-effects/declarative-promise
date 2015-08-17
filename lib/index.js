/**
 * Declarative promise
 */

function DeclarativePromise (action) {
  this.action = action
}

DeclarativePromise.prototype.then = function (success, failure) {
  this.action.meta = this.action.meta || {}
  this.action.meta.success = success
  this.action.meta.failure = failure

  return this
}

DeclarativePromise.prototype.toJSON = function () {
  return this.action
}

/**
 * Exports
 */

module.exports = DeclarativePromise