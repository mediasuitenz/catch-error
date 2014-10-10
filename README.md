Catch Error
===========

A handy helper to make testing whether an error was thrown just a little bit nicer.

```js
// some test setup...
function myFunc(arg1, arg2) {
  throw new Error('wat')
}

var error = catchError(myFunc, arg1, arg2)
expect(error).to.be.an.instanceof(Error)
expect(error.message).to.equal('wat')
```
