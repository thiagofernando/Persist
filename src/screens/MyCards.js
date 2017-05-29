/**
 * Created by thiago on 21/05/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ListView, ScrollView, StyleSheet,  View} from 'react-native';
import InternalBackground from '../microComponents/internalBackground';
import {Actions, ActionConst} from 'react-native-router-flux';
import Button        from '../microComponents/button';
import CardView        from '../microComponents/cardView';

const handleNewCard = () => {

    Actions.newCard();
};


class MyCards extends Component {


    render() {

        const {cards} = this.props;
        console.log("card selector");


        let lista = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        lista = lista.cloneWithRows(cards);

        return (
            <View style={styles.container}>
                <InternalBackground>
                    <ScrollView style={styles.cardsContainer}>
                        {cards.length > 0 &&
                        <ListView dataSource={lista} renderRow={(data, sectionID, index) =>
                        <View style={styles.rowContainer}>
                            <CardView number={data.number} expiry={data.expiry} brand={data.type}/>
                        </View>
                        }/>}
                    </ScrollView>
                    <View >
                        <Button marginBottom={12} fontSize={18} paddingTop={10} paddingBottom={10}
                                width={210} onPress={() => {
                            handleNewCard()
                        }}> Add Card
                        </Button>
                    </View>
                </InternalBackground>
            </View>
        );
    }

}

MyCards.defaultProps = {
    cards: {}
};

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cardReducer.cards,
    }

};

export default connect(
    mapStateToProps
)(MyCards);


const styles = StyleSheet.create({
    back          : {
        alignItems : 'flex-end',
        marginRight: 20

    },
    cardsContainer: {
        flex  : 1,
        marginTop : 100,
        height: 200
    },
    container     : {
        flex          : 1,
        // alignItems    : 'center',
        // justifyContent: 'center',
    },
    rowContainer: {
        flex         : 1,
        flexDirection: 'row',
        alignItems   : 'center',
        marginLeft   : 20,
        marginRight  : 20
    },
});