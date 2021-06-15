import React, { useState, useEffect } from 'react';
import {
    Text,

    Dimensions,
    TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const TitleText = (props) => {

    return (
        <>
            <Text style={{
                color: '#E6E2EF', fontSize: 22,
                fontWeight: 'bold'
            }}>{props.title1}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={{
                    color: '#E6E2EF', fontSize: 14,
                    paddingRight: 20
                }}>{props.title2}</Text>
            </TouchableOpacity>
        </>
    )
}

export default TitleText;