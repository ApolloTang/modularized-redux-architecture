import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import actions from './action'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe( `
  :::::::::::::::::::::::::::::::::::::::::::::
  ::            Aync Action Test             ::
  ::           user-view container           ::
  :::::::::::::::::::::::::::::::::::::::::::::
  `, () => {
    afterEach(() => { nock.cleanAll() })

  it(':::: user-view/action.fetchUser(), on success should return a user', () => {
    const userId = '5905fc6dc7bcb70a06f9397c';
    const user = {
      "__v": 0,
      "_id": "5905fc6dc7bcb70a06f9397c",
      "name": "kkk"
    };

    nock('http://localhost:3000')
      .get('/api/users/5905fc6dc7bcb70a06f9397c')
      .reply(200, user)

    const expectedActions = [
      {"type": c[`${nameSpace}__userView_fetch_begin`]},
      {"type": c[`${nameSpace}__userView_fetch_success`], "payload": { user }   }
    ];

    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchUser(userId))
      .then((arg) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it(':::: User-view/action.fetchUser(userId), on fail should return a httpError object', () => {
    const userId = '5905fc6dc7bcb70a06f9397c';
    const httpError = { };
    const user = { httpError };

    nock('http://localhost:3000')
      .get('/api/users/5905fc6dc7bcb70a06f9397c')
      .reply(404)

    const expectedActions = [
      {"type": c[`${nameSpace}__userView_fetch_begin`]},
      {"type": c[`${nameSpace}__userView_fetch_fail`], "payload": { httpError:{} }   }
    ];

    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchUser(userId))
      .then((arg) => {
        expect(store.getActions()[0]['type']).toEqual(expectedActions[0]['type'])
        expect(store.getActions()[1]['type']).toEqual(expectedActions[1]['type'])
        expect(Object.keys(store.getActions()[1]['payload']))
          .toEqual(Object.keys(expectedActions[1]['payload']))
      })
  });

  it(`:::: user-view/action.deleteUser(), on success should:
      1) return a user
      2) fetch user catelog
      3) navigate to /users`
    , () => {
    const userId = '5905fc6dc7bcb70a06f9397c';
    const user = {
      "__v": 0,
      "_id": "5905fc6dc7bcb70a06f9397c",
      "name": "kkk"
    };

    nock('http://localhost:3000')
      .delete('/api/users/5905fc6dc7bcb70a06f9397c')
      .reply(200, user)

    const expectedActions = [
      {"type": c[`${nameSpace}__userView_delete_begin`]},
      {"type": c[`${nameSpace}__userView_delete_success`], "payload": { user }   },
      {"type": c[`${nameSpace}__userCatelog_fetch_begin`]},
      {"type": '@@router/CALL_HISTORY_METHOD', "payload": {"args": ["/users"], "method": "push"}   }
    ];

    const store = mockStore({ todos: [] })

    return store.dispatch(actions.deleteUser(userId))
      .then((arg) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
})



