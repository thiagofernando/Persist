/**
 * Created by thiago on 15/05/2017.
 */


import React, {PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import getStyleFromProps from '../utils/stylesAssembler';

const Button = (props) => {

    const style = [
        styles.container,
        getStyleFromProps(['marginTop', 'marginBottom', 'width', 'flex', 'borderRadius', 'paddingBottom', 'paddingTop'], props)
    ];

    const textStyle = [
        styles.text,
        getStyleFromProps(['textAlign', 'fontSize'], props)
    ];


    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={style} onPress={props.onPress}>
                <Text style={textStyle}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Button;

Button.defaultProps = {
    borderRadius : 30,
    fontSize     : 22,
    paddingBottom: 16,
    paddingTop   : 16,
    textAlign    : "center",
    width        : 200,
};

Button.propTypes = {
    borderRadius : PropTypes.number,
    flex         : PropTypes.number,
    fontSize     : PropTypes.number,
    marginTop    : PropTypes.number,
    marginBottom : PropTypes.number,
    onPress      : PropTypes.func,
    paddingBottom: PropTypes.number,
    paddingTop   : PropTypes.number,
    textAlign    : PropTypes.string,
    width        : PropTypes.number,
};

const styles = StyleSheet.create({
    container: {
        paddingLeft    : 30,
        paddingRight   : 30,
        backgroundColor: '#29235c',
        alignItems     : "stretch",
        shadowColor    : "#000000",
        shadowOpacity  : 0.5,
        shadowRadius   : 2,
        shadowOffset   : {
            height: 2,
            width : 1
        },
    },
    text     : {
        color        : '#ffffff',
        fontFamily   : 'Montserrat-Regular',
        fontWeight   : "600",
        letterSpacing: 3
    }
});