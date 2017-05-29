/**
 * Created by thiago on 30/04/2017.
 */

import {Platform} from 'react-native';

const getPlatformValue = (os, value, valueDefault) => {
    if(Platform.OS === os) return value;
    return valueDefault
};


export default getPlatformValue;