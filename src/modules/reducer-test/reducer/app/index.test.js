import app from './index';

describe('\n == app: ==', () => {
    describe('unknown action', () => {
        const stateBefore = {
            todos: [],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: 'UNKNOWN',
            payload: {visibility: 'SHOW_DONE'}
        };

        const stateAfter = {
            todos: [],
            visibilityFilter: 'SHOW_ALL'
        };

        test('if action type is unknown, it should not mutate previous state (value is preserved)', ()=>{
            expect( app(stateBefore, action) ).toEqual( stateAfter );
        });
    });
    describe('SET_VISIBILITY_FILTER action', () => {
        const stateBefore = {
            todos: [],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            payload: {visibility: 'SHOW_DONE'}
        };
        const stateAfter = {
            todos: [],
            visibilityFilter: 'SHOW_DONE'
        };

        test('SET_VISIBILITY_FILTER works', ()=>{
            expect( app(stateBefore, action)).toEqual(stateAfter);
        });
    });
    describe('ADD_TODO action', () => {
        const stateBefore = {
            todos: [],
            visibilityFilter: 'SHOW_ALL'
        };

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 1,
                text: 'do something',
                done: false
            }
        };

        const stateAfter = {
            todos: [
                {
                    id: 1,
                    text: 'do something',
                    done: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        test('ADD_TODO works', ()=>{
            expect( app(stateBefore, action)).toEqual(stateAfter);
        });
    });
    describe('TOGGLE_TODO action', () => {
        const stateBefore = {
            todos: [
                {
                    id: 1,
                    text: 'do something',
                    done: false
                },
                {
                    id: 2,
                    text: 'do other thing',
                    done: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        const action = {
            type: 'TOGGLE_TODO',
            payload: {
                id: 1,
            }
        };

         const stateAfter = {
            todos: [
                {
                    id: 1,
                    text: 'do something',
                    done: true
                },
                {
                    id: 2,
                    text: 'do other thing',
                    done: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        test('TOGGLE_TODO works (value is as expected)', ()=>{
            expect( app(stateBefore, action) ).toEqual(stateAfter);
        });
        test('todo being toggle (id=1) is a new object (none mutation)', ()=>{
            expect( app(stateBefore, action).todos[0] ).not.toBe(stateAfter.todos[0]);
        });
    });
});


