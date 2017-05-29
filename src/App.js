/**
 * Created by thiago on 14/05/2017.
 */

import React from 'react';
import {Provider} from 'react-redux';
import NavContainer from './containers/NavContainer';
import createStore from './config/store';

const store = createStore;

export default () => (
    <Provider store={createStore}>
        <NavContainer />
    </Provider>
);


