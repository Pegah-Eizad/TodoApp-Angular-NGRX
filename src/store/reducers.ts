export const initialState  = { 
    loaded: false, 
    loading: false, 
    data: [{ label: 'Eat pizza', complete: false}] //reducer provides the initial state 
};

export function reducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
        case 'ADD_TODO': {
            const todo = action.payload;
            const data = [...state.data, todo];
            return {
                ...state, //merge in current state and change the data property
                data: data
            }
        }
    }
    return state;
}  