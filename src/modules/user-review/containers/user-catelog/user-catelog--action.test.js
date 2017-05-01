import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import actions from './action'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates c[`${nameSpace}__userCatelog_fetch_begin`] when userCatelog.init() is dispatch', () => {
    const store = mockStore();
    const expectedActions = { type: c[`${nameSpace}__userCatelog_fetch_begin`] };
    store.dispatch( actions.init() );
  });


  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {

    const userCatelog = [
      {
        "__v": 0,
        "_id": "5905fc6dc7bcb70a06f9397c",
        "name": "kkk"
      },
      {
        "__v": 0,
        "_id": "5905fcb5c7bcb70a06f9397e",
        "name": "ijku"
      }
    ];

    const ids_userCatelog = userCatelog.map( user=>user._id);

    nock('http://localhost:3000')
      .get('/api/users')
      .reply(200, userCatelog)


    const expectedActions = [
      {"type": c[`${nameSpace}__userCatelog_fetch_begin`]},
      {"type": c[`${nameSpace}__userCatelog_fetch_success`], "payload": { ids_userCatelog }   }
    ];

    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchUserCatelog())
      .then((arg) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})



