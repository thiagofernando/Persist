/**
 * Created by thiago on 14/05/2017.
 */

import {Container} from 'native-base';
import React from 'react';

const BrContainer = (props) => {

    const children = props.children;

    return (
        <Container>
            {children}
        </Container>
        )


};

export default BrContainer;