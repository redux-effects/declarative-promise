# declarative-promise

Produce declarative specifications of your promise chains.  Designed to be used in conjunction with [redux-effects](https://github.com/redux-effects/redux-effects)

## Installation

`npm install declarative-promise`

## Usage

`DeclarativePromise`'s export a `step` function in place of the `then` of a standard Promise.  `step` accepts two functions, a success handler and an error handler and it returns a new `DeclarativePromise`.  Where it differs from a standard promise is that it doesn't actually execute any of the functions in your chain on its own.  It doesn't do anything at all on it's own, other than construct a tree of pure computations to execute.

In order to actually execute your tree, you need a separate library to do that, such as [redux-effects](https://github.com/redux-effects/redux-effects).

From an async action creator:

```javascript
import DeclarativePromise from 'declarative-promise'

function getUrl (url) {
  return new DeclarativePromise({
    type: 'EFFECT',
    payload: {
      type: 'FETCH',
      url
    }
  })
}
```

From application-level code:

```javascript
import getUrl from 'get-url'
import {createAction} from 'redux-actions'

const gotGoogle = createAction('GOT_GOOGLE')

function fetchGoogle () {
  return getUrl('http://www.google.com')
    .step(gotGoogle)
}

```
