/**
 * Created by thiago on 20/05/2017.
 */

import React from 'react';
import {Toast} from 'native-base';

const MessageDisplay = (message, position, buttonText) => {

     (
        Toast.show({
            text      : message,
            position  : position || 'bottom',
            buttonText: buttonText || 'OK'
        })
    )
 };

export default MessageDisplay;



