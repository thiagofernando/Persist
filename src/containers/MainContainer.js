/**
 * Created by thiago on 14/05/2017.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import BrContainer from '../microComponents/container';
import Loading from '../components/Loading';
import MessageDisplay from '../microComponents/messageDisplay';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }


    componentDidUpdate(prevProps) {

        console.log("Main Container - componentDidUpdate");
        const err = this.props.err;

        if (err !== prevProps.err) {
            if (err) {
                MessageDisplay(err)
            }
        }

    }

    render() {
        const {children} = this.props;


        return (
            <BrContainer>
                {children}
                <Loading/>
            </BrContainer>
        );
    }
}

MainContainer.propTypes = {
    children    : PropTypes.element,
    err        : PropTypes.string,
};

MainContainer
    .defaultProps = {
    children    : null,
    err        : "",
};

const
    mapStateToProps = (state) => {
        return {
            err: state.mainReducer.err,
        }
    };


export
default

connect(mapStateToProps)

(
    MainContainer
)
;



