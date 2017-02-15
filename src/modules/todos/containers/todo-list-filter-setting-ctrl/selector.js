import _ from 'lodash';
import { push } from 'connected-react-router'

const mapStoreToProps = (store, ownProps) => {
    const routing = _.get(store, `router.location`, void 0);
    console.log('ownProps: ', routing, store);
    return { routing };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch_navigate (to) {
            console.log('to: ', to);
            console.log('push ', push);
            dispatch(push(to));
        }
    }
};
export {mapStoreToProps, mapDispatchToProps};
