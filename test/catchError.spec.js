'use strict';

var catchError = require('../index.js')
var expect     = require('chai').expect

describe('catchError', function () {
  it('should return an error if called function throws one', function () {
    function myFunc(arg1, arg2) {
      if (arg1 && arg2)
        throw new Error('wat')
    }

    var error = catchError({
      func: myFunc, args: ['hi', 'there']
    })
    expect(error).to.be.an.instanceof(Error)
    expect(error.message).to.equal('wat')
  })

  it('should correctly handle the context of `this`', function () {
    function MyFunc() {}
    MyFunc.prototype.func = function () {
      return this.var
    }

    var constructed = new MyFunc()
    constructed.var = 'hello'
    var error = catchError({ func:constructed.func })
    expect(error).to.equal(undefined)
  })
})
