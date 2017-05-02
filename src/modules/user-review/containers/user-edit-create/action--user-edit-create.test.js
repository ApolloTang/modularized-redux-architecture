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


    it(`
      :::: user-edit-create/action.draftSubmit(userId)
        on evoke it should:
          - dispatch "__user_editOrCreate_draft_submit_start" action
        then it should:
          - dispatch "__user_editOrCreate_draft_submit_success" action and return the draft
    `, () => {
        const userId = '5905fc6dc7bcb70a06f9397c';
        const draft = {
          "name": "previous"
        };
        const receiveUser = {
          "__v": 0,
          "_id": "5905fc6dc7bcb70a06f9397c",
          "name": "newName"
        };
        nock(api_urlAndPort)
          .put('/api/users/5905fc6dc7bcb70a06f9397c', draft)
          .reply(200, receiveUser);
        const expectedActions = [
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_saveInitiated` ], 'payload': {'draft': {'name': 'previous'}, 'userId':userId} },
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_submit_start` ], 'payload': {'draft': {'name': 'previous'}, 'userId':userId} },
          { 'type': c[`${nameSpace}__user_editOrCreate_draft_submit_success`], 'payload': {'draft': {'name': 'newName'}} }
        ];
        const store = mockStore({
          modules: {
            userReview: {
              session: {
                userEditOrCreate: {
                  draft: draft,
                  draftErrors: []
                }
              }
            }
          }
        });
        return store.dispatch(actions.darftSubmit(userId))
          .then((arg) => {
              console.log('0 Received: type : ', store.getActions()[0].type);
              console.log('0 Expected: type : ', expectedActions[0].type);
              expect(store.getActions()[0].type).toBe(expectedActions[0].type)
              console.log('0 Received: payload : ', store.getActions()[0].payload);
              console.log('0 Expected: payload : ', expectedActions[0].payload);
              expect(store.getActions()[0].payload).toEqual(expectedActions[0].payload)
              console.log('1 Received: type : ', store.getActions()[1].type);
              console.log('1 Expected: type : ', expectedActions[1].type);
              expect(store.getActions()[1].type).toBe(expectedActions[1].type)
              console.log('1 Received: payload : ', store.getActions()[1].payload);
              console.log('1 Expected: payload : ', expectedActions[1].payload);
              expect(store.getActions()[1].payload).toEqual(expectedActions[1].payload)
              console.log('2 Received: type : ', store.getActions()[2].type);
              console.log('2 Expected: type : ', expectedActions[2].type);
              expect(store.getActions()[2].type).toBe(expectedActions[2].type)
              console.log('2 Received: type : ', store.getActions()[2]);
              console.log('2 Expected: type : ', expectedActions[2]);
              expect(store.getActions()[2].type).toBe(expectedActions[2].type)
              // console.log('action:0: payload.draft.name  to be equal', store.getActions()[0].payload.draft.namee)
              // expect((store.getActions()[0].payload.draft.name)).toEqual(Object.keys(expectedActions[0].payload.draft.name))

            // console.log('xxxxxx:0 ', store.getActions()[0])
            // console.log('xxxxxx:0.payload.darft.userId ', store.getActions()[0].payload.userId)
            // console.log('xxxxxx:1 ', store.getActions()[1])
            // console.log('xxxxxx:2 ', store.getActions()[2])
            //
            // expect((store.getActions()[0].payload.userId)).toEqual(Object.keys(expectedActions[0].payload.userId))
            // expect(store.getActions()[0]['type']).toEqual(expectedActions[0]['type'])
            // expect(store.getActions()[1]['type']).toEqual(expectedActions[1]['type'])
            // expect(store.getActions()).toEqual(expectedActions)
          })

    }); // End user-edit-create/action.darftSubmit(userId)


    // don't for get create is reply with 201
  });
