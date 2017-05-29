/**
 * Created by thiago on 14/05/2017.
 */

import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createTransform, persistStore, autoRehydrate} from 'redux-persist';
import createFilter, {createBlacklistFilter} from 'redux-persist-transform-filter';
import createEncryptor from 'redux-persist-transform-encrypt';
import { AsyncStorage } from 'react-native';

import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

import reducers from './reducers';

const loggerMiddleware = createLogger();


const encryptor = createEncryptor({
    secretKey: 'my-s$cret'
});



const store =
          createStore(
              reducers,
              compose(
                  // applyMiddleware(thunkMiddleware),
                  applyMiddleware(loggerMiddleware, thunkMiddleware),
                  autoRehydrate()
              )
          );


// you want to store only a subset of your state of reducer one
const saveSubsetFilter = createFilter(
    'cardReducer'          , ['cards']
);


persistStore(store, {
    whitelist : ['cardReducer', 'mainReducer'],
    transforms: [
        encryptor,
        saveSubsetFilter
    ],
    storage: AsyncStorage
});
// }).purge();



export default store;