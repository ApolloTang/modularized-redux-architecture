import c from '../../common/actions-names';
import {nameSpace, api_urlAndPort} from '../../config';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import actions from './action';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe(`
  :::::::::::::::::::::::::::::::::::::::::::::
  ::            Aync Action Test             ::
  ::      user-edit-create container         ::
  :::::::::::::::::::::::::::::::::::::::::::::
  `, () => {
    afterEach(() => { nock.cleanAll() })

    it(`
      :::: user-edit-create/action.draftInit(userId)
        on evoke it should:
          - dispatch "__user_editOrCreate_draft_open" action
        then it should:
          - dispatch "__user_editOrCreate_draft_initDefault" action and return the draft
    `, () => {
        const userId = '5905fc6dc7bcb70a06f9397c';
        const user = {
          "__v": 0,
          "_id": "5905fc6dc7bcb70a06f9397c",
          "name": "kkk"
        };
        nock(api_urlAndPort)
          .get('/api/users/5905fc6dc7bcb70a06f9397c')
          .reply(200, user)
        const expectedActions = [
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_open`]},
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_initDefault`], 'payload': {'draft': {'name': 'kkk'}} }
        ];
        const store = mockStore({});
        return store.dispatch(actions.draftInit(userId))
          .then((arg) => {
            expect(store.getActions()).toEqual(expectedActions)
          })

    }); // End user-edit-create/action.draftInit(userId)

    it(`
      :::: user-edit-create/action.draftInit(undefined)
        on evoke it should:
          - dispatch "__user_editOrCreate_draft_open" action
        then it should:
          - dispatch "__user_editOrCreate_draft_initDefault" action and return the draft
    `, () => {
        const userId = void 0;

        const draft = {'name': ''};
        const expectedActions = [
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_open`]},
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_initDefault`], 'payload': {draft} }
        ];
        const store = mockStore({}, expectedActions);

        return store.dispatch(actions.draftInit(userId))
            .then((arg) => {
              expect(store.getActions()).toEqual(expectedActions)
            });
    }); // End user-edit-create/action.draftInit(undifined)

    it(`
      :::: user-edit-create/action.draftChanged(data)
        on evoke it should:
          - dispatch "__user_editOrCreate_draft_changed" action with payload of data
    `, () => {
        const userId = void 0;
        const data = {'name': 'xxxxx'};
        const expectedActions = [
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_changed`], 'payload': {data} }
        ];
        const store = mockStore({}, expectedActions);

        return store.dispatch(actions.draftChanged(data))
            .then((arg) => {
              expect(store.getActions()).toEqual(expectedActions)
            });
    }); // End user-edit-create/action.draftChanged(data)
  });
