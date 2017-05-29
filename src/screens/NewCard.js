/**
 * Created by thiago on 21/05/2017.
 */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from '../microComponents/card';
import Button from '../microComponents/button';
import InternalBackground from '../microComponents/internalBackground';
import * as CardAction from '../actions/cardActions';

let isValid = false;
let card  = {};

const handleBack = () => {
    Actions.pop();

};


const handleOnChange = (data) => {
    isValid = data.valid;
    card  = data.values;
};


const saveNewCard = () => {

    if (!isValid) return;
    CardAction.storeCard(card);
    Actions.pop();

};

const NewCard = (props) => {

    return (
        <View style={styles.container}>
            <InternalBackground>
                <View style={styles.card}>
                    <Card onChange={(data) => handleOnChange(data)}/>
                </View>
                <View style={styles.buttons}>
                    <Button fontSize={18} width={140} paddingTop={10} paddingBottom={10} onPress={() => saveNewCard()}>
                        Add Card
                    </Button>
                    <Button fontSize={18} paddingTop={10} width={130} paddingBottom={10} onPress={() => handleBack()}>
                        Back
                    </Button>
                </View>
            </InternalBackground>
        </View>
    );

};

export default NewCard;


const styles = StyleSheet.create({
    card       : {
        marginTop: -25
    },
    container    : {
        flex          : 1,
        alignItems    : 'center',
        justifyContent: 'center',
    },
    menuPrincipal: {
        marginLeft: 20,
        alignItems: 'flex-start',

    },
    buttons       : {
        flex          : 1,
        flexDirection : 'row',
        justifyContent: 'space-around'
    }

});