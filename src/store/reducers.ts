import * as fromActions from './actions';

export const initialState  = { 
    loaded: false, 
    loading: false, 
    data: [{ label: 'Eat pizza', complete: false}] //reducer provides the initial state 
};

export function reducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
        case fromActions.ADD_TODO: {
            const todo = action.payload;
            const data = [...state.data, todo];
            return {
                ...state, //merge in current state and change the data property
                data: data
            };
        }
        case fromActions.REMOVE_TODO: {
             const data = state.data.filter(
                 todo => todo.label !== action.payload.label
             );
             return {
                 ...state, 
                 data
             };
        }
    }
    return state;
} 