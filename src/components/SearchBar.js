import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity

} from 'react-native';

const SearchBar = (props) => {

    return (
        <TextInput
            style={props.style}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            autoCapitalize={props.autoCapitalize}
            returnKeyType={props.returnKeyType}
            placeholderTextColor={props.placeholderTextColor}
            inputRef={props.ref}
            onSubmitEditing={props.onSubmitEditing}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            secureTextEntry={props.secureTextEntry}
        />
    )
}

export default SearchBar;