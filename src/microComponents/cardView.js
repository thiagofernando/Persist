/**
 * Created by thiago on 15/05/2017.
 */


import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardView = (props) => {

    const {number, expiry, brand} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number} - {expiry}</Text>
        </View>
    )
};

export default CardView;

CardView.propTypes = {
    number: React.PropTypes.string.isRequired,
    expiry: React.PropTypes.string.isRequired,
    brand : React.PropTypes.string.isRequired,
    fontSize     : PropTypes.number,
    textAlign    : PropTypes.string,
};

CardView.defaultProps = {
    fontSize     : 18,
    textAlign    : "center",
};


const styles = StyleSheet.create({
    container: {
        flex          : 1,
        flexDirection : 'row',
        justifyContent: 'flex-start',
        alignItems    : 'center',
    },
    text     : {
                marginLeft : 20
    }
});