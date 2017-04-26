import todo from 'modules/reducer-test/reducer/todo/index.js';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const state_prev = state;
            let state_next;

            let todo_prev = void 0; // before adding, this todo did not exist, so undefined
            state_next = [
                ...state_prev,
                todo( todo_prev, action )
            ];

            return state_next;
        }
        case 'TOGGLE_TODO': {
            const state_prev = state;
            let state_next;

            const id = action.payload.id;

            state_next = state_prev.map( todo_prev => {
                let todo_next;

                if ( todo_prev.id === id ) { // is the id which todo we want to toggle
                    todo_next = todo( todo_prev, action);
                } else {                    // is not the id which todo we want to toggle
                    todo_next = todo_prev;
                }

                return todo_next;
            });

            return state_next;
        }
        default:
            return state;

    }
};

export default todos;

