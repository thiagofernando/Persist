/**
 * Created by thiago on 14/05/2017.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-native-router-flux';
import Scenes from '../components/scenes';
import MainContainer from './MainContainer';
import {Actions, ActionConst} from 'react-native-router-flux';

const ConnectedRouter = connect()(Router);

const scenes     = Scenes();

class NavContainer extends Component {


    render() {

        return (
            <MainContainer >
                <ConnectedRouter scenes={scenes}/>
            </MainContainer>

        );
    }
}


export default NavContainer;


