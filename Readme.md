# declarative-promise

Produce declarative specifications of your promise chains.  Designed to be used in conjunction with [redux-effects](https://github.com/redux-effects/redux-effects)

## Installation

`npm install declarative-promise`

## Usage

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
    .then(gotGoogle)
    .toJSON()
}

```

Note the `.tojSON()` at the end.  That is essential, it de-sugars the declarative promise back to a plain JS object.