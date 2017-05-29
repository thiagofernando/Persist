/**
 * Created by thiag on 25/04/2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';


class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress     : 0,
            indeterminate: true,
        };
    }


    animate() {
        let progress = 0;
        this.setState({progress});
        setTimeout(() => {
            this.setState({indeterminate: false});
            setInterval(() => {
                console.log("a");
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({progress});
            }, 500);
        }, 1500);
    }

    render() {

        const {isLoading} = this.props;
        let loadingColor  = '#FF322A';
        if (!isLoading) {
            return null;
        }

        return (
            <View style={styles.loading}>
                <Progress.Circle style={styles.progress} showsText={true} color={loadingColor}
                                 progress={this.state.progress} indeterminate={this.state.indeterminate}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.mainReducer.isLoading
    }
};

export default connect(
    mapStateToProps
)(Loading);

const styles = StyleSheet.create({
    loading: {
        position      : 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems    : 'center'
    }

});

