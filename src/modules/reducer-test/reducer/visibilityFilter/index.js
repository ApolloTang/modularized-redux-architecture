const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
            const state_prev = state;
            let state_next;

            const visibility_next = action.payload.visibility;

            state_next = visibility_next;
            return state_next;
        }
        default:
            return state;
    }
};

export default visibilityFilter;

