import todos from 'modules/reducer-test/reducer/todos/index.js';
import visibilityFilter from 'modules/reducer-test/reducer/visibilityFilter/index.js';

const app = (state = {}, action) => {
    return {
        todos: todos( state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityfilter, action)
    };
};

export default app;

