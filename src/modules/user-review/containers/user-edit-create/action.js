import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';

import { push } from 'connected-react-router'
import Action_userCatelog from  '../user-catelog/action'

function isValid_userId(userId) {
  return (userId.match(/^[0-9a-fA-F]{24}$/) || userId.match(/^new$/i));
};

const user_EditOrCreate = {
  draftInit (_userId) {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__user_editOrCreate_draft_open`],
        payload: { userId: _userId }
      });

      if (_userId && !isValid_userId(_userId)) {
        console.log('[Error] userId is invalid'); // eslint-disable-line no-console
        return;
      }

      // const isNew = /^new$/i.test(_userId);
      // const userId = isNew ? void 0 : _userId;
      const userId = _userId;

      // const draft_default = {...(_.cloneDeep(services.draftDefaultValues)) }; // @TODO
      const draft_default = {
        ...( _.cloneDeep({
          name: ''
        }))
      };

      if (userId) {
        API.users.getOne(userId).then(
          user => {
            // -- prepare initial draft for edit -- //
            const user_picked = _.pick(user, Object.keys(draft_default)); // only pick the field that required

            const draft = {
              ...draft_default,  // <-- merge with the initial value in case there are field missing from API
              ...user_picked
            };
            dispatch({
              type: c[`${nameSpace}__user_editOrCreate_draft_initDefault`],
              payload: { draft }
            });
          },
          err => {
            dispatch({
              type: c[`${nameSpace}__user_editOrCreate_draft_initDefault_fail`],
              error: err
            });
          }
        )
      } else if (!userId) {
        // -- prepare initial draft for create -- //
        const draft = { ...draft_default };

        dispatch({
          type: c[`${nameSpace}__user_editOrCreate_draft_initDefault`],
          payload: { userId, draft }
        });
      }
    }
  },
  draftChanged (data) {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__user_editOrCreate_draft_changed`],
        payload: { data }
      });
    };
  },
  darftSubmit(_userId) {
    if (_userId && !isValid_userId(_userId)) {
      console.log('[Error] userId is invalid'); // eslint-disable-line no-console
      return;
    }

    // const isNew = /^new$/i.test(_userId);
    // const userId = isNew ? void 0 : _userId;
    const userId = _userId;

    return (dispatch, getState) => {
      const draft = _.get(getState(), `modules.${nameSpace}.session.userEditOrCreate.draft`, void 0);

      dispatch({
        type: c[`${nameSpace}__user_editOrCreate_draft_saveInitiated`],
        payload: { userId, draft }
      });

      const draftErrors = _.get(getState(), `modules.${nameSpace}.session.userEditOrCreate.draftErrors`, null);
      if (draftErrors.length !== 0) {
        // Cannot send because there are erorrs in form
        return;
      }

      // @TODO serialized for api not impliment
      // const meta = {};
      // const  = _.cloneDeep( services.serializedForApi(draft, meta) );

      dispatch({
        type: c[`${nameSpace}__user_editOrCreate_draft_submit_start`],
        payload: { userId, draft }
      });

      if (userId) {
        API.users.update(userId, draft).then(
          userEdited => {
            dispatch({
              type: c[`${nameSpace}__user_editOrCreate_draft_submit_success`],
              payload: { userId, user:userEdited }
            });

            // 1) add this user to resource/user
               // @TODO
            // 2) update user catelog so it has this user
              dispatch(Action_userCatelog.fetchUserCatelog() )
            // 2) Navigate to view new user
              dispatch( push(`/users/${userId}`));
            // 4) Close Draft
              dispatch({
                  type: c[`${nameSpace}__user_editOrCreate_draft_close`],
                  payload: {}
              });
          }
        ).catch( err => {
          dispatch({
            type: c[`${nameSpace}__user_editOrCreate_draft_submit_fail`],
            error: err
          });
        });
      } else if (!userId) {
        API.users.create(draft).then(
          newUser => {
            dispatch({
              type: c[`${nameSpace}__user_editOrCreate_draft_submit_success`],
              payload: { userId, user:newUser }
            });

            const newId = newUser._id;

            // 1) add this user to resource/user
               // @TODO
            // 2) update user catelog so it has this user
              dispatch(Action_userCatelog.fetchUserCatelog() )
            // 2) Navigate to view new user
              dispatch( push(`/users/${newId}`));
            // 4) Close Draft
              dispatch({
                  type: c[`${nameSpace}__user_editOrCreate_draft_close`],
                  payload: {}
              });
          }
        ).catch( err => {
          dispatch({
            type: c[`${nameSpace}__user_editOrCreate_draft_submit_fail`],
            error: err
          });
        });
      }
    };
  },
  draftTearDown() {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__user_editOrCreate_draft_close`],
        payload: {}
      });
    };
  }
}

export default user_EditOrCreate;


