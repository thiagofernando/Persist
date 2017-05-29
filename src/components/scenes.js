/**
 * Created by thiago on 14/05/2017.
 */
import React from 'react';
import {Actions, ActionConst, Scene} from 'react-native-router-flux';


import MyCards from '../screens/MyCards';
import NewCard from '../screens/NewCard';

const Scenes = () => {

    return Actions.create(
        <Scene key='root'>
            <Scene key='myCards' title='My Cards' hideNavBar initial component={MyCards}></Scene>
            <Scene key='newCard' title='New Card' component={NewCard}></Scene>

        </Scene>
    );
};

export default Scenes;


