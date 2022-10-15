const redux = require('redux');

const counterReducer = (state = { counter : 0 }, action) => {

    if (action.type === "increment")
        return { counter : state.counter + 1 };
    if (action.type === "decrement")
        return { counter : state.counter - 1 };

    return { counter : state.counter };

    // return {
    //     counter : state.counter + 1,
    // };
}

const store = redux.createStore(counterReducer);

// console.log(store.getState()); // print : { counter: 1 }

const printState = () => {
    console.log(store.getState());
}

store.subscribe(printState);

store.dispatch({type : "increment"}); // dispached automatically subscribe functions (like --> printState).
store.dispatch({type : "decrement"}); // dispached automatically subscribe functions (like --> printState).