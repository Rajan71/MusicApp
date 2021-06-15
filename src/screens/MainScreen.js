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
    ImageBackground

} from 'react-native';
import { SearchBar, List, TitleText } from '../components/index';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    imageData, bigStageData, featuredData, upcomingData, latestData, playlistData,
    categoriesData, podcastData
} from '../components/MainScreenData'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





const MainScreen = (props) => {
    const [search, setSearch] = useState('')

    const renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', }} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.7 }} />
            </View>
        )
    }

    const renderItem1 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.5 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 15, }}>{item.title1}</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12, }}>{item.title2}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const renderItem2 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.3 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 15, }}>{item.name}</Text>
                    </View>

                </View>
            </View>
        )
    }
    const renderItem3 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <ImageBackground source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.5 }} resizeMode={'stretch'} >
                    <View style={{
                        height: '25%', width: '30%', backgroundColor: 'gray', alignItems: 'center',
                        justifyContent: 'center', marginTop: 5, marginLeft: 5
                    }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 13 }}>{item.date}</Text>
                    </View>
                    <View style={{
                        height: '25%', width: '30%', backgroundColor: 'gray', alignItems: 'center',
                        justifyContent: 'center', alignSelf: 'flex-end', position: 'absolute', bottom: 0
                    }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 13 }}>{item.date}</Text>
                    </View>
                </ImageBackground>
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
    const renderItem4 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <ImageBackground source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.5 }} resizeMode={'stretch'} >

                    <View style={{
                        height: '25%', width: '40%', backgroundColor: 'gray', alignItems: 'center',
                        justifyContent: 'center', alignSelf: 'flex-end', position: 'absolute', bottom: 0
                    }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12 }}>{item.date}</Text>
                    </View>
                </ImageBackground>
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

    const renderItem5 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.3, width: windowWidth * 0.3 }} resizeMode={'stretch'} />
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 15, }}>{item.title1}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12, }}>{item.desc}</Text>
                    </View>

                </View>
            </View>
        )
    }

    const renderItem6 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <ImageBackground source={item.src} style={{ height: windowWidth * 0.17, width: windowWidth * 0.28 }} resizeMode={'stretch'} >

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center', alignSelf: 'center', position: 'absolute', bottom: 15
                    }}>
                        <Text style={{ color: '#E6E2EF', fontSize: 12, fontWeight: 'bold' }}>{item.title1}</Text>
                    </View>
                </ImageBackground>

            </View>
        )
    }
    const renderItem7 = ({ item }) => {
        return (
            <View style={{}} key={item.id}>
                <Image source={item.src} style={{ height: windowWidth * 0.27, width: windowWidth * 0.27 }} resizeMode={'stretch'} />
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
        <View style={styles.containerStyle}>

            <View style={styles.mainViewStyle}>
                <View style={{ marginTop: 25 }}>

                    <Text style={{ color: '#FFD874', fontSize: 14, fontWeight: 'bold' }}>Hey, Alex</Text>
                </View>
                <View style={{
                    width: windowWidth, height: windowWidth * 0.15, marginTop: 8,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                }}>
                    <View style={{ justifyContent: 'flex-start', width: '85%', }}>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Let's Play Music</Text>
                    </View>
                    <View style={{ paddingRight: 20 }}>
                        <Image source={require('../assets/images/sec.png')}
                            style={{ height: 40, width: 40 }} />
                    </View>


                </View>
                <ScrollView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SearchScreen')}>

                        <View style={{
                            marginTop: 10,
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
                    </TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{
                            color: '#E6E2EF', fontSize: 22,
                            fontWeight: 'bold'
                        }}>New Release</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem}
                            data={imageData}
                            horizontal={true}
                        />
                    </View>

                    <View style={styles.titleStyle}
                    >
                        <TitleText
                            title1='Big Stage Artists'
                            title2='Browse All'
                            onPress={() => props.navigation.navigate('BigStage')} />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem1}
                            data={bigStageData}
                            horizontal={true}
                        />
                    </View>

                    <View style={styles.titleStyle}
                    >
                        <TitleText
                            title1='Featured Artists'
                            title2='Browse All' />
                    </View>

                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem2}
                            data={featuredData}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.titleStyle}
                    >
                        <TitleText
                            title1='Upcoming Events'
                            title2='Browse All' />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem3}
                            data={upcomingData}

                            horizontal={true}
                        />
                    </View>
                    <View style={styles.titleStyle}>
                        <TitleText
                            title1='Latest News'
                            title2='View All' />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem4}
                            data={latestData}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.titleStyle}>
                        <TitleText
                            title1='My PlayList'
                        // title2='View All' 
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem5}
                            data={playlistData}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.titleStyle}>

                        <TitleText
                            title1='Categories'
                        // title2='View All' 
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem6}
                            data={categoriesData}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.titleStyle}

                    >
                        <TitleText
                            title1='Podcast'
                            title2='Browse All'
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <List renderItem={renderItem7}
                            data={podcastData}
                            horizontal={true}
                        />
                    </View>

                </ScrollView>

            </View>

        </View>
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
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default MainScreen;