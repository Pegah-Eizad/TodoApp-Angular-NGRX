//action constants
export const ADD_TODO = '[TODO] Add Todo';
export const REMOVE_TODO = '[TODO] Remove Todo';

//action creators
export class AddTodo {
    //TS readonly prop, cannot add or edit after instantiation
    readonly type = ADD_TODO; 
    constructor(private payload: any) {}
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;
    constructor(private payload: any) {}
}

console.log('AddTodo Class in Actions', new AddTodo({}));