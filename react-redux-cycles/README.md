# React Redux Cycles

## Installation

1. Add redux-cycle to the project

```bash
npm install --save redux-cycle
npm install --save @cycle/run
```

2. Add redux-cycle middleware to the project. It returns a middleware function with two driver factories:
    * makeActionDriver()
    * makeStateDriver()
    
```js
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

let store = createStore(persistedReducers, composeWithDevTools(applyMiddleware(cycleMiddleware)));
``` 

3. Register drivers with cycles:

```js
run(cycles, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver()
});
```

## Additional drivers

1. Install additional drivers:

```bash
npm install --save @cycle/http @cycle/time
```

2. Register drivers:

```js
run(cycles, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    TIME: timeDriver,
    HTTP: makeHTTPDriver()
});
```


## Resources

1. https://github.com/cyclejs-community/redux-cycles