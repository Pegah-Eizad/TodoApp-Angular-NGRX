export class Store {
    private subscribers: Function[]; //function array
    private reducers: { [key: string]: Function};
    private state: { [key: string]: any};

    constructor(reducers = {}, initialState= {}) {
        //initialize state
        this.state = initialState;
    }

    //using TS 'get' property
    get value() {
        return this.state;
    }

    dispatch(action){
        this.state = {
            ...this.state,
            todos: [...this.state.todos, action.payload]
        };
    }
}