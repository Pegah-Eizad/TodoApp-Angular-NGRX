//action constants
export const ADD_TODO = '[TODO] Add Todo';

//action creators
export class AddTodo {
    //TS readonly prop, cannot add or edit after instantiation
    readonly type = ADD_TODO; 
    constructor(private payload: any) {}
}

console.log('AddTodo Class in Actions', new AddTodo({}));