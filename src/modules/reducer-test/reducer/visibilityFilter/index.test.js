import todos from './index';

describe('\n == visibilityFilter: ==', () => {

    describe('unknown action', () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'UNKNOWN',
            payload: {visibility: 'SHOW_DONE'}
        };
        const stateAfter = 'SHOW_ALL';

        test('if action type is unknown, it should return previous state (reference is preserved)', ()=>{
            expect( todos(stateBefore, action)).toBe(stateBefore);
        });
        test('if action type is unknown, it should not mutate previous state (value is preserved)', ()=>{
            expect( todos(stateBefore, action) ).toEqual( stateAfter );
        });
    });

    describe('SET_VISIBILITY_FILTER action', () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            payload: {visibility: 'SHOW_DONE'}
        };
        const stateAfter = 'SHOW_DONE';

        test('SET_VISIBILITY_FILTER works', ()=>{
            expect( todos(stateBefore, action)).toEqual(stateAfter);
        });
    });

});


