import React, { useState, useEffect } from 'react';
import {

    View,
    Dimensions,
    FlatList,

} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const List = (props) => {
    return (
        <FlatList

            numColumns={props.numColumns}
            horizontal={props.horizontal}
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ width: 15 }}></View>
                )
            }

            }
            columnWrapperStyle={props.columnWrapperStyle}

        />
    )
}

export default List;