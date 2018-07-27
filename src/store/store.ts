export class Store {
    private subscribers: Function[]; //function array
    private reducers: { [key: string]: Function};
    private state: { [key: string]: any};

    constructor(reducers = {}, initialState= {}) {
        this.reducers = reducers; //initialize reducers
        this.state = this.reduce(initialState, {}); //overwerite the initialState
    }

    //using TS 'get' property
    get value() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reduce(this.state, action);
    }

    private reduce (state, action) {
       const newState = {};
       //loop over all reducers, create a new obj prop for each, 
       //bind value as the result of each reducer's fn call 
       //each reducer will manage its own piece of state 
       for (const prop in this.reducers) {
           //newState.todos = this.reducers.todos()
           newState[prop] = this.reducers[prop](state[prop], action);
       }
       return newState;
    }
}