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

const songsData = [
    { src: require('../assets/images/Image5.png'), name: 'For You', id: 7 },
    { src: require('../assets/images/Image5.png'), name: 'Mujhe Peene Do', id: 8 },
    { src: require('../assets/images/Image5.png'), name: 'Humnava Mere', id: 9 },
    { src: require('../assets/images/Image5.png'), name: 'Dimond Heart', id: 10 },
    { src: require('../assets/images/Image5.png'), name: 'Tamasha', id: 11 }

]

const artistsData = [
    { src: require('../assets/images/Image5.png'), name: 'Arjit Singh', id: 12 },
    { src: require('../assets/images/Image5.png'), name: 'Tulshi Kumar', id: 13 },
    { src: require('../assets/images/Image5.png'), name: 'Darshan Raval', id: 14 },
    { src: require('../assets/images/Image5.png'), name: 'Atif Aslam', id: 15 },
    { src: require('../assets/images/Image5.png'), name: 'Amit Trivedi', id: 16 }

]

const categoriesData = [
    { src: require('../assets/images/Image5.png'), name: 'Bollywood', id: 17 },
    { src: require('../assets/images/Image5.png'), name: 'Tamil', id: 18 },
    { src: require('../assets/images/Image5.png'), name: 'Telegu', id: 19 },
    { src: require('../assets/images/Image5.png'), name: 'Pop', id: 20 },
    { src: require('../assets/images/Image5.png'), name: 'Romance', id: 21 },
    { src: require('../assets/images/Image5.png'), name: 'Romance', id: 22 }

]

const SearchScreen = () => {
    const [search, setSearch] = useState('')

    const renderItem = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.3 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 13, }}>{item.name}</Text>
                    </View>

                </View>
            </View>
        )
    }

    const renderItem1 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.3 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 13, }}>{item.name}</Text>
                    </View>

                </View>
            </View>
        )
    }

    const renderItem2 = ({ item }) => {
        return (
            <View style={{ marginBottom: 20 }} key={item.id}>
                <ImageBackground source={item.src} style={{ height: windowWidth * 0.25, width: windowWidth * 0.45 }} resizeMode={'stretch'} >

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center', alignSelf: 'center', position: 'absolute', bottom: 15
                    }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                </ImageBackground>

            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.containerStyle}>
                <View style={styles.mainViewStyle}>

                    <View style={{ marginTop: 25 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 24, fontWeight: 'bold' }}>Search</Text>

                    </View>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // width: windowWidth * 0.9,
                        height: windowWidth * 0.11,
                        borderWidth: 1,
                        borderColor: '#5B5F81',
                        borderRadius: 10,

                        alignSelf: 'center'
                    }}>
                        <Icon name='search1' size={25} color={'#5B5F81'} style={{ paddingLeft: 10 }} />
                        <SearchBar
                            style={styles.srcInputStyle}
                            value={search}
                            onChangeText={() => setSearch()}
                            placeholder='Search Song or Artists'
                            placeholderTextColor='#5B5F81'
                        />

                    </View>
                    <View style={[styles.titleStyle, { marginTop: 15 }]}>
                        <TitleText
                            title1='Popular Songs'
                            title2='Browse All' />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem}
                            data={songsData}
                            horizontal={true}
                        />
                    </View>

                    <View style={[styles.titleStyle, { marginTop: 25 }]}>
                        <TitleText
                            title1='Popular Artists'
                            title2='Browse All' />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem1}
                            data={artistsData}
                            horizontal={true}
                        />
                    </View>

                    <View style={[styles.titleStyle, { marginTop: 15 }]}>
                        <TitleText
                            title1='Categories'
                            title2='Browse All' />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem2}
                            data={categoriesData}
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
        flex: 1
    },
    srcInputStyle: {
        padding: 10,
        flex: 1
    },
    titleStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
})

export default SearchScreen;