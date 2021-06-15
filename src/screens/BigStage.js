import React, { useState, useEffect } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
    ImageBackground

} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar, List, TitleText } from '../components/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const latestData = [
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 1
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 2
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 3
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 4
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 5
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 6
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 7
    },
    {
        src: require('../assets/images/Image5.png'), title1: 'MarshMallow Live Concert',
        desc: 'MarshMallow', id: 8
    }


]



const BigStage = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.25, width: windowWidth * 0.45 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 15, }}>{item.title1}</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12, }}>{item.desc}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.containerStyle}>

                <View style={styles.mainViewStyle}>

                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <View style={{
                            height: windowWidth * 0.08, width: windowWidth * 0.08, alignSelf: 'flex-start', backgroundColor: '#2B2D31',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Icon name='sound' size={20} color={'#E6E2EF'} />
                        </View>
                        <View style={{
                            alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
                            height: windowWidth * 0.1, width: windowWidth * 0.8,
                        }}>
                            <Text style={{ color: '#E6E2EF', fontSize: 20, }}>Big Stage Artists</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ImageBackground source={require('../assets/images/Image5.png')}
                            style={{ height: windowHeight * 0.33, width: windowWidth }} resizeMode='stretch'>
                            <View style={styles.textStyle}

                            >
                                <View style={{ marginTop: 5, width: windowWidth * 0.8, }}>
                                    <Text style={{ fontSize: 14, color: '#E6E2EF' }}>MarshMallow Live Concert</Text>
                                    <View style={{ marginTop: 5, width: windowWidth * 0.8, }}>
                                        <Text style={{ fontSize: 12, color: '#E6E2EF' }}>MarshMallow</Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: windowWidth * 0.12, width: windowWidth * 0.12, alignSelf: 'flex-end', alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Icon name='play' size={25} color={'#FFD874'} style={{}} />
                                </View>


                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.titleStyle, { marginTop: 15 }]}
                    >
                        <TitleText
                            title1='Latest Videos'
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <List
                            renderItem={renderItem}
                            data={latestData}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                        />
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#181A20',
        flex: 1
    },
    mainViewStyle: {
        marginHorizontal: 10,
        // borderColor: '#fff',
        // borderWidth: 1,
        flex: 1
    },
    // srcInputStyle: {
    //     padding: 10,
    //     flex: 1
    // },
    titleStyle: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        backgroundColor: '#4B5357',
        height: windowWidth * 0.12,
        width: windowWidth,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9
    }
})

export default BigStage;