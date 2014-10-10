'use strict';

module.exports = function catchError(options) {
  try {
    options.func.apply(this, options.args)
  } catch (err) {
    return err
  }
}
