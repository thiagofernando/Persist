/**
 * Created by thiago on 21/05/2017.
 */

import React, {PropTypes} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {CreditCardInput} from "react-native-credit-card-input";


let onValidSubmit;
let dadosPreenchidos;
let dadosCartao;


_onFocus = field => {

    console.log(field);
};


const Card = (props) => {

    const {onChange} = props;

    return (
        <View>
            <View style={styles.container}>
                <CreditCardInput
                    autoFocus
                    requiresName
                    requiresCVC
                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    validColor={"black"}
                    invalidColor={"red"}
                    placeholderColor={"darkgray"}
                    onFocus={this._onFocus}
                    onChange={onChange}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom   : 30,
    },
    label    : {
        color   : "black",
        fontSize: 12,
    },
    input    : {
        fontSize: 16,
        color   : "black",
    }
});

export default Card;
