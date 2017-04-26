const todo = (state = void 0, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const state_prev = state;
            let state_next;

            state_next = action.payload;

            return state_next;
        }
        case 'TOGGLE_TODO': {
            const state_prev = state;
            let state_next;

                state_next = {             // Create a new object
                    ...state_prev,         // copy previous properties to this new obj
                    done: !state_prev.done // invert the previous value of done
                };

            return state_next;
        }
        default:
            return state;
    }
};

export default todo;

