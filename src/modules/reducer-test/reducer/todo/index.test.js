import todo from './index';

describe('\n == todo: == ', () => {

    describe('unknown action', () => {
        const stateBefore = {
            id: 1,
            text: 'do something',
            done: false
        };
        const action = {
            type: 'UNKNOWN',
            payload: {}
        };
        const stateAfter = {
            id: 1,
            text: 'do something',
            done: false
        };
        test('if action type is unknown, it should return previous state (reference is preserved)', ()=>{
            expect( todo(stateBefore, action)).toBe(stateBefore);
        });
        test('if action type is unknown, it should not mutate previous state (value is preserved)', ()=>{
            expect( todo(stateBefore, action) ).toEqual( stateAfter );
        });
    });

    describe('ADD_TODO action', () => {
        const stateBefore = void 0;

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 1,
                text: 'do something',
                done: false
            }
        };

        const stateAfter = {
            id: 1,
            text: 'do something',
            done: false
        };

        test('ADD_TODO works', ()=>{
            expect( todo(stateBefore, action)).toEqual(stateAfter);
        });
    });

    describe('TOGGLE_TODO action', () => {
        const stateBeforeToggle = {
            id: 1,
            text: 'do something',
            done: false
        };
        const action = {
            type: 'TOGGLE_TODO',
            payload: {
                id: 1,
            }
        };
        const stateAfterToggle = {
            id: 1,
            text: 'do something',
            done: true
        };
        test('TOGGLE_TODO works (value is as expected)', ()=>{
            expect( todo( stateBeforeToggle, action ) ).toEqual( stateAfterToggle );
        });
        test('todo being toggle is a new object (none mutation)', ()=>{
            expect( todo( stateBeforeToggle, action ) ).not.toBe( stateBeforeToggle );
        });
    });

});
