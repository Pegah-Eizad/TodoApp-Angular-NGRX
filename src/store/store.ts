export class Store {
    private subscribers: Function[]; //function array
    private reducers: { [key: string]: Function};
    private state: { [key: string]: any};

    constructor(reducers = {}, initialState= {}) {
        this.reducers = reducers; //initialize reducers
        this.state = initialState; //initialize state
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
       for (const prop in this.reducers) {
           //newState.todos = this.reducers.todos()
           newState[prop] = this.reducers[prop](state[prop], action);
       }
       return newState;
    }
}