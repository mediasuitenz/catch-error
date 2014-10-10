'use strict';

module.exports = function catchError(functionToCall) {
  try {
    functionToCall.apply(this, Array.prototype.slice.call(arguments, 1))
  } catch (err) {
    return err
  }
}
