/**
 * Created by thiago on 14/05/2017.
 */
import React, {Component, PropTypes} from 'react';
import {View, Image, Dimensions, TouchableOpacity, Platform, ScrollView} from 'react-native';
import getStyleFromProps from '../utils/stylesAssembler';
import getPlatformValue from '../utils/platformIdentifier';
// require('../../images/background.svg')
import fundo from '../images/background_interno.png';
const window = Dimensions.get('window');

const InternalBackground = (props) => {

    const children = props.children;
    const style    = [
        styleWrapper.containerImage,
        getStyleFromProps(['paddingTop'], this.props)
    ];

    return (
        <Image style={style} source={fundo}>
            <ScrollView>
            {children}
            </ScrollView>
        </Image>
    )

};

export default InternalBackground;

const styleWrapper = {
    containerImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width     : window.width,
        height    : window.height,
        resizeMode: getPlatformValue('android', 'cover', 'contain'),
        paddingTop: getPlatformValue('android', 5, 22),
        marginTop: -30
    }
};